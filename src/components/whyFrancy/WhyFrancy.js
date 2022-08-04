import SetaParaDireita from "../../assets/arrow_right.png";
import ApertoDeMaos from "../../assets/aperto_maos.png";
import CoracaoMedicina from "../../assets/coracao_medicina.png";
import IcoDinheiro from "../../assets/ico_dinheiro.png";
import Ico_Relogio from "../../assets/ico_relogio.png";
import { 
    SectionWhyFrancy, TitleWhyFrancy, SectionBenefits, DescriptionBenefits, TitleBenefits, PgraphBenefits,
    FigureEndSection 
} from "./styled"

const WhyFrancy = () => {
    return(
            <aside>
                <SectionWhyFrancy>
                    <figure>
                        <img src={SetaParaDireita} alt="Seta a direita" width="250"/>
                    </figure>
                    <TitleWhyFrancy>Por que escolher a Francy Seguros?</TitleWhyFrancy>
                </SectionWhyFrancy>
                <SectionBenefits>
                    <section>
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
                    </section>
                    <section>
                        <DescriptionBenefits>
                            <img src={IcoDinheiro} alt="Imagem dinheiro" width="80"/>
                            <TitleBenefits>Planos perfeitos</TitleBenefits>
                            <PgraphBenefits>O melhor plano é aquele que atende a sua necessidade e que cabe no seu bolso.</PgraphBenefits>
                        </DescriptionBenefits>
                        <DescriptionBenefits>
                            <img src={Ico_Relogio} alt="Imagem relógio" width="80"/>
                            <TitleBenefits>Agelidade e rapidez</TitleBenefits>
                            <PgraphBenefits>As solitações online são respondidas em ate 1 hora.</PgraphBenefits>
                        </DescriptionBenefits>
                    </section>
                </SectionBenefits>
                    {/* <a href='https://br.freepik.com/fotos-vetores-gratis/mulher-tecnologia'>Mulher tecnologia foto criado por rawpixel.com - br.freepik.com</a> */} 
                <FigureEndSection/>
            </aside>
    )
}
export default WhyFrancy