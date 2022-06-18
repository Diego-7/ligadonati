import {Container} from '../../../GlobalStyles/itensStyles';

export default function Kubernets(){
    return(
        <Container>
            <img src={require("../../../../assets/kubernets.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>Kubernets</strong></p>
            <span>
            Kubernets é uma plataforma de código aberto que automatiza as operações dos containers, inicialmente foi criado e desenvolvido por engenheiros do Google, empresa que foi uma das pioneiras no desenvolvimento da tecnologia de containers Linux.
Aplicações de produção possuem múltiplos containers que devem ser implantados em vários hosts do servidor. A segurança dos containers possui várias camadas e pode ser complexa. Com isso o Kubernets oferece recursos de orquestração e gerenciamento necessários para implantar containers em larga escala para essas cargas de trabalho.
Entre suas principais vantagens está a facilidade na implantação e atualização de aplicações, para isso utiliza-se a perspectiva dos micros serviços, seu sistema também permite que diversas funções possam ser realizadas de forma automatizada, deixando que o time foque em tarefas que realmente precisam ser realizadas e monitoradas de perto. Outra vantagem está o fato de modernizar o gerenciamento de redes, auxiliando na redução da carga operacional e modernizando o gerenciamento de redes, a modernização também ocorre na orquestração de armazenamento, uma vez que a plataforma possibilita a montagem de um sistema personalizado com nuvens locais, privadas ou públicas. Possui também configuração do sistema facilitada, visto que não exige nenhuma linguagem para fazer sua configuração. 

            </span>
            </h1>
        </Container>
    )
}