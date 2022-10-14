import styled from "styled-components";
import HappyWomen from "../../assets/happy_women.jpg"

export const SectionWhyFrancy = styled.section`
    width:80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media screen and (max-width: 478px){
        display: block;
    }
`
export const SetaImg = styled.img`
    @media screen and (max-width: 478px){
        display: none;
    }
`
export const TitleWhyFrancy = styled.h3`
    color: #1C5A3D;
    font-size: 180%;
    padding-top: 50px;
    @media screen and (max-width: 478px){
        font-size: 16px;
        text-align: center;
        padding-top: 20px;
    }
`
export const SectionBenefits = styled.section`
    margin: 0 auto;
    width: 80%;
    display: flex;
    @media screen and (max-width: 478px){
        display: flex;
        flex-direction: column;
    }
`
export const TesteSec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 478px){
        width: 100%;
    }
`
export const DescriptionBenefits = styled.article`
    display: flex;
    margin: 5px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    @media screen and (max-width: 478px){
        display: flex;
        flex-direction: row;
        border-top: 1px solid #10CEA0;
        width: 90%;
    }
`
export const BenefitsImg = styled.img`
    @media screen and (max-width: 478px){
        width: 50px;
    }
`
export const ContentBenefits = styled.div`
    @media screen and (max-width: 478px){
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`
export const TitleBenefits = styled.h4`
    color: #10CEA0;
    @media screen and (max-width: 478px){
        font-size: 13px;
    }
`
export const PgraphBenefits = styled.p`
    color: #7C7878;
    @media screen and (max-width: 478px){
        font-size: 11px;
        text-align: right;
    }
`
export const FigureEndSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 95vw;
    height: 250px;
    margin:120px auto;
    background-image: url(${HappyWomen});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 10px -40px;
    @media screen and (max-width: 478px){
        background-size: contain;
        background-position: 10px -15px;
        margin: 70px 0 30px;
        display: flex;
        justify-content: center;
    }
`
export const ContentWpp = styled.div`
    margin-right: 1%;
    display: flex;
    align-items: center;
    padding-right: 5px;
    @media screen and (max-width: 478px){
        margin-top: 90px;
        margin-right: 0;
    }
`
export const AncorWpp = styled.a`
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    padding: 10px;
    margin: 5px;
    border: 4px solid #4BE572;
    background-color: rgba(114,229,91, 0.3);
    transition: 0.2s;
    &:hover{
        box-shadow: 1px 1px 15px #4BE572;
        background-color: #fff;
        color: #1C5A3D;
    }
    cursor: pointer;
    @media screen and (max-width: 478px){
        border: 2px solid #4BE572;
        color: #1C5A3D;
        font-size: 13px;
    }
`