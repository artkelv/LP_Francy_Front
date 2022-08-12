import styled from "styled-components";

export const ArticTitlePrice = styled.article`
    width: 80%;
    margin: 0 auto;
    border-top: 2px solid #1C5A3D;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TitlePlans = styled.h4`
    font-size: 30px;
    color: #1C5A3D;
`
export const PgraphPlans = styled.p`
    color: #595959;
`
export const CardPriceSection = styled.section`
    width: 80%;
    margin: 80px auto;
    display: flex;
    justify-content: space-between;
    color: #fff;
`
export const TitleCard = styled.h4`
    text-align: center;
    font-weight: 300;
    margin: 0;
    padding: 0;
    margin: 30px 20px 5px;
`
export const SubTitle = styled.span`
    color: #668EF5;
    display: block;
    text-align: center;
    font-size: 11px;
    margin-bottom: 20px;
`
export const PriceCard = styled.strong`
    display: block;
    color: #fff;
    text-align: center;
    font-weight: 300;
    font-size: 30px;
`
export const PerMonth = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    display: block;
    color: #668EF5;
    text-align: center;
    font-weight: bold;
`
export const ListBenefits = styled.ul`
    margin: 30px 20px;
    padding: 25px 0;
    list-style: none;
    font-size: 10px;
    border-top: 1px solid #fff;
    letter-spacing: 1px;
    @media screen and (min-width:1400px) and (max-width:1920px){
        font-size: 15px;
    }
`
export const BtnPlan = styled.button`
    height: 25px;
    width: 100px;
    font-size: 10px;
    border: none;
    color: #1C5A3D;
    text-transform: uppercase;
    cursor: pointer;
    transition: 1s;
    &:hover{
        width: 100%;
    }
`
export const AncorGetPlan = styled.a`
    text-decoration: none;
    color: #1C5A3D;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const FirstCardPrice = styled.div`
    background-color: #0D2329;
    width: 21%;
`
export const SecondCardPrice = styled.div`
    background-color: #4169B7;
    width: 21%;
`
export const ThirdCardPrice = styled.div`
    background-color: #50D371;
    width: 21%;
`
export const FourthCardPrice = styled.div`
    background-color: #10CEA0;
    width: 21%;
`