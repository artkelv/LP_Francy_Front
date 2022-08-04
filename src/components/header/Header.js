import logoFrancySeguros from "../../assets/logo_SVG.svg"
import { ListHeader, ContentHeader,AncorBenefits, AncorCall, AncorPlans, NavHeader } from "./styled"

const Header = () => {
    return(
        <ContentHeader>
            <img width="250" src={logoFrancySeguros} alt="Logo_francy_seguros" />
            <nav>
                <ListHeader>
                    <li><AncorBenefits href="#">Beneficios</AncorBenefits></li>
                    <li><AncorPlans href="#">Planos</AncorPlans></li>
                    <li><AncorCall href="">Ligar</AncorCall></li>
                </ListHeader>
            </nav>
        </ContentHeader>
    )
}
export default Header