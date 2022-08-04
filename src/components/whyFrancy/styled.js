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
    font-size: 25px;
`
export const SectionBenefits = styled.section`
    margin: 0 auto;
    width: 80%;
    display: flex;
`
export const DescriptionBenefits = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TitleBenefits = styled.h4`
    color: #10CEA0;
`
export const PgraphBenefits = styled.p`
    color: #7C7878;
`
export const FigureEndSection = styled.figure`
    width: 95vw;
    height: 250px;
    margin:120px auto;
    background-image: url(${HappyWomen});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 10px -40px;
`