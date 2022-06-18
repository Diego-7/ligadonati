import {Container} from '../../../GlobalStyles/itensStyles';

export default function Storage(){
    return(
        <Container>
            <img src={require("../../../../assets/storage.png")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>Armazenamento</strong></p>
            <span>
            texto... 
            </span>
            </h1>
        </Container>
    )
}