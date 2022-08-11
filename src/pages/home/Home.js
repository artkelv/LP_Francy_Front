import Header from '../../components/header/Header'
import { MainContent, SectionTitles, Form, Title, SubTitle, SectionBroker, AncorForBroker, TitleForm, PgraphForm, InputForm, SelectForm, BtnSend, PPrivacity } from "./styled"
import logoWhatsapp from "../../assets/logo_whatsapp.png"
import WhyFrancy from '../../components/whyFrancy/WhyFrancy'
import Plans from '../../components/plans/Plans'
import Operators from '../../components/operators/Operators'
import Footer from '../../components/footer/footer'

export const alterarCorDaBordaDoForm = () => {
    const borderForm = document.querySelector("#form")
    borderForm.style.cssText = "transition:1s; border: 2px solid red; box-shadow: 5px 5px 15px red"
}
export const execFuncQueAlteraBorda = () => {
    setTimeout(alterarCorDaBordaDoForm, 1500)
}
const Home = () => {
    return(
        <>
            <Header/>
            <MainContent>
                <SectionTitles>
                    <Title>Planos de Saúde e Odontológicos</Title>
                    <br/>
                    <SubTitle>pelo menor preço</SubTitle>
                    <br/>
                    <SectionBroker>
                        <img src={logoWhatsapp} width="50"/>
                        <AncorForBroker href="https://wa.me/5561985273940?text=Olá!%20:)%20Gostaria%20de%20mais%20mais%20informações%20sobre%20os%20planos.%20Poderia%20me%20ajudar?" target="_blank"> falar com corretor</AncorForBroker>
                    </SectionBroker>
                    {/* <a href="https://br.freepik.com/fotos-vetores-gratis/filhos">Filhos foto criado por rawpixel.com - br.freepik.com</a> */}
                </SectionTitles>
                <Form id="form" action="">
                    <TitleForm>Faça uma cotação</TitleForm>
                    <PgraphForm>É gratuito.</PgraphForm>
                    <InputForm type="name" placeholder='Nome'/>
                    <InputForm type="email" placeholder='E-mail'/>
                    <InputForm type="tel" placeholder='Telefone'/>
                    <SelectForm>
                        <option value="">Escolha seu plano</option>
                        <option value="">Individual</option>
                        <option value="">Familiar</option>
                        <option value="">Empresarial</option>
                    </SelectForm>
                    <BtnSend>Pedir cotação</BtnSend>
                    <PPrivacity>Privacidade 100% garantida.</PPrivacity>   
                </Form>
            </MainContent>
            <WhyFrancy/>
            <Plans/>
            <Operators/>
            <Footer/>
        </>
    )
}
export default Home