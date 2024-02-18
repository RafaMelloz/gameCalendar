
import { useEffect, useState } from "react";

import { fetchGamesToday } from "../../api/gameReleaseAPI";
import "./styles.css";

//icons
import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

import vegeta from "../../imgs/vegeta.jpeg";

export const GamesToday = () =>{

    const [games,setGames] = useState([]);
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

            <div className="subTitle__content">
                <h3>GAMES LANÇADOS HOJE:</h3>
                <hr />
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
                                    <div className="icons">
                                        {game.platforms.map(platform => {
                                            switch (platform.platform.slug) {
                                                case 'xbox-series-x':
                                                    return <FaXbox key={platform.platform.slug} className="icon xbox" />;
                                                case 'playstation5':
                                                    return <FaPlaystation key={platform.platform.slug} className="icon play" />;
                                                case 'nintendo-switch':
                                                    return <BsNintendoSwitch key={platform.platform.slug} className="icon nint" />;
                                                case 'pc':
                                                    return <FaSteam key={platform.platform.slug} className="icon steam" />;
                                                default:
                                                    return null;
                                            }
                                        })}
                                    </div>
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