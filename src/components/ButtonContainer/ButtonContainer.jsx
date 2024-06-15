import { useState, useRef } from 'react';
import './ButtonContainer.scss';
import axios from 'axios';

const ButtonContainer = () => {
  const [audioUrl, setAudioUrl] = useState('');
  const audioRef = useRef(null); // Referencia al elemento de audio

  const reproduce = async () => {
    try {
      const response = await axios.get(
        'https://miauserver-production.up.railway.app/api/sounds',
        {
          responseType: 'blob', // Para recibir el contenido como un objeto Blob
        }
      );

      // Crear un objeto URL para el Blob recibido
      const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(audioBlob);

      // Actualizar el estado con la URL del audio
      setAudioUrl(url);

      // Reiniciar la reproducción del audio si ya se estaba reproduciendo
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reiniciar la posición de reproducción
        audioRef.current.play(); // Iniciar la reproducción
      }
    } catch (error) {
      console.error('Error al obtener el audio:', error);
    }
  };

  const handleAudioEnded = () => {
    // Restablecer el estado de audioUrl a vacío cuando el audio termina
    setAudioUrl('');
  };

  return (
    <div className="button_container">
      <div className="button_circle" onClick={reproduce}>
        {!audioUrl ? (
          <h4>Press me!</h4>
        ) : (
          <img src="reproducing.png" alt="reproducing" />
        )}
      </div>
      {audioUrl && (
        <audio ref={audioRef} autoPlay onEnded={handleAudioEnded}>
          <source src={audioUrl} type="audio/mpeg" />
          Su navegador no soporta el elemento de audio.
        </audio>
      )}
      <h4>The one to meow them all!</h4>
    </div>
  );
};

export default ButtonContainer;
