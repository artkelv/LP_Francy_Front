import styled from "styled-components"

export const ContentHeader = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
`
export const ListHeader = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
`
export const AncorBenefits = styled.a`
    color: #0C9271; //#10CEA0
    text-decoration: none;
    transition:0.2s;
    &:hover{
        opacity: 50%;
    }
`
export const AncorPlans = styled.a`
    color: #0C9271;
    text-decoration: none;
    padding: 0 40px;
    transition:0.5s;
    &:hover{
        opacity: 50%;
    }
`
export const AncorCall = styled.a`
    text-decoration: none;
    border: 1px solid #10CEA0;
    padding: 0 30px;
    text-transform: uppercase;
    color: #fff;
    background-color: #10CEA0;
    transition:0.5s;
    &:hover{
        background-color: #fff;
        color: #10CEA0;
    }
`