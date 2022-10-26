import imgConfirm from "../../assets/verifica.png"

import { Modal, HeaderContent, BoxImgModal, ImgModal, TitleModal } from "./styled"

const ModalConfirm = () => {
    return(
        <Modal>
            <HeaderContent>
                {/* <MdOutlineClose style={CloseCircle}/> */}
            </HeaderContent>
            <BoxImgModal>
                <ImgModal src={imgConfirm} alt="Solicitação enviada!" />
            </BoxImgModal>
            <TitleModal>Solicitação enviada!</TitleModal>
            {/* <a href="https://www.flaticon.com/br/icones-gratis/verificado" title="verificado ícones">Verificado ícones criados por Freepik - Flaticon</a> */}
        </Modal>
    )
}
export default ModalConfirm