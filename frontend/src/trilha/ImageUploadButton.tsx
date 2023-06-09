import React, { useRef } from 'react';

const ImageUploadButton: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // Aqui você pode fazer o processamento ou envio da imagem
    console.log(file);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleButtonClick} className='mr-2 mb-4  inline-block leading-none text-white bg-indigo-700 hover:bg-indigo-700 font-semibold rounded shadow py-3 px-4 '>
        + Adicionar Imagem
      </button>
    </>
  );
};

export default ImageUploadButton;