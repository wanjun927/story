/*
 * @Author: Mia
 * @Date: 2022-12-19 07:00:44
 * @LastEditors: Mia
 * @LastEditTime: 2022-12-20 06:59:47
 * @Description: 
 */
import { useState } from 'react';
import './App.css';

function App() {
  const [isred, setIsRed] = useState(false)
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: isred ? 'red' : 'black'}}>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={() => setIsRed(!isred)}>change background color</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Happy
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
