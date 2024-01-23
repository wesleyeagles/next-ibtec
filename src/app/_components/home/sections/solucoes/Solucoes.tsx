"use client"
import Container from '@/app/_components/container/Container';
import { TabView, TabPanel } from 'primereact/tabview';
import { BiomecanicaIcon, FisicoMecanicoIcon, MicrobiologiaIcon, SubstanciasIcon } from '../../icons';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { useIntl } from 'react-intl';

export default function Solucoes() {
    const intl = useIntl();
    return (
        <div className="mt-16 sm:mt-32">
            <Container>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-20 text-center">{intl.formatMessage({ id: "home_section_solucoes_title" })}</h2>

                <div>
                    <TabView pt={{
                        navContainer: {
                            className: "border-b"
                        },
                        inkbar: {
                            className: "h-[5px]",
                        },
                        panelContainer: {
                            className: "bg-transparent p-0"
                        }
                    }}>
                        <TabPanel pt={{
                            header: {
                                className: "w-[85%] xl:w-[25%] text-sm sm:text-base",
                            },
                            headerAction: {
                                className: "flex gap-5 justify-center bg-transparent",
                            },
                            content: {
                                className: "mt-10 sm:mt-20",
                            }
                        }} header={intl.formatMessage({ id: "home_section_solucoes_fisico-mecanico_title" })} leftIcon={<FisicoMecanicoIcon size={"1.5rem"} />}>
                            <div className='flex flex-col-reverse gap-12 sm:gap-0 sm:flex-row justify-between'>
                                <div className='md:w-[380px] lg:w-[420px] xl:w-[520px]'>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-12'>{intl.formatMessage({ id: "home_section_solucoes_fisico-mecanico_title" })}</h3>
                                    <p className='text-[#bbb] mb-8'>{intl.formatMessage({ id: "home_section_solucoes_fisico-mecanico_description1" })}</p>
                                    <p className='text-[#bbb]'>{intl.formatMessage({ id: "home_section_solucoes_fisico-mecanico_description2" })}</p>

                                    <Link href={`${intl.locale}/solucoes/fisico-mecanico`}>
                                        <Button className='mt-12 sm:mt-32 bg-transparent text-white border border-white px-6 py-4 hover:bg-[#00d6b6] hover:border-[#00d6b6] font-semibold text-sm'>{intl.formatMessage({ id: "btn_label" })}</Button>
                                    </Link>
                                </div>

                                <div className='relative w-full h-[300px] md:w-[300px] md:h-[320px] lg:w-[360px] xl:w-[488px] sm:h-[440px] xl:h-[514px]'>
                                <Image fill src={'/home/fisico-mecanico.webp'} alt={''} />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel pt={{
                            header: {
                                className: "w-[85%] xl:w-[25%] text-sm sm:text-base"
                            },
                            headerAction: {
                                className: "flex gap-5 justify-center bg-transparent",
                            },
                            content: {
                                className: "mt-10 sm:mt-20",
                            }
                        }} header={intl.formatMessage({ id: "home_section_solucoes_substancias-restritas_title" })} leftIcon={<SubstanciasIcon size={"1.5rem"} />}>
                            <div className='flex flex-col-reverse gap-12 sm:gap-0 sm:flex-row justify-between'>
                                <div className='md:w-[380px] lg:w-[420px] xl:w-[520px]'>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-12'>{intl.formatMessage({ id: "home_section_solucoes_substancias-restritas_title" })}</h3>
                                    <p className='text-[#bbb] mb-8'>{intl.formatMessage({ id: "home_section_solucoes_substancias-restritas_description1" })}</p>
                                    <p className='text-[#bbb]'>{intl.formatMessage({ id: "home_section_solucoes_substancias-restritas_description2" })}</p>

                                    <Link href={`${intl.locale}/solucoes/fisico-mecanico`}>
                                        <Button className='mt-12 sm:mt-32 bg-transparent text-white border border-white px-6 py-4 hover:bg-[#00d6b6] hover:border-[#00d6b6] font-semibold text-sm'>{intl.formatMessage({ id: "btn_label" })}</Button>
                                    </Link>
                                </div>

                                <div className='relative w-full h-[300px] md:w-[300px] md:h-[320px] lg:w-[360px] xl:w-[488px] sm:h-[440px] xl:h-[514px]'>
                                <Image fill src={'/home/substancias-restritas.webp'} alt={''} />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel pt={{
                            header: {
                                className: "w-[85%] xl:w-[25%] text-sm sm:text-base"
                            },
                            headerAction: {
                                className: "flex gap-5 justify-center bg-transparent",
                            },
                            content: {
                                className: "mt-10 sm:mt-20",
                            }
                        }} header={intl.formatMessage({ id: "home_section_solucoes_microbiologia_title" })} leftIcon={<MicrobiologiaIcon size={"1.5rem"} />}>
                            <div className='flex flex-col-reverse gap-12 sm:gap-0 sm:flex-row justify-between'>
                                <div className='md:w-[380px] lg:w-[420px] xl:w-[520px]'>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-12'>{intl.formatMessage({ id: "home_section_solucoes_microbiologia_title" })}</h3>
                                    <p className='text-[#bbb] mb-8'>{intl.formatMessage({ id: "home_section_solucoes_microbiologia_description1" })}</p>

                                    <Link href={`${intl.locale}/solucoes/fisico-mecanico`}>
                                        <Button className='mt-12 sm:mt-32 bg-transparent text-white border border-white px-6 py-4 hover:bg-[#00d6b6] hover:border-[#00d6b6] font-semibold text-sm'>{intl.formatMessage({ id: "btn_label" })}</Button>
                                    </Link>
                                </div>

                                <div className='relative w-full h-[300px] md:w-[300px] md:h-[320px] lg:w-[360px] xl:w-[488px] sm:h-[440px] xl:h-[514px]'>
                                <Image fill src={'/home/solucoes-biologicas.webp'} alt={''} />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel pt={{
                            header: {
                                className: "w-[85%] xl:w-[25%] text-sm sm:text-base"
                            },
                            headerAction: {
                                className: "flex gap-5 justify-center bg-transparent",
                            },
                            content: {
                                className: "mt-10 sm:mt-20",
                            }
                        }} header={intl.formatMessage({ id: "home_section_solucoes_biomecanica_title" })} leftIcon={<BiomecanicaIcon size={"1.5rem"} />}>
                            <div className='flex flex-col-reverse gap-12 sm:gap-0 sm:flex-row justify-between'>
                                <div className='md:w-[380px] lg:w-[420px] xl:w-[520px]'>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-12'>{intl.formatMessage({ id: "home_section_solucoes_biomecanica_title" })}</h3>
                                    <p className='text-[#bbb] mb-8'>{intl.formatMessage({ id: "home_section_solucoes_biomecanica_description1" })}</p>
                                    <p className='text-[#bbb]'>{intl.formatMessage({ id: "home_section_solucoes_biomecanica_description2" })}</p>

                                    <Link href={`${intl.locale}/solucoes/fisico-mecanico`}>
                                        <Button className='mt-12 sm:mt-32 bg-transparent text-white border border-white px-6 py-4 hover:bg-[#00d6b6] hover:border-[#00d6b6] font-semibold text-sm'>{intl.formatMessage({ id: "btn_label" })}</Button>
                                    </Link>
                                </div>

                                <div className='relative w-full h-[300px] md:w-[300px] md:h-[320px] lg:w-[360px] xl:w-[488px] sm:h-[440px] xl:h-[514px]'>
                                <Image fill src={'/home/biomecanica.webp'} alt={''} />
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </Container>
        </div>
    )
}