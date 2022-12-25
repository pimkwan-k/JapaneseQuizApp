import { useContext } from "react";
import { DataContext } from "../App";

import './Menu.css'

const Menu = () => {
    const { setAppState } = useContext(DataContext)
    return (
        <div className="menu">
            <h1>📖QUIZ📚</h1>
            <button onClick={() => setAppState('quiz')}>Start the quiz!</button>
        </div>
    )
}

export default Menu;