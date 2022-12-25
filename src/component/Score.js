import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
    const { score, setAppState, setScore } = useContext(DataContext);

    const restartApp = () => {
        setScore(0)
        setAppState("menu")
    }

    return (
        <div className="score">
            <h1>Score Summary</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Re-take the quiz</button>
        </div>
    )
}

export default Score;