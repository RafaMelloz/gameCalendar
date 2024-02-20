import { Link } from 'react-router-dom'
import './styles.css'

export const Page404 = () =>{
    return(
        <div className='box404'>
            <h1>Pagina não encontrada!</h1>
            <Link className="backErro" to={'/'}>Voltar a tela inicial</Link> 
        </div>
    )
}