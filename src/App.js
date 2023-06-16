
import { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
import UploadImage from './application/body/UploadImage';

function App() {
  return (
    <UploadImage />
  );
}

export default App;

