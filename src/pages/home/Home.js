import React from 'react'
import Header from '../../components/header/Header'
import { MainContent, SectionTitles, Form, Title, SubTitle, SectionBroker, AncorForBroker, TitleForm, PgraphForm, InputForm, SelectForm, BtnSend, PPrivacity } from "./styled"
import logoWhatsapp from "../../assets/logo_whatsapp.png"
import WhyFrancy from '../../components/whyFrancy/WhyFrancy'

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
                        <AncorForBroker href=""> falar com corretor</AncorForBroker>
                    </SectionBroker>
                    {/* <a href="https://br.freepik.com/fotos-vetores-gratis/filhos">Filhos foto criado por rawpixel.com - br.freepik.com</a> */}
                </SectionTitles>
                <Form action="">
                    <TitleForm>Faça uma cotação</TitleForm>
                    <PgraphForm>É gratuito.</PgraphForm>
                    <InputForm type="name" placeholder='Name'/>
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
        </>
    )
}
export default Home