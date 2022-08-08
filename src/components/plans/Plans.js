import Ic from "../iconCheck/Icon.js"
import { 
    ArticTitlePrice, TitlePlans, PgraphPlans, CardPriceSection, FirstCardPrice, SecondCardPrice,
    ThirdCardPrice, FourthCardPrice, TitleCard, SubTitle, PriceCard, PerMonth, ListBenefits,
    BtnPlan
} from "./styled"

const Plans = () => {
    return(
            <section>
                <ArticTitlePrice>
                    <TitlePlans>Planos ideais</TitlePlans>
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
                        <BtnPlan>Obter Plano</BtnPlan>
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
                        <BtnPlan>Obter Plano</BtnPlan>
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
                        <BtnPlan>Obter Plano</BtnPlan>
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
                        <BtnPlan>Obter Plano</BtnPlan>
                    </FourthCardPrice>
                </CardPriceSection>    
            </section>
    )
}
export default Plans