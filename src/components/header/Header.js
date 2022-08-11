import logoFrancySeguros from "../../assets/logo_SVG.svg"
import { ListHeader, ContentHeader,AncorBenefits, AncorCall, AncorPlans} from "./styled"

const Header = () => {
    return(
        <ContentHeader>
            <img width="250" src={logoFrancySeguros} alt="Logo Francy Seguros"/>
            <nav>
                <ListHeader>
                    <li><AncorBenefits href="#whyFrancy">Beneficios</AncorBenefits></li>
                    <li><AncorPlans href="#plans">Planos</AncorPlans></li>
                    <li><AncorCall href="tel:+5561985273940">Ligar</AncorCall></li>
                </ListHeader>
            </nav>
        </ContentHeader>
    )
}
export default Header