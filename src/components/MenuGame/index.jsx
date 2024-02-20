import { useContext, useEffect } from "react";
import { GameDataContext } from "../../context";
import { Link, useParams } from "react-router-dom";
import { ShowPlatforms } from "../ShowPlatforms";
import './styles.css'
import { BackButton } from "../BackButton";

export const MenuGame = () =>{

    const gameContext = useContext(GameDataContext);
    const { gameState, setGameState } = gameContext;

    const params = useParams();
    const { id } = params;

    useEffect(()=>{
        console.log(typeof id)
    },[]) 



    return(
        <>
            <div className="game">
                <BackButton />

                {gameState == '' ? (
                    <>
                        <h2 className="msgErro">Algo parece ter dado errado, por favor volte a pagina inicial</h2>
                        <Link className="backErro" to={'/'}>Voltar</Link>  
                    </>
                     
                ) : (
                    gameState.map(game => {
                        if (game.id == id) {
                            return (
                                <div className="game__Describe">
                                    <h2 key={game.id}>{game.name}</h2>

                                    <img src={game.background_image} alt={game.name} />

                                    <div className="game__Describe__overview">
                                        <span>Avaliação: <b>{game.rating}</b></span>

                                        <ShowPlatforms game={game} />
                                    </div>
                                    <ul>
                                        Gêneros:
                                        {game.genres.map(genres => (
                                            <li>{genres.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }
                        return null;
                    })
                )
            };

                
            </div>
        </>
    )
}