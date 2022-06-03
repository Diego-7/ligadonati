import {Container} from './styles';

export default function Home(){
    return(
        <Container>
            <img src={require("../../assets/logo.jpg")} alt="Imagem de cabeçalho" />
            <h1>
            <p><strong>MPS.BR</strong></p>
            <span>
            Melhoria de Processos do Software Brasileiro, mais conhecido pela sigla MPS.BR é um modelo de qualidade de processo criado em 2003 pela Softex com o intuito de melhorar a capacidade de desenvolvimento de software nas empresas brasileiras. Para o MPS.BR ser definido foi levado em consideração normas e modelos reconhecidos internacionalmente como CMMI (Capability Maturity Model Integration), e nas normas ISSO/IEC 12207 e ISSO/IEC 15504 e também na realidade do mercado brasileiro de software.
Os níveis de maturidade do modelo MPS.BR estabeleceram patamares de evolução dos processos. O nível de maturidade em que uma organização se encontra permite prever o seu desempenho no futuro em executar um ou mais processos. Existem sete níveis de maturidade que vão do A ao G.
O nível G é o parcialmente gerenciado, esse é o primeiro nível a ser implementado, esse modelo é composto por dois processos sendo Gerência de Projetos (GPR) que tem como propósito estabelecer e manter planos que definam as atividades, recursos e responsabilidades do projeto, também busca prover informações sobre o andamento do projeto que permitam a realização de correções quando houver desvios significativos no desempenho.  O outro processo é chamado de Gerência de Requisitos (GRE) seu propósito é gerenciar os requisitos do produto e dos componentes do projeto e também identificar inconsistências entre os requisitos, os planos e os produtos do projeto. Devem ser implementados 5 resultados esperados.

            </span>
            </h1>
        </Container>
    )
}