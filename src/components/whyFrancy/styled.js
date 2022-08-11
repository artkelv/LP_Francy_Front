import styled from "styled-components";
import HappyWomen from "../../assets/happy_women.jpg"

export const SectionWhyFrancy = styled.section`
    width:80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const TitleWhyFrancy = styled.h3`
    color: #1C5A3D;
    font-size: 180%;
    padding-top: 50px;
`
export const SectionBenefits = styled.section`
    margin: 0 auto;
    width: 80%;
    display: flex;
`
export const TesteSec = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`
export const DescriptionBenefits = styled.article`
    display: flex;
    margin: 5px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
`
export const TitleBenefits = styled.h4`
    color: #10CEA0;
`
export const PgraphBenefits = styled.p`
    color: #7C7878;
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
`
export const ContentWpp = styled.div`
    margin-right: 1%;
    display: flex;
    align-items: center;
    padding-right: 5px;
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
`