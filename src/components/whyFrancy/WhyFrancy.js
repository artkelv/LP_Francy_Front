import SetaParaDireita from "../../assets/arrow_right.png";
import ApertoDeMaos from "../../assets/aperto_maos.png";
import CoracaoMedicina from "../../assets/coracao_medicina.png";
import IcoDinheiro from "../../assets/ico_dinheiro.png";
import Ico_Relogio from "../../assets/ico_relogio.png";
import logoWhatsapp from "../../assets/logo_whatsapp.png"
import { 
    SectionWhyFrancy, TitleWhyFrancy, SectionBenefits, TesteSec, DescriptionBenefits, TitleBenefits,
    PgraphBenefits, AncorWpp, ContentWpp, FigureEndSection 
} from "./styled"

const WhyFrancy = () => {
    return(
            <aside>
                <SectionWhyFrancy>
                    <figure>
                        <img src={SetaParaDireita} alt="Seta a direita" width="250"/>
                    </figure>
                    <TitleWhyFrancy id="whyFrancy">Por que escolher a Francy Seguros?</TitleWhyFrancy>
                </SectionWhyFrancy>
                <SectionBenefits>
                    <TesteSec>
                        <DescriptionBenefits>
                            <img src={ApertoDeMaos} alt="Imagem de aperto de mãos" width="80"/>
                            <TitleBenefits>Compromisso</TitleBenefits>
                            <PgraphBenefits>Aqui a seriedade e o compromisso com o cliente vem em primeiro lugar.</PgraphBenefits>
                        </DescriptionBenefits>
                        <DescriptionBenefits>
                            <img src={CoracaoMedicina} alt="Imagem de coração" width="80"/>
                            <TitleBenefits>Referência na área</TitleBenefits>
                            <PgraphBenefits>Há mais de 25 anos no mercado, fidelizando clientes.</PgraphBenefits>
                        </DescriptionBenefits>
                    </TesteSec>
                    <TesteSec>
                        <DescriptionBenefits>
                            <img src={IcoDinheiro} alt="Imagem dinheiro" width="80"/>
                            <TitleBenefits>Planos perfeitos</TitleBenefits>
                            <PgraphBenefits>O melhor plano é aquele que atende a sua necessidade e que cabe no seu bolso.</PgraphBenefits>
                        </DescriptionBenefits>
                        <DescriptionBenefits>
                            <img src={Ico_Relogio} alt="Imagem relógio" width="80"/>
                            <TitleBenefits>Agilidade e rapidez</TitleBenefits>
                            <PgraphBenefits>As solitações online são respondidas em ate 1 hora.</PgraphBenefits>
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