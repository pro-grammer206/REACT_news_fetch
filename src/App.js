import './App.css';
import News from './News'
import FileNamer from './components/FileNamer/FileNamer'
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
    <FileNamer />
    
      
    <News /> 
    </div>
  );
}

export default App;
