import styled from "styled-components";
import backAllBody from "../../assets/back_all_body.png" 

export const Sectionplans = styled.section`
    background-image: url(${backAllBody});
    background-size: contain;
    padding-bottom: 50px;
`
export const ArticTitlePrice = styled.article`
    width: 80%;
    margin: 0 auto;
    border-top: 2px solid #1C5A3D;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TitlePlans = styled.h4`
    font-size: 40px;
    color: #1C5A3D;
    padding: 15px;
    background-color: #fff;
    @media screen and (max-width: 480px){
        font-size: 20px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 25px;
    }
`
export const PgraphPlans = styled.p`
    color: #595959;
    padding: 10px;
    background-color: #fff;
    @media screen and (max-width: 480px){
        font-size: 13px;
        text-align: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 15px;
        text-align: center;
    }
`
export const CardPriceSection = styled.section`
    width: 80%;
    margin: 80px auto;
    display: flex;
    justify-content: space-between;
    color: #fff;

    @media screen and (max-width:480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 50px 0;
        margin: 30px 0;
        background-image: url(${backAllBody});
        background-size: contain;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        display: flex;
        margin: 80px auto 0;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        background-image: url(${backAllBody});
        background-size: contain;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
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
export const AncorGetPlan = styled.a`
    display: block;
    padding: 5px 0;
    width: 100px;
    text-decoration: none;
    background-color: #D3D3D3;
    font-size: 10px;
    border: none;
    color: #1C5A3D;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    transition: 1s;
    &:hover{
        width: 100%;
    }
    @media screen and (max-width:480px) {
        width: 100%;
    } 
`
export const ListCard = styled.li`
    display: flex;
    align-items: center;
    margin-top: 5px;
`
export const BenefitsDescription = styled.span`
    margin-left:8px;
`


export const FirstCardPrice = styled.div`
    background-color: #0D2329;
    width: 21%;
    @media screen and (max-width:480px) {
        width: 250px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 180px;
        margin-bottom: 50px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 200px;
        margin-bottom: 50px;
    }
`
export const SecondCardPrice = styled.div`
    background-color: #4169B7;
    width: 21%;
    @media screen and (max-width:480px) {
        width: 250px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 180px;
        margin-bottom: 50px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 200px;
        margin-bottom: 50px;
    }
`
export const ThirdCardPrice = styled.div`
    background-color: #50D371;
    width: 21%;
    @media screen and (max-width:480px) {
        width: 250px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 180px;
        margin-bottom: 50px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 200px;
        margin-bottom: 50px;
    }
`
export const FourthCardPrice = styled.div`
    background-color: #10CEA0;
    width: 21%;
    @media screen and (max-width:480px) {
        width: 250px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 180px;
        margin-bottom: 50px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 200px;
    }
`