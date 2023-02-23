import styled from "styled-components"

export const ContentHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    border-bottom: 2px solid #10CEA0;
    background-color: #fff;
    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
       display: flex;
       flex-direction: column;
       align-items: center;
    }
`
export const ListHeader = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    @media screen and (max-width: 480px) {
        margin: 25px 0;
        font-size: 13px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        margin: 50px 0;
    }
`
export const AncorBenefits = styled.a`
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    transition:0.2s;
    border: 1px solid #0C9271;
    padding: 0 5px;
    border-radius: 5px;
    background-color: #0C9271;
    &:hover{
        box-shadow: 0px 6px 10px #0C9271;
    }
`
export const AncorPlans = styled.a`
    border: 1px solid #0C9271;
    padding: 0 5px;
    background-color: #0C9271;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    margin: 0 40px;
    transition:0.5s;
    @media screen and (max-width: 480px) {
        padding: 0 20px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        
    }
`
export const AncorCall = styled.a`
    font-size: 20px;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #0A180A;
    padding: 0 30px;
    text-transform: uppercase;
    color: #0A180A;
    background-color: #fff;
    transition:0.5s;
    &:hover{
        background-color: #fff;
    }
`