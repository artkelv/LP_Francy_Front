import styled from 'styled-components';

export const Modal = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid #10CEA0; */
    box-shadow: 0px 0px 200px #10CEA0;
    background-color: #fff;
    position: fixed;
    top: 25.0%;
    left: 37.0%;
    @media screen and (max-width:480px) {
        width: 200px;
        left: 25.0%;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        width: 250px;
        left: 30.0%;
    }
`
export const HeaderContent = styled.div`
    background-color: #10CEA0;
    height: 40px;
    @media screen and (max-width:480px) {
        height: 20px;
    }
`
export const BoxImgModal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const ImgModal = styled.img`
    width: 50px;
    @media screen and (max-width:480px) {
        width: 28px;
    }
`
export const TitleModal = styled.h4`
    color: #10CEA0;
    text-align: center;
    @media screen and (max-width:480px) {
        font-size: 14px;
    }
`
export const CloseCircle = {
    color: "#fff",
    fontSize: "28px",
    cursor: "pointer"
}