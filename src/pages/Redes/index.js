import {Container} from './styles';
import {Link} from 'react-router-dom';

export default function Redes(){
    return(
        <Container>
            <Link to='/'>
            <img src={require("../../assets/logo.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <span>
            Kubernets é uma plataforma de código aberto que automatiza as operações dos containers, inicialmente foi criado e desenvolvido por engenheiros do Google, empresa que foi uma das pioneiras no desenvolvimento da tecnologia de containers Linux.
Aplicações de produção possuem múltiplos containers que devem ser implantados em vários hosts do servidor. A segurança dos containers possui várias camadas e pode ser complexa. Com isso o Kubernets oferece recursos de orquestração e gerenciamento necessários para implantar containers em larga escala para essas cargas de trabalho...
            </span>
            </h1>
            </Link>
            
        </Container>
    )
}