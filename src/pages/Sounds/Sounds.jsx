import { useState, useEffect } from 'react';
import useSoundsApi from '../../hooks/useSoundsApi';

const Sounds = () => {
  const [sounds, setSounds] = useState([]);
  const { getSounds } = useSoundsApi();

  useEffect(() => {
    const fetchSounds = async () => {
      const response = await getSounds();
      setSounds(response);
    };
    fetchSounds();
  }, []);

  const groupAndSortSounds = (sounds) => {
    const groupedSounds = sounds.reduce((groups, sound) => {
      const { type } = sound;
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(sound);
      return groups;
    }, {});

    Object.keys(groupedSounds).forEach((type) => {
      groupedSounds[type].sort((a, b) => a.order - b.order);
    });

    return groupedSounds;
  };

  const groupedSounds = groupAndSortSounds(sounds);

  return (
    <div>
      <h1>Sounds</h1>
      {Object.keys(groupedSounds).map((type) => (
        <div key={type}>
          <h2>{type}</h2>
          {groupedSounds[type].map((sound) => (
            <div className="sound" key={sound._id}>
              <p>{sound.name}</p>
              <audio src={sound.url} controls></audio>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sounds;
