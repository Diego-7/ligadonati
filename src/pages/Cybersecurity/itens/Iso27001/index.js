import {Container} from '../../../GlobalStyles/itensStyles';

export default function Iso27001(){
    return(
        <Container>
            <img src={require("../../../../assets/iso27001.png")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>Iso 27001</strong></p>
            <span>
            ISO 27001 é a norma padrão e referencia para a gestão de segurança da informação, foi originada em um documento publicado em 1992 por um departamento do governo Britânico que estabelecia praticas de segurança da informação.<br />
A adoção da ISSO 27001 serve para que as organizações se adequem ao modelo do Sistema de Gestão de Segurança da Informação (SGSI), podendo a empresa se certificar também para assim poder mostrar que segue e está de acordo com as normas de segurança, algumas organizações inclusive exigem que seus parceiros possuam tal certificação.<br />
Alguns dos benefícios de quem a adota são:
<ol><br />
<li>1. Demonstra que a organização está compromissada com a segurança da informação. </li>
<li>2. Aumenta a segurança dos dados e dos sistemas nos termos de confidencialidade, integridade e disponibilidade. </li>
<li>3. Garante que os investimentos sejam orientados ao risco, assim diminuindo drasticamente a chance de prejuízos.</li>
<li>4. Ensina os colaboradores os melhores métodos de segurança da informação.</li>
<li>5. Aumenta a confiança e satisfação dos parceiros e clientes </li>
</ol> <br />
Existem essas e muitas outras vantagens para a implementação da ISSO 27001.
            </span>
            </h1>
        </Container>
    )
}