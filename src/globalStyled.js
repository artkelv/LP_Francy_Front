import { createGlobalStyle } from "styled-components";
import backgroundMain from "../src/assets/background_main.png"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        background-image: url(${backgroundMain});
        background-size: contain;
    }
`