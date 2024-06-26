import { useState, useEffect, useRef } from 'react';
import useSoundsApi from '../../hooks/useSoundsApi';
import './Sounds.scss';

const Sounds = () => {
  const [sounds, setSounds] = useState([]);
  const [playingSoundId, setPlayingSoundId] = useState(null);
  const audioRefs = useRef({});

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

  const handleSoundClick = (sound) => {
    if (playingSoundId === sound._id) {
      audioRefs.current[sound._id].pause();
      setPlayingSoundId(null);
    } else {
      if (playingSoundId !== null) {
        audioRefs.current[playingSoundId].pause();
      }
      audioRefs.current[sound._id].play();
      setPlayingSoundId(sound._id);
    }
  };

  const groupedSounds = groupAndSortSounds(sounds);

  return (
    <div>
      <h1>Sounds</h1>
      {Object.keys(groupedSounds).map((type) => (
        <div key={type}>
          <h2>{type}</h2>
          <div className="group_buttons_container">
            {groupedSounds[type].map((sound) => (
              <button
                className="sound_button"
                key={sound._id}
                onClick={() => handleSoundClick(sound)}
              >
                {playingSoundId !== sound._id ? (
                  <img className="button_img" src="play.png" alt="Play" />
                ) : (
                  <img className="button_img" src="pause.png" alt="Pause" />
                )}
                <audio
                  ref={(element) => {
                    audioRefs.current[sound._id] = element;
                  }}
                  src={sound.url}
                  onPlay={() => setPlayingSoundId(sound._id)}
                  onPause={() => setPlayingSoundId(null)}
                  onEnded={() => setPlayingSoundId(null)}
                ></audio>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sounds;
