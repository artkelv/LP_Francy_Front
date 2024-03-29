import styled from "styled-components";
import family from "../../assets/photo_family_02.jpg"

export const MainContent = styled.main`
    background-image: url(${family});
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    padding: 4% 0;
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
export const SectionTitles = styled.section`
    order: 2;
    @media screen and (max-width: 480px) {
        order:0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        order: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Title = styled.h1`
    color: #fff;
    background-color:rgba(13,35,40,0.6);
    display: inline-block;
    font-weight: 400;
    padding: 5px 10px;
    @media screen and (max-width: 480px) {
        font-size: 12px;
        padding: 5px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 17px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        font-size: 19px;
    }
`
export const SubTitle = styled.h2`
    color: #fff;
    background-color:rgba(13,35,40,0.6);
    display: inline-block;
    font-weight: 400;
    padding: 5px 10px;
    position: relative;
    left: 150px;
    @media screen and (max-width: 480px) {
        position: static;
        font-size: 12px;
        padding: 5px;
        margin: -15px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 17px;
        position: static;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        font-size: 18px;
    }
`
export const SectionBroker = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    top:100px;
    @media screen and (max-width: 480px) {
        display: none;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        display: none;
    }
`
export const AncorForBroker = styled.a`
    margin-left: 10px;
    border: 1px solid #4BE572;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    padding: 10px;
    background-color: rgba(114,229,91, 0.8);
    transition:0.2s;
    &:hover{
        box-shadow: 1px 1px 15px #4BE572;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 250px;
    border: 2px solid #066950;
    background-color: #fff;
    border-radius: 30px;
    margin: 20px 0;
    transition: 1s;
    @media screen and (max-width: 480px) {
        
    }
`
export const TitleForm = styled.h3`
    font-size: 16px ;
    color: #066950;
    text-align: center;
    margin: 0;
    padding: 18px 0 12px;
    @media screen and (max-width: 480px) {
        font-size: 13px;
    }
`
export const PgraphForm = styled.p`
    color: #078C6B;
    text-align: center;
    margin: 0;
    padding-bottom: 10px;
    @media screen and (max-width: 480px) {
        font-size: 11px;
    }
`
export const InputForm = styled.input`
    font-size: 12px;
    padding: 5px;
    margin: 10px;
    border: 2px solid #078C6B;
    border-radius: 10px;
    outline: unset;
    transition: 0.5s;
    &:focus{
        box-shadow: 1px 1px 10px #10CEA0;
    }
`
export const SelectForm = styled.select`
    font-size: 12px;
    padding: 5px;
    margin: 10px;
    border: 2px solid #078C6B;
    border-radius: 10px;
    outline: unset;
    &:focus{
        box-shadow: 1px 1px 10px #10CEA0;
    }
`
export const BtnSend = styled.button`
    width: 90%;
    
    background-color: #044837 ;
    border: none;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 10px 0;
    border-radius: 10px;
    margin: 10px auto;
    &:hover{
        background-color: #066950;
    }
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`
export const PPrivacity = styled.p`
    font-size: 12px;
    text-align: center;
    color: #1C5A3D;
    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`
