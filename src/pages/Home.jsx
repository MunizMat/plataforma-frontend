import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import studiesImg from '../assets/images/estudos2.jpg';
import muniz from '../assets/images/muniz.jpg';

import { Section } from "../components/Home/Section";

export default function Home () {
    return(
        <>
            <Stack className="p-5 ms-5" gap={3} style={{textAlign: "left"}}>
                <h1 className="display-1">StudyFlix</h1>
                <h3 className="display-5">Sua plataforma de estudos para vestibulares</h3>
                <div className="col-md-3">
                    <Button className="me-2" variant="primary" as="a" href="/login">Faça login</Button>
                    <span>ou <a style={{ textDecoration: 'underline'}} href="/register" >crie sua conta</a></span>
                </div>
            </Stack>
            <section className="bg-dark p-5 row">
                <Section image={studiesImg}>
                    <h1 className="mb-5">Sobre</h1>
                    <p className="lead mb-5" >A Studiez é uma plataforma totalmente gratuita eintuitiva de auxílio em estudos para vestibulares no Brasil. Através daplataforma, o aluno consegue realizar simulados e obter informações e dados arespeito do seu desempenho em cada um deles. Os simulados, em sua essência,são provas antigas dos vestibulares mais populares do Brasil, como ovestibular da Unicamp, da Fuvest, e do Enem. Vale ressaltar que a plataforma éapenas um sistemas de apoio para alunos, não um sistema completo. A ideia éque o aluno tenha a prova em mãos, seja de forma impressa ou digital, eutilize a plataforma apenas para preencher suas respostas e obter a correçãodevida.</p>
                </Section>
                <Section image={muniz}>
                    <blockquote class="blockquote">
                        <p className="mb-3">A Studiez começou com um garoto que sonhava estudar numa federal. A plataforma é, antes de tudo, um projeto de uma pessoa apaixonada por estudos e por tecnologia, e a plataforma vai muito além simplesmente daquilo que ela pode oferecer. Ela abrange sonhos, projetos pessoais e paixões</p>
                        <footer class="blockquote-footer">Matheus Muniz - <cite title="Source Title">Criador e desenvolvedor da Studiez</cite></footer>
                    </blockquote>
                </Section>
            </section>
        </>
    )
}