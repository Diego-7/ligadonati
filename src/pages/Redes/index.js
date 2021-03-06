import {Container} from '../GlobalStyles/styles';
import {Box1} from '../GlobalStyles/styles';
import {Box2} from '../GlobalStyles/styles';
import {Box3} from '../GlobalStyles/styles';
import {Link} from 'react-router-dom';

export default function Redes(){
    return(
        <Container>
            <Box1>
            <Link to='/kubernets'>
            <img src={require("../../assets/kubernets.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            Kubernets é uma plataforma de código aberto que automatiza as operações dos containers, inicialmente foi criado...
            </span>
            </h1>
            </Link>
            </Box1>
            
            <Box2>
            <Link to='/vpn'>
            <img src={require("../../assets/vpn.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
           texto...
            </span>
            </h1>
            </Link>
            </Box2>
            
            <Box3>
            <Link to='/ip'>
            <img src={require("../../assets/ip.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
           texto...
            </span>
            </h1>
            </Link>
            </Box3>
            
        </Container>
    )
}