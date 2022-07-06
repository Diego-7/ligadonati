import {Container} from '../GlobalStyles/styles';
import {Box1} from '../GlobalStyles/styles';
import {Box2} from '../GlobalStyles/styles';
import {Box3} from '../GlobalStyles/styles';
import {Link} from 'react-router-dom';

export default function Hardware(){
    return(
        <Container>
            <Box1>
            <Link to='/cpu'>
            <img src={require("../../assets/cpu.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            Unidade central de processamento é o componente responsável por realizar todos os cálculos e processos de um computador...
            </span>
            </h1>
            </Link>
            </Box1>
            
            <Box2>
            <Link to='/ram'>
            <img src={require("../../assets/ram.png")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
           texto...
            </span>
            </h1>
            </Link>
            </Box2>
            
            <Box3>
            <Link to='/storage'>
            <img src={require("../../assets/storage.png")} alt="Imagem de cabeçalho" />
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