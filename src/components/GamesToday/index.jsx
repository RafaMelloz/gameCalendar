
import { useEffect, useState } from "react";

import { fetchGamesToday } from "../../api/gameReleaseAPI";
import "./styles.css";

//icons


import vegeta from "../../imgs/vegeta.jpeg";
import { ShowPlatforms } from "../ShowPlatforms";

export const GamesToday = () =>{

    const [games,setGames] = useState([]);

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const diaAtual = `${dia}/${mes}/${ano}`;

    useEffect(() => {
        const loadGame = async () => {
            try {
                const gamesData = await fetchGamesToday();
                setGames(gamesData);
            } catch (error) {
                console.error('Ocorreu um erro ao carregar os posts:', error);
            }
            
        };
        loadGame();
    }, [])

    return(
        <div className="gameToday">

            <div className="flexHeader">
                <div className="subTitle__content">
                    <h3>GAMES LANÇADOS HOJE:</h3>
                    <hr />
                </div>
                <h3>{diaAtual}</h3>
            </div>

            
            

            <div className="gamesToday__grid">
                {games.results && games.results.length > 0 ? (
                    games.results.map(game => (
                        <div
                            className="gameToday__card"
                            key={game.slug}
                            style={{ backgroundImage: `url(${game.background_image})` }}>
                            <div className="gameToday__card__bgOverlay">
                                <div className="gameToday__card__content">
                                    <h4>{game.name}</h4>
                                    <ShowPlatforms game={game}/>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                        <div className="notGame">
                            <img className="sadVegeta" src={vegeta} alt="tristeza"></img>

                        <h1  >Nenhum lançamento :C</h1>
                    </div>
                )}



            </div>
        </div>
    )
}