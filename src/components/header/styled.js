import styled from "styled-components"

export const ContentHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    border-bottom: 2px solid #066950;
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
export const ListHeader = styled.ul`
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0 auto;
    @media screen and (max-width: 480px) {
        margin: 25px 0;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        margin: 50px 0;
    }
`
export const AncorBenefits = styled.a`
    font-size: 16px;
    color: #066950;
    text-decoration: none;
    border: 2px solid #066950;
    padding: 5px 20px;
    border-radius: 5px;
    background-color: #fff;
    display: inline-block;
    &:hover{
        box-shadow: 0px 0px 5px #066950;
    }
    @media screen and (max-width: 480px) {
        font-size: 10px;
        padding: 3px;
        width: 70px;
        text-align: center;
        border: 1px solid #066950;
        &:hover{
            box-shadow: none;
        }
    }
`
export const AncorPlans = styled.a`
    font-size: 16px;
    color: #066950;
    text-decoration: none;
    transition:0.2s;
    border: 2px solid #066950;
    padding: 3px 20px;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 40px;
    display: inline-block;
    &:hover{
        box-shadow: 0px 0px 5px #066950;
    }
    @media screen and (max-width: 480px) {
        font-size: 10px;
        padding: 3px;
        width: 70px;
        text-align: center;
        border: 1px solid #066950;
        margin: 0 20px;
        &:hover{
            box-shadow: none;
        }
        
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        
    }
`
export const AncorCall = styled.a`
    font-size: 16px;
    text-decoration: none;
    border-radius: 5px;
    padding: 5px 45px;
    color: #fff;
    background-color: #066950;
    display: inline-block;
    &:hover{
        background-color: #044837;
    }
    @media screen and (max-width: 480px) {
        font-size: 10px;
        padding: 3px;
        width: 70px;
        text-align: center;
        border: 1px solid #066950;
    }
`
