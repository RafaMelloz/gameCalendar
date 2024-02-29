import { useEffect, useState } from 'react';
import './styles.css'

export const Footer = () => {

    const [load, setLoad] = useState(false);


    const loader = () => {
        setTimeout(() => {
            setLoad(true)
        }, 2000);
    }

    useEffect(() =>{
        loader();
    })

   

    return(
        <>
            {!load ? 
                null
                :
                <footer>
                    <h3> Feito por <a href="https://portifoliorafa.vercel.app">Rafa Melo</a></h3>
                </footer>
            }
        </>
    )
}