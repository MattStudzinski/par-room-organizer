import { createGlobalStyle } from 'styled-components';
import './App.css';
import UploadImage from './application/body/UploadImage';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Inter', sans-serif;
  
}`


function App() {
  return (
    <>
    <GlobalStyle />
    <UploadImage />
    </>
  );
}

export default App;

