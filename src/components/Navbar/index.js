import {Container} from './styles';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return(

        <Container>
            <Link to="/">
            <strong>Inicio</strong>
            </Link>
            <Link to="/cybersecurity"> 
            <strong>Cybersecurity</strong>
            </Link>
            <Link to="/governanca"> 
            <strong>Governança</strong>
            </Link>
            <Link to="/hardware"> 
            <strong>Hardware</strong>
            </Link>
            <Link to="/redes">
            <strong>Redes</strong>
            </Link>
        </Container>
    )
}