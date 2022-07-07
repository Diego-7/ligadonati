import {Container} from '../GlobalStyles/styles';
import {Box1} from '../GlobalStyles/styles';
import {Box2} from '../GlobalStyles/styles';
import {Box3} from '../GlobalStyles/styles';
import {Link} from 'react-router-dom';

export default function Cybersecurity(){
    return(
        <Container>
            <Box1>
            <Link to='/cobit'>
            <img src={require("../../assets/cobit.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            texto...
            </span>
            </h1>
            </Link>
            </Box1>
            
            <Box2>
            <Link to='/iso27001'>
            <img src={require("../../assets/iso27001.png")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            ISO 27001 é a norma padrão e referencia para a gestão de segurança da informação, foi originada em um documento publicado em 1992...
            </span>
            </h1>
            </Link>
            </Box2>
            
            <Box3>
            <Link to='/lgpb'>
            <img src={require("../../assets/lgpd.jpg")} alt="Imagem de cabeçalho" />
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