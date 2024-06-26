import { useState, useRef, useEffect } from 'react';
import './ButtonContainer.scss';
import useCallsApi from '../../hooks/useCallsApi';

const ButtonContainer = () => {
  const [audioUrl, setAudioUrl] = useState('');
  const [reproducing, setReproducing] = useState(false);
  const audioRef = useRef(null); // Referencia al elemento de audio
  const { getAudio } = useCallsApi();
  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await getAudio();

        // Crear un objeto URL para el Blob recibido
        const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(audioBlob);

        // Actualizar el estado con la URL del audio
        setAudioUrl(url);
      } catch (error) {
        console.error('Error al obtener el audio:', error);
      }
    };

    fetchAudio();
  }, []);

  const handleReproduce = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reiniciar la posición de reproducción
      audioRef.current.play(); // Iniciar la reproducción
      setReproducing(true);
    }
  };

  const handleAudioEnded = () => {
    // Restablecer el estado de audioUrl a vacío cuando el audio termina
    setReproducing(false);
  };

  return (
    <div className="button_container">
      <div className="button_circle" onClick={handleReproduce}>
        {!reproducing ? (
          <h4>Press me!</h4>
        ) : (
          <img
            src="https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/miau_images%2Fsounds.png?alt=media&token=0585495c-f66f-458e-9d62-8b022d7d6119"
            alt="reproducing"
          />
        )}
      </div>
      {audioUrl && (
        <audio ref={audioRef} onEnded={handleAudioEnded}>
          <source src={audioUrl} type="audio/mpeg" />
          Su navegador no soporta el elemento de audio.
        </audio>
      )}
      <h4>The one to meow them all!</h4>
    </div>
  );
};

export default ButtonContainer;
