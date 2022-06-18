import {Container} from '../../../GlobalStyles/itensStyles';

export default function Ip(){
    return(
        <Container>
            <img src={require("../../../../assets/ip.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>TCP/IP</strong></p>
            <span>
            texto... 
            </span>
            </h1>
        </Container>
    )
}