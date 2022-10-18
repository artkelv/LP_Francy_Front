import styled from "styled-components";

export const FooterSection = styled.footer`
    height:100px ;
    background-color: #1C5A3D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:80px;
`
export const PgraphFooter = styled.p`
    color: #fff;
    @media screen and (max-width: 480px) {
        font-size: 12px;
        text-align: center;
        margin: 5px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 15px;
        text-align: center;
        margin: 15px;
    }
`
export const AutorLink = styled.a`
    color: #000;
    text-decoration: none;
`