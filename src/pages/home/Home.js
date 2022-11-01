import Header from '../../components/header/Header';
import logoWhatsapp from "../../assets/logo_whatsapp.png";
import WhyFrancy from '../../components/whyFrancy/WhyFrancy';
import Plans from '../../components/plans/Plans';
import Operators from '../../components/operators/Operators';
import Footer from '../../components/footer/footer';
import ModalConfirm from '../../components/modalConfirm/ModalConfirm';

import useForm from '../../hooks/useForm';
import Swal from 'sweetalert2';
import axios from "axios";
import { 
    MainContent, SectionTitles, Form, Title, SubTitle, SectionBroker, AncorForBroker, 
    TitleForm, PgraphForm, InputForm, SelectForm, BtnSend, PPrivacity 
} from "./styled";
import { useState } from 'react';

export const alterarCorDaBordaDoForm = () => {
    const borderForm = document.querySelector("#form")
    const testcss = {
        boxShadow: "box-shadow: 1px 1px 100px #4BE572"
    }
    borderForm.style.cssText = `${testcss.boxShadow};border-color: #1C5A3D;`
    setTimeout(() => {borderForm.style.cssText = "none"},2000)
}
export const execFuncQueAlteraBorda = () => {
    setTimeout(alterarCorDaBordaDoForm, 1000)
}

const Home = () => {
    
    const [statusModal, setStatusModal] = useState(false);

    const { form, onChangeDataUser, cleanFields } = useForm({
        nome: "",
        email: "",
        telefone: "",
        plano:""
    });

    const sendMessageByBroker = (e) => {
        const BASE_URL = "https://lpfrancyback-production.up.railway.app/form/message";
        const body = {
            nome:form.nome,
            email:form.email,
            telefone:form.telefone,
            plano:form.plano
        };

        axios.post(BASE_URL, body)
        .then((res) => {
            setStatusModal(true)
            
            setTimeout(() => {
                setStatusModal(false)
            }, 2500)
        })
        .catch((err) => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Não foi possível enviar sua solicitação! :(',
                showConfirmButton: false,
                timer: 1500,
            })
        })
        e.preventDefault()
        cleanFields()
    }
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
                        <img src={logoWhatsapp} alt="logo whatsApp" width="50"/>
                        <AncorForBroker href="https://wa.me/5561985273940?text=Olá!%20:)%20Gostaria%20de%20mais%20mais%20informações%20sobre%20os%20planos.%20Poderia%20me%20ajudar?" target="_blank"> falar com corretor</AncorForBroker>
                    </SectionBroker>
                    {/* <a href="https://br.freepik.com/fotos-vetores-gratis/filhos"> Filhos foto criado por rawpixel.com - br.freepik.com</a> */}
                </SectionTitles>
                <Form id="form" onSubmit={sendMessageByBroker}>
                    <TitleForm>Faça uma cotação</TitleForm>
                    <PgraphForm>É gratuito.</PgraphForm>
                    <InputForm type="name" name="nome" value={form.nome} onChange={onChangeDataUser} placeholder='Nome' required/>
                    <InputForm type="email" name="email" value={form.email} onChange={onChangeDataUser} placeholder='E-mail' required/>
                    <InputForm type="tel" name="telefone" value={form.telefone} onChange={onChangeDataUser} placeholder='Telefone' required/>
                    <SelectForm name="plano" onChange={onChangeDataUser} required>
                        <option>Escolha seu plano</option>
                        <option value="Individual" >Individual</option>
                        <option value="Familiar" >Familiar</option>
                        <option value="Empresarial" >Empresarial</option>
                    </SelectForm>
                    <BtnSend type='submit'>Pedir cotação</BtnSend>
                    <PPrivacity>Privacidade 100% garantida.</PPrivacity>   
                </Form>
            </MainContent>
            <WhyFrancy/>
            <Plans/>
            <Operators/>
            {statusModal ? <ModalConfirm /> : null}
            <Footer/>
        </>
    )
}
export default Home