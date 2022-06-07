import styled from 'styled-components';

export const Container = styled.div`



img{
    width: 100%;
    height: 320px;
}

h1{
    margin-right: 250px;
    margin-left: 250px;
}

p{
    margin-top: 14px;
    text-align: center;
    margin-bottom: 7px;
}

@media screen and (max-width: 1200px){

    height: 100%;

    h1{
        margin: 5px 5px 5px 5px;
        text-align: left;

    }

}
`