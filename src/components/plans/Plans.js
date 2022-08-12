import Ic from "../iconCheck/Icon.js"
import { 
    ArticTitlePrice, TitlePlans, PgraphPlans, CardPriceSection, FirstCardPrice, SecondCardPrice,
    ThirdCardPrice, FourthCardPrice, TitleCard, SubTitle, PriceCard, PerMonth, ListBenefits,
    BtnPlan, AncorGetPlan
} from "./styled";
import { execFuncQueAlteraBorda } from "../../pages/home/Home.js";

const Plans = () => {
    return(
            <section>
                <ArticTitlePrice>
                    <TitlePlans id="plans">Planos ideais</TitlePlans>
                    <PgraphPlans>Confira alguns dos nossos melhores planos abaixo.</PgraphPlans>
                </ArticTitlePrice>
                <CardPriceSection>
                    <FirstCardPrice>
                        <section>
                            <TitleCard>SulÁmerica</TitleCard>
                            <SubTitle>a partir de</SubTitle>
                        </section>
                        <section>
                            <PriceCard>$ 119,90</PriceCard>
                            <PerMonth>por mês</PerMonth>
                        </section>
                        <section>
                            <ListBenefits>
                                <li><Ic/>Consultas Médicas</li>
                                <li><Ic/>Todos os exames</li>
                                <li><Ic/>Atendimento 24hrs</li>
                                <li><Ic/>Homecare e Parto</li>
                                <li><Ic/>Cirurgias e internações</li>
                            </ListBenefits>
                        </section>
                        <BtnPlan onClick={execFuncQueAlteraBorda}><AncorGetPlan href="#top">Obter Plano</AncorGetPlan></BtnPlan>
                    </FirstCardPrice>
                    <SecondCardPrice>
                        <section>
                            <TitleCard>Amil 400</TitleCard>
                            <SubTitle>a partir de</SubTitle>
                        </section>
                        <section>
                            <PriceCard>$ 240,90</PriceCard>
                            <PerMonth>por mês</PerMonth>
                        </section>
                        <section>
                            <ListBenefits>
                                <li><Ic/>Consultas Médicas</li>
                                <li><Ic/>Todos os exames</li>
                                <li><Ic/>Atendimento 24hrs</li>
                                <li><Ic/>Homecare e Parto</li>
                                <li><Ic/>Cirurgias e internações</li>
                            </ListBenefits>
                        </section>
                        <BtnPlan onClick={execFuncQueAlteraBorda}><AncorGetPlan href="#top">Obter Plano</AncorGetPlan></BtnPlan>
                    </SecondCardPrice>
                    <ThirdCardPrice>
                        <section>
                            <TitleCard>Bradesco Saúde</TitleCard>
                            <SubTitle>a partir de</SubTitle>
                        </section>
                        <section>
                            <PriceCard>$ 339,90</PriceCard>
                            <PerMonth>por mês</PerMonth>
                        </section>
                        <section>
                            <ListBenefits>
                                <li><Ic/>Consultas Médicas</li>
                                <li><Ic/>Todos os exames</li>
                                <li><Ic/>Atendimento 24hrs</li>
                                <li><Ic/>Homecare e Parto</li>
                                <li><Ic/>Cirurgias e internações</li>
                            </ListBenefits>
                        </section>
                        <BtnPlan onClick={execFuncQueAlteraBorda}><AncorGetPlan href="#top">Obter Plano</AncorGetPlan></BtnPlan>
                    </ThirdCardPrice>
                    <FourthCardPrice>
                        <section>
                            <TitleCard>Unimed Rio</TitleCard>
                            <SubTitle>a partir de</SubTitle>
                        </section>
                        <section>
                           <PriceCard>$ 229,90</PriceCard>
                            <PerMonth>por mês</PerMonth>
                        </section>
                        <section>
                            <ListBenefits>
                                <li><Ic/>Consultas Médicas</li>
                                <li><Ic/>Todos os exames</li>
                                <li><Ic/>Atendimento 24hrs</li>
                                <li><Ic/>Homecare e Parto</li>
                                <li><Ic/>Cirurgias e internações</li>
                            </ListBenefits>
                        </section>
                        <BtnPlan onClick={execFuncQueAlteraBorda}><AncorGetPlan href="#top">Obter Plano</AncorGetPlan></BtnPlan>
                    </FourthCardPrice>
                </CardPriceSection>    
            </section>
    )
}
export default Plans