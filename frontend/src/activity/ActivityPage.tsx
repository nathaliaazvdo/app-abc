import React, { useEffect, useState } from 'react';
import { FaClock, FaArrowRight  } from 'react-icons/fa';
import { useNavigate  } from 'react-router-dom';
import CustomAlert from './CustomAlert';


const ActivityPage: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(90); // 90 seconds
  const [letters, setLetters] = useState(['', '', '', '']);
  const correctLetters = ['c', 'a', 's', 'a'];
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      // Time is up, redirect to /finish
      navigate('/timeisup');
    }
  }, [seconds, navigate]);

  const getProgressWidth = () => {
    const percentage = (seconds / 90) * 100; // Calculate percentage based on 90 seconds
    return `${percentage}%`;
  };

  const handleInputChange = (index: number, value: string) => {
    const newLetters = [...letters];
    newLetters[index] = value.toLowerCase();
    setLetters(newLetters);
  };

  const checkLetters = () => {
    const isCorrect = letters.every((letter, index) => letter === correctLetters[index]);
    if (isCorrect) {
      return true;
    } else {
      return false;
    }
  };

  const handleButtonClick = () => {
    if (checkLetters()==true) {
      // Se todas as respostas estiverem corretas, redireciona para /finish
      navigate('/finish');
    } else {
      // Caso contrário, faz alguma ação ou exibe uma mensagem de erro
      setShowAlert(true);
    }
  };

  const handleCloseAlert = () => {
    // Função para fechar o alerta
    setShowAlert(false);
  };

  return (
    <div className="min-h-screen relative">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75 blur-xs"
        src="src/activity/bg-farm.jpg"
        alt="background"
      />
      <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-700 rounded-lg z-50">
        <img className="absolute top-1 left-2 w-full h-full object-cover" src="src/activity/house.png" alt="background" />
      </div>
      <div className="flex items-center absolute top-0 right-0 text-white text-3xl z-10 mr-4">
        <FaClock className="mt-1 mr-2 w-6" />
        {Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}
      </div>
      <div className="w-full h-10 rounded bg-gray-500 overflow-hidden mb-4 relative" style={{ top: 0 }}>
        <div className="h-full w-full bg-indigo-700 rounded-r-full" style={{ width: getProgressWidth(), transition: 'width 0.3s ease' }}></div>
      </div>
      <div className="fixed flex justify-center items-center w-screen h-screen mt-10">
        {letters.map((letter, index) => (
        <input
        key={index}
        className={`w-20 h-20 rounded-lg mx-2 text-center ${
          letter === '' ? 'bg-indigo-700' : letter.toLowerCase() === correctLetters[index] ? 'bg-green-700' : 'bg-red-700'
        } text-4xl font-mono font-medium uppercase text-white`}
        maxLength={1}
        value={letter}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />

        ))}
      </div>
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2" onClick={handleButtonClick}>
        <button className="bg-indigo-700 hover:bg-indigo-800 rounded-full p-2 text-white">
          <FaArrowRight className="w-12 h-12" />
        </button>
      </div>
      {showAlert && <CustomAlert onClose={handleCloseAlert} />}
    </div>
  );
};

export default ActivityPage;