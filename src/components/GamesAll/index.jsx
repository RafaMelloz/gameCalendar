import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { fetchGamesAll } from "../../api/gameReleaseAPI";
import { GameDataContext } from "../../context";
import { Link } from "react-router-dom";

export const GamesAll = ( ) =>{

    const [allGames, setAllGames] = useState([]);

    const gameContext = useContext(GameDataContext);
    const { gameState, setGameState } = gameContext;
    
    const [daysInMonth, setDaysInMonth] = useState([]);

    useEffect(() => {
        const loadAllGame = async () => {
            try {
                const allGamesData = await fetchGamesAll();
                    setAllGames(allGamesData.results);
                    setGameState(allGamesData.results);
            } catch (error) {
                console.error('Ocorreu um erro ao carregar os posts:', error);
            }
        };
        loadAllGame();

        // Determinar os dias no mês atual
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const days = new Date(year, month, 0).getDate();
        const daysArray = Array.from({ length: days }, (_, i) => i + 1);
        setDaysInMonth(daysArray);
    }, [])


    const currentMonth = new Date().getMonth() + 1;
    return(
        <>
            <ul className="months">
               {currentMonth == '01' ? (
                    <li>Janeiro</li>
                ) : currentMonth == '02' ? (
                    <li>Fevereiro</li>
                ) : currentMonth =='03' ? (
                    <li>Março</li>
                ) : currentMonth == '04' ? (
                    <li>Abril</li>
                ) : currentMonth == '05' ? (
                    <li>Maio</li>
                ) : currentMonth == '06' ? (
                    <li>Junho</li>
                ) : currentMonth == '07' ? (
                    <li>Julho</li>
                ) : currentMonth == '08' ? (
                    <li>Agosto</li>
                ) : currentMonth == '09' ? (
                    <li>Setembro</li>
                ) : currentMonth == '10' ? (
                    <li>Outubro</li>
                ) : currentMonth == '11' ? (
                    <li>Novembro</li>
                ) : currentMonth == '12' ? (
                    <li>Dezembro</li>
                ) : null

               }
            </ul>

            <div className="grid__dayCard">
                {daysInMonth.map(day => (
                    <div key={day} className="dayCard">
                        <span className="dayCard__counter">{day < 10 ? '0' + day : day}</span>
                        <div className="dayCard__games">
                            {allGames.map(game => {
                                const releaseDate = new Date(game.released);
                                if (releaseDate.getDate() + 1 === day) {
                                    return (
                                        <Link to={`/game/${game.id}`} key={game.slug} className="dayCard__game" style={{ backgroundImage: `url(${game.background_image})`}}>
                                            <h4>{game.name}</h4>
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}