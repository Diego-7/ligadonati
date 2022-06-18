import {Container} from '../GlobalStyles/styles';
import {Box1} from '../GlobalStyles/styles';
import {Box2} from '../GlobalStyles/styles';
import {Box3} from '../GlobalStyles/styles';
import {Link} from 'react-router-dom';

export default function Governanca(){
    return(
        <Container>
            <Box1>
            <Link to='/mpsbr'>
            <img src={require("../../assets/mpsbr.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            Melhoria de Processos do Software Brasileiro, mais conhecido pela sigla MPS.BR é um modelo de qualidade de processo criado em 2003 pela Softex com o intuito...
            </span>
            </h1>
            </Link>
            </Box1>
            
            <Box2>
            <Link to='/xp'>
            <img src={require("../../assets/xp.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
           texto...
            </span>
            </h1>
            </Link>
            </Box2>
            
            <Box3>
            <Link to='/scrum'>
            <img src={require("../../assets/scrum.jpg")} alt="Imagem de cabeçalho" />
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