import {Container} from '../../../GlobalStyles/itensStyles';

export default function Cpu(){
    return(
        <Container>
            <img src={require("../../../../assets/cpu.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>CPU</strong></p>
            <span>
            Unidade central de processamento é o componente responsável por realizar todos os cálculos e processos de um computador, este hardware é composto pela ULA (unidade central de processamento) e o controlador, os cálculos são realizados na ula, enquanto o controlador faz todo o trabalho de armazenar e transferir as informações através dos barramentos.<br />
Com a evolução da tecnologia foi necessário a introdução de mais de um núcleo nos processadores, cada núcleo possui sua própria ula, controlador e registradores, a memória cache é compartilhada.<br />
A hierarquia das memórias são: registradores, cache, memória ram e memória rom sendo as primeiras mais caras que as últimas, porém a velocidade é muito maior.<br />
Portanto o processador é o responsável por todos os cálculos de um computador, podendo ser considerado como o “cérebro” da máquina, ele recebe as informações faz as conversões e cálculos e as devolve para os respectivos hardwares.
 
            </span>
            </h1>
        </Container>
    )
}