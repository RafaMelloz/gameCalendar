import './styles.css'

import { FaXbox, FaPlaystation, FaSteam } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";

export const ShowPlatforms = ({game}) =>{
    return(
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
    )
}