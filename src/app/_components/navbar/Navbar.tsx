"use client"
import Image from "next/image";
import Container from "../container/Container";
import Link from "next/link";
import { useIntl } from "react-intl";
import ServerIntlProvider from "@/components/ServerIntlProvider";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from "primereact/button";
import { Fragment, useRef, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Accordion, AccordionTab } from "primereact/accordion";
import { OverlayPanel } from "primereact/overlaypanel";

export default function Navbar() {
    const [isVisible, setVisible] = useState<boolean>(false)
    const intl = useIntl();

    const op = useRef<any>(null)

    const accordionTabStyles = {
        header: {
            className: "bg-transparent border-none text-xl sm:text-2xl lg:text-3xl"
        },
        headerAction: {
            className: "bg-transparent border-none font-normal px-0 flex-row-reverse m-0"
        },
        headerIcon: {
            className: "w-6 h-6 m-0 transition-all"
        },
        content: {
            className: "bg-transparent border-none text-base px-0"
        },
        root: {
            className: "bg-transparent border-none"
        }
    }
    return (
        <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
            <Fragment>
                <div className="absolute w-full z-[9999] pt-10">
                    <Container>
                        <div className="flex justify-between items-center">
                            <Link href={`${intl.locale}/`}>
                                <Image src={"/logo.png"} alt="logo" width={160} height={100} />
                            </Link>

                            <div className="flex items-center gap-3">
                                <Link href="/">
                                    <Button className="flex gap-2 bg-transparent text-white border border-white py-2 px-3 hover:bg-white hover:text-black hidden sm:flex"><PersonIcon /> {intl.formatMessage({ id: "btn_area_cliente" })}</Button>
                                </Link>
                                <MenuIcon onClick={() => setVisible(true)} className="cursor-pointer" fontSize="large" />
                            </div>
                        </div>
                    </Container>
                </div>
                <Sidebar blockScroll={true} pt={{
                    root: {
                        className: "bg-[#0a1521] border-none w-[15rem] sm:w-[25rem] xl:w-[35rem]"
                    },
                    closeIcon: {
                        className: "sm:w-16 sm:h-16",
                    },
                    mask: {
                        className: "backdrop-blur-sm",
                    },
                }} visible={isVisible} onHide={() => setVisible(false)} position="right" baseZIndex={99999}>
                    <nav className="sm:px-6 lg:px-12 xl:px-24">
                        <ul>
                            <li className="border-b pb-4 text-xl sm:text-2xl lg:text-3xl">
                                <Link href={`${intl.locale}/`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "inicio" })}</Link>
                            </li>
                            <Accordion pt={{
                                root: {
                                    className: "bg-transparent border-b"
                                }
                            }}>
                                <AccordionTab pt={accordionTabStyles} header={intl.formatMessage({ id: "institucional" })}>
                                    <ul className="flex flex-col gap-4">
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/quem-somos`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "quem-somos" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/trajetoria`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "trajetoria" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/conselho-de-administracao`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "conselho-de-administracao" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/responsabilidade-social`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "responsabilidade-social" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/abnt`} onClick={() => setVisible(false)}>ABNT / CB11</Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                            <Accordion pt={{
                                root: {
                                    className: "bg-transparent border-b"
                                }
                            }}>
                                <AccordionTab pt={accordionTabStyles} header={intl.formatMessage({ id: "navegue" })}>
                                    <ul className="flex flex-col gap-4">
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/setores-atendidos`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "setores-atendidos" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/solucoes`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "solucoes" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/consultoria`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "consultoria" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/inovacao`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "inovacao" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/associados`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "associados" })}</Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                            <Accordion pt={{
                                root: {
                                    className: "bg-transparent border-b"
                                }
                            }}>
                                <AccordionTab pt={accordionTabStyles} header={intl.formatMessage({ id: "conteudo" })}>
                                    <ul className="flex flex-col gap-4">
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/noticias`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "noticias" })}</Link>
                                        </li>
                                        <li className="text-sm sm:text-base">
                                            <Link href={`${intl.locale}/eventos`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "eventos" })}</Link>
                                        </li>
                                    </ul>
                                </AccordionTab>
                            </Accordion>
                            <li className="pb-4 text-xl sm:text-2xl lg:text-3xl pt-3">
                                <Link href={`${intl.locale}/contato`} onClick={() => setVisible(false)}>{intl.formatMessage({ id: "contato" })}</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="sm:px-6 lg:px-12 xl:px-24 mt-8 sm:mt-16 flex flex-col gap-5">
                                <Link href="/">
                                    <Button className="flex gap-2 bg-transparent text-white border-white py-2 px-3 hover:bg-white hover:text-black flex sm:hidden"><PersonIcon /> {intl.formatMessage({ id: "btn_area_cliente" })}</Button>
                                </Link>
                        <div className="flex flex-col gap-2 sm:gap-5">
                            <span className="text-lg sm:text-xl text-[#818181]">{intl.formatMessage({ id: "endereco" })}</span>

                            <Button pt={{
                                root: {
                                    className: "bg-transparent border-none text-sm sm:text-base text-white items-start text-start p-0 w-44",
                                },
                            }} type="button" onClick={(e) => op.current.toggle(e)}>
                                Novo Hamburgo - RS
                                Rua Araxá, 750. Ideal,
                                CEP: 93334-000
                            </Button>
                            <OverlayPanel pt={{
                                content: {
                                    className: "p-0"
                                },
                                root: {
                                    className: "rounded",
                                }
                            }} ref={op}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.527984103262!2d-51.1423273!3d-29.7044617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942f97ab28d67%3A0x85b3f6615481a3fc!2sR.%20Arax%C3%A1%2C%20750%20-%20Ideal%2C%20Novo%20Hamburgo%20-%20RS%2C%2093334-000!5e0!3m2!1spt-BR!2sbr!4v1705785869766!5m2!1spt-BR!2sbr" width="400" height="350" loading="lazy" />
                            </OverlayPanel>
                        </div>
                        <div className="flex flex-col gap-2 sm:gap-5">
                            <span className="text-lg sm:text-xl text-[#818181]">E-mail</span>

                            <small className="text-base">ibtec@ibtec.org.br</small>
                        </div>

                        <div className="flex flex-col gap-2 sm:gap-5">
                            <span className="text-lg sm:text-xl text-[#818181]">{intl.formatMessage({ id: "telefone" })}</span>

                            <small className="text-sm sm:text-base">51 3553-1000</small>
                        </div>
                    </div>
                </Sidebar>
            </Fragment>
        </ServerIntlProvider>
    )
}