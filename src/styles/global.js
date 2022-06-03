import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
html,body,#root{
    min-height: 100%;
}

body{
    background-color: #D4CECB;
    font-size: 14px;
    -webkit-font-smoothing: antialised !important;

}

button{
    background-color: #0594D6;
    border-color: #0594D6;
    border-radius: 7px;
    color: #fff;
    font-size: 18px;
    padding: 5px;
    cursor: pointer;

    button:hover{
        opacity: 0.7;
    }
}
`