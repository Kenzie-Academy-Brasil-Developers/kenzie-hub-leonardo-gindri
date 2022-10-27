import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    .App{
        width: 100vw;
        height: 100vh;
    }

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
    }
 
    html, body{
    background: var(--grey-4);
    max-width: 100vw;
    max-height: 100vh;
    }

    button, .link{
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    border-radius: 4px;
    }

    button:hover{
    filter: brightness(1.2);
    }
    
    .btnVoltar{
        color: var(--grey-0);
        cursor: pointer;
        border: none;
        background-color: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: .4s;
        border-radius: 4px;
    }
    .btnVoltar:hover{
        filter: brightness(1.2);
    }
    
    .btnLogout{
        color: var(--grey-0);
        cursor: pointer;
        border: none;
        background-color: transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: .4s;
        border-radius: 4px;
    }
    .btnLogout:hover{
        filter: brightness(1.2);
    }


    ul, ol, li{
    list-style: none;
    }

    img{
    max-width: 100%;
    }

    :root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;

    --sucess: #3FE864;
    --negative: #E83F5B;
    }

    .title{
    font-size: 16px;
    font-weight: 700;
    }

    .headline{
    font-size: 12px;
    font-weight: 400;
    }

    .headlineBold{
    font-size: 12px;
    font-weight: 700;
    }

    .headlineItalic{
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    }

    .large{
    height: 48px;
    padding: 0px 22px;
    }

    .normal{
    height: 32px;
    padding: 0px 16px;
    }

    .small{
    width: 32.49px;
    height: 32px;
    }


`;
