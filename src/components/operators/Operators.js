import operadoras from "../../assets/operadoras_2.0.png"
import { SectionOperators, TitleOperators, ImgOperators } from "./styled"

const Operators = () => {
    return(
        <SectionOperators>
            <TitleOperators>Confira algumas operadoras que nós trabalhamos:</TitleOperators>
            <ImgOperators src={operadoras} alt="Operadoras de planos de saúde" width="550" />
        </SectionOperators>
    )
}
export default Operators