import operadoras from "../../assets/operadoras_2.0.png"
import { SectionOperators, TitleOperators, ImgOperators } from "./styled"

const Operators = () => {
    return(
        <SectionOperators>
            <TitleOperators>Confira algumas operadoras que nós ofertamos:</TitleOperators>
            <ImgOperators src={operadoras} alt="Operadoras de planos de saúde que trabalhamos" width="550" />
        </SectionOperators>
    )
}
export default Operators