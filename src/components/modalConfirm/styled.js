import styled from 'styled-components';

export const Modal = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid #10CEA0; */
    box-shadow: 0px 0px 200px #10CEA0;
    background-color: #fff;
    position: fixed;
    top: 33.0%;
    left: 37.0%;
`
export const HeaderContent = styled.div`
    background-color: #10CEA0;
    text-align: right;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const BoxImgModal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
export const ImgModal = styled.img`
    width: 50px;
`
export const TitleModal = styled.h4`
    color: #10CEA0;
    text-align: center;
`
export const CloseCircle = {
    color: "#fff",
    fontSize: "28px"
}
