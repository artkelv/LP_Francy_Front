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
    @media screen and (max-width: 478px) {
        font-size: 15px;
    }
`
export const ImgOperators = styled.img`
    display: block;
    @media screen and (max-width: 478px) {
        margin-top: 50px;
        width: 300px;
    }
`