import {Container} from './styles';
import {Link} from 'react-router-dom';

export default function Redes(){
    return(
        <Container>
            <Link to='/kubernets'>
            <img src={require("../../assets/kubernets.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            Kubernets é uma plataforma de código aberto que automatiza as operações dos containers, inicialmente foi criado...
            </span>
            </h1>
            </Link>
            
        </Container>
    )
}