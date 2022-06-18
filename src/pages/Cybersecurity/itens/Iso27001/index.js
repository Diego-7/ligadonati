import {Container} from '../../../GlobalStyles/itensStyles';

export default function Iso27001(){
    return(
        <Container>
            <img src={require("../../../../assets/iso27001.png")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>Iso 27001</strong></p>
            <span>
            texto... 
            </span>
            </h1>
        </Container>
    )
}