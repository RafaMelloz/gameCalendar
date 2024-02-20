import { useEffect, useState } from "react";
import { createContext } from "react";
import { gameArrayState } from "./data";

export const GameDataContext = createContext();

export const GameContext = ({children}) =>{
    const [gameState, setGameState] = useState(gameArrayState);

    useEffect(() => {
        console.log(gameState)
    }, [gameState])

    return (
        <GameDataContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameDataContext.Provider>
    )
}