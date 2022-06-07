import styled from 'styled-components';

export const Container = styled.div`

display: flex;
background-color: #0594D6;
justify-content: space-around;

a{
    color: #fff;
    text-decoration: none;
    font-size: 38px;
    
    
}

a:hover{
    color: #F5ED0A;
}

@media screen and (max-width: 1200px){
    
    display: flex;
    flex-direction: column;
    align-items: center;
}

`