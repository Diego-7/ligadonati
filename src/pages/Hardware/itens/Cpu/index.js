import {Container} from '../../../GlobalStyles/itensStyles';

export default function Cpu(){
    return(
        <Container>
            <img src={require("../../../../assets/cpu.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>CPU</strong></p>
            <span>
            texto... 
            </span>
            </h1>
        </Container>
    )
}