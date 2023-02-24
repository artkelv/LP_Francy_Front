import Ic from "../iconCheck/Icon.js"
import { 
    Sectionplans, ArticTitlePrice, TitlePlans, PgraphPlans, CardPriceSection, FirstCardPrice, SecondCardPrice,
    ThirdCardPrice, FourthCardPrice, TitleCard, SubTitle, PriceCard, PerMonth, ListBenefits, ListCard, BenefitsDescription,
    AncorGetPlan
} from "./styled";
import { execFuncQueAlteraBorda } from "../../pages/home/Home.js";

const Plans = () => {
    return(
            <Sectionplans>
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
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Consultas Médicas</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Todos os exames</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Atendimento 24hrs</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Homecare e Parto</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Cirurgias e internações</BenefitsDescription>
                                </ListCard>
                            </ListBenefits>
                        </section>
                        <AncorGetPlan href="#top" onClick={execFuncQueAlteraBorda}>Obter Plano</AncorGetPlan>
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
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Consultas Médicas</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Todos os exames</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Atendimento 24hrs</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Homecare e Parto</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Cirurgias e internações</BenefitsDescription>
                                </ListCard>
                            </ListBenefits>
                        </section>
                        <AncorGetPlan href="#top" onClick={execFuncQueAlteraBorda}>Obter Plano</AncorGetPlan>
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
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Consultas Médicas</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Todos os exames</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Atendimento 24hrs</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Homecare e Parto</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Cirurgias e internações</BenefitsDescription>
                                </ListCard>
                            </ListBenefits>
                        </section>
                        <AncorGetPlan href="#top" onClick={execFuncQueAlteraBorda}>Obter Plano</AncorGetPlan>
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
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Consultas Médicas</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Todos os exames</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Atendimento 24hrs</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Homecare e Parto</BenefitsDescription>
                                </ListCard>
                                <ListCard>
                                    <Ic/>
                                    <BenefitsDescription>Cirurgias e internações</BenefitsDescription>
                                </ListCard>
                            </ListBenefits>
                        </section>
                        <AncorGetPlan href="#top" onClick={execFuncQueAlteraBorda}>Obter Plano</AncorGetPlan>
                    </FourthCardPrice>
                </CardPriceSection>    
            </Sectionplans>
    )
}
export default Plans