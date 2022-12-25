import { createContext, useState } from 'react';
import Menu from './component/Menu';
import Quiz from './component/Quiz';
import Score from './component/Score';

import './App.css';

export const DataContext = createContext() /* ใช้กับ useContext() */

function App() {
  const [appState, setAppState] = useState('menu')  /* useState() ใช้ร่วมกับ event */
  const [score, setScore] = useState(0)

  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore}}>
      <div className="app">
        <h1>Web Development Quiz</h1>
        {appState === 'menu' && <Menu />} {/* วิธีการแสดงผลผ่าน appState */}
        {appState === 'quiz' && <Quiz />}
        {appState === 'score' && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
