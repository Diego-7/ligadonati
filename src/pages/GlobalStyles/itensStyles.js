import styled from 'styled-components';

export const Container = styled.div`

    img{
        width: 100%;
        height: 350px;
    }

    h1 {
        margin-right: 200px;
        margin-left: 200px;
        font-family: 'Roboto', sans-serif;
    }

    h1 p{
        text-align: center;
        margin: 25px 0px 25px 0px;
    }

    @media screen and (max-width: 1200px){

h1{
    margin: 3px;
    padding: 5px;
    text-align: center;

}
    }
`