import React from 'react';
import { FaTools } from 'react-icons/fa';
import Navbar from '../home/Navbar';
import { Link } from 'react-router-dom';

function InsertPin() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-indigo-700 flex items-center justify-center">
        <div
          className="bg-cover bg-center w-screen h-screen opacity-75"
          style={{
            backgroundImage: "url('./src/login/ABC.png')",
          }}
        >
          <div className="flex items-center justify-center h-screen" style={{ marginTop: '-20vh' }}>
            <div className="bg-indigo-700 h-1/3 w-1/3 flex flex-col items-center justify-center rounded-[30px]">
              {/* Conteúdo da div */}
              <div className="mb-4">
                <span className="text-white font-bold mr-2">Nome do Aluno:</span>
                <input type="text" className="appearance-none block rounded py-2 px-4 text-gray-700 bg-white focus:bg-white border border-gray-200 focus:border-gray-500 focus:outline-none" />
              </div>
              <div className="mb-4">
                <span className="text-white font-bold mr-2">Pin:</span>
                <input type="text" className="appearance-none block rounded py-2 px-4 text-gray-700 bg-white focus:bg-white border border-gray-200 focus:border-gray-500 focus:outline-none" />
              </div>
              <Link to="/activity">
              <button className="bg-white text-indigo-700 px-4 py-2 rounded" onClick={() => console.log('Iniciar')}>
                Iniciar
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertPin;
