import SetaParaDireita from "../../assets/arrow_right.png";
import ApertoDeMaos from "../../assets/aperto_maos.png";
import CoracaoMedicina from "../../assets/coracao_medicina.png";
import IcoDinheiro from "../../assets/ico_dinheiro.png";
import Ico_Relogio from "../../assets/ico_relogio.png";
import logoWhatsapp from "../../assets/logo_whatsapp.png"
import { 
    SectionWhyFrancy, SetaImg, TitleWhyFrancy, SectionBenefits, TesteSec, DescriptionBenefits,
    TitleBenefits, BenefitsImg, ContentBenefits, PgraphBenefits, AncorWpp, ContentWpp, FigureEndSection 
} from "./styled"

const WhyFrancy = () => {
    return(
            <aside>
                <SectionWhyFrancy>
                    <figure>
                        <SetaImg src={SetaParaDireita} alt="Seta a direita" width="250"/>
                    </figure>
                    <TitleWhyFrancy id="whyFrancy">Por que escolher a Francy Seguros?</TitleWhyFrancy>
                </SectionWhyFrancy>
                <SectionBenefits>
                    <TesteSec>
                        <DescriptionBenefits>
                            <BenefitsImg src={ApertoDeMaos} alt="Imagem de aperto de mãos" width="80"/>
                            <ContentBenefits>
                                <TitleBenefits>Compromisso</TitleBenefits>
                                <PgraphBenefits>Aqui a seriedade e o compromisso com o cliente vem em primeiro lugar.</PgraphBenefits>
                            </ContentBenefits>
                        </DescriptionBenefits>
                        <DescriptionBenefits>
                            <BenefitsImg src={CoracaoMedicina} alt="Imagem de coração" width="80"/>
                            <ContentBenefits>
                                <TitleBenefits>Referência na área</TitleBenefits>
                                <PgraphBenefits>Há mais de 25 anos no mercado, fidelizando clientes.</PgraphBenefits>
                            </ContentBenefits>
                        </DescriptionBenefits>
                    </TesteSec>
                    <TesteSec>
                        <DescriptionBenefits>
                            <BenefitsImg src={IcoDinheiro} alt="Imagem dinheiro" width="80"/>
                            <ContentBenefits>
                                <TitleBenefits>Planos perfeitos</TitleBenefits>
                                <PgraphBenefits>O melhor plano é aquele que atende a sua necessidade e que cabe no seu bolso.</PgraphBenefits>
                            </ContentBenefits>
                        </DescriptionBenefits>
                        <DescriptionBenefits>
                            <BenefitsImg src={Ico_Relogio} alt="Imagem relógio" width="80"/>
                            <ContentBenefits>
                                <TitleBenefits>Agilidade e rapidez</TitleBenefits>
                                <PgraphBenefits>As solitações online são respondidas em ate 1 hora.</PgraphBenefits>
                            </ContentBenefits>
                        </DescriptionBenefits>
                    </TesteSec>
                </SectionBenefits>
                    {/* <a href='https://br.freepik.com/fotos-vetores-gratis/mulher-tecnologia'>Mulher tecnologia foto criado por rawpixel.com - br.freepik.com</a> */} 
                <FigureEndSection>
                    <ContentWpp>
                        <AncorWpp href="https://wa.me/5561985273940?text=Olá!%20:)%20Gostaria%20de%20mais%20mais%20informações%20sobre%20os%20planos.%20Poderia%20me%20ajudar?" target="_blank">falar com corretor</AncorWpp>
                        <img src={logoWhatsapp} width="30"/>
                    </ContentWpp>
                </FigureEndSection>
            </aside>
    )
}
export default WhyFrancy