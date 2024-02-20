import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./styles.css"

export const BackButton = () =>{
    return(
        <Link className="BackButton" to={'/'}><IoArrowBack /></Link>
    )
}