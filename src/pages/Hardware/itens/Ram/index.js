import {Container} from '../../../GlobalStyles/itensStyles';

export default function Ram(){
    return(
        <Container>
            <img src={require("../../../../assets/ram.png")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>Memória Ram</strong></p>
            <span>
            texto... 
            </span>
            </h1>
        </Container>
    )
}