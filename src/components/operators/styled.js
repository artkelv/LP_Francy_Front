import styled from "styled-components";

export const SectionOperators = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const TitleOperators = styled.h4`
    width: 80%;
    border-top: 2px solid #1C5A3D;
    padding-top: 100px;
    text-align: center;
    font-size: 25px;
    color: #1C5A3D;
    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 19px;
    }
`
export const ImgOperators = styled.img`
    display: block;
    @media screen and (max-width: 480px) {
        margin-top: 50px;
        width: 300px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        margin-top: 50px;
        width: 350px;
    }
`