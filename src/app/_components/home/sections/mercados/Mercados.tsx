
"use client"

import Container from "@/app/_components/container/Container";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import { useIntl } from "react-intl"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderNextIcon, SliderPrevIcon } from "../../icons";

export default function Mercados() {
    const isMedia600px = useMediaQuery("(max-width: 600px)");
    const isMedia1024px = useMediaQuery("(max-width: 1024px)");
    const intl = useIntl();

    const [sliderRef, setSliderRef] = useState<Slider | null>(null);

    const settings = {
        slidesToShow: isMedia600px ? 1 : isMedia1024px ? 2 : 3,
        slidesToScroll: 1,
        arrows: false, // Desativa as flechas padrão
    };

    const goToPrevSlide = () => {
        if (sliderRef) {
            sliderRef.slickPrev();
        }
    };

    const goToNextSlide = () => {
        if (sliderRef) {
            sliderRef.slickNext();
        }
    };


    return (
        <div className="mercados mt-32 sm:mt-64">
            <Container>

                <div className="hidden lg:block">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-20 lg:w-[450px]">{intl.formatMessage({ id: "home_section_mercados_title" })}</h2>
                    <div className="wrapper flex justify-between">
                        <div className="slide equipamentos-de-protecao">
                            <Link href={`${intl.locale}/mercados/equipamentos-de-protecao-individual`}>
                                <div className="label-container">
                                    <div className="label"><p>{intl.formatMessage({ id: "home_section_mercados_slide1" })}</p></div>
                                    <div className="icon">
                                        <ChevronRight stroke="#00d6b6" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="slide calcados">
                            <Link href={`${intl.locale}/mercados/calcados-couros-e-componentes`}>
                                <div className="label-container">
                                    <div className="label"><p>{intl.formatMessage({ id: "home_section_mercados_slide2" })}</p></div>
                                    <div className="icon">
                                        <ChevronRight stroke="#00d6b6" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="slide industria-textil">
                            <Link href={`${intl.locale}/mercados/industria-textil`}>
                                <div className="label-container">
                                    <div className="label"><p>{intl.formatMessage({ id: "home_section_mercados_slide3" })}</p></div>
                                    <div className="icon">
                                        <ChevronRight stroke="#00d6b6" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">

                    <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-20">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold w-[300px] lg:w-[420px]">{intl.formatMessage({ id: "home_section_mercados_title" })}</h2>
                        <div className="flex flex-col gap-2">
                            <small className="text-[#00d6b6] font-bold text-sm mt-4 sm:mt-0">{intl.formatMessage({ id: "home_section_mercados_small" })}</small>
                            <div className="flex gap-2 sm:justify-end">
                                <SliderPrevIcon onClick={goToPrevSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
                                <SliderNextIcon onClick={goToNextSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
                            <div className="equipamentos-de-protecao h-[500px] rounded relative">
                                <Link href={`${intl.locale}/mercados/equipamentos-de-protecao-individual`}>
                                    <div className="absolute bg-[#2a3547] w-[90%] rounded flex items-center p-4 right-0 bottom-16 border-l-8 border-[#00d6b6]">
                                        <div className="label"><p>{intl.formatMessage({ id: "home_section_mercados_slide1" })}</p></div>
                                        <div className="icon">
                                            <ChevronRight stroke="#00d6b6" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="calcados h-[500px] rounded relative">
                                <Link href={`${intl.locale}/mercados/calcados-couros-e-componentes`}>
                                    <div className="absolute bg-[#2a3547] w-[90%] rounded flex items-center p-4 right-0 bottom-16 border-l-8 border-[#00d6b6]">
                                        <div className="label"><p>{intl.formatMessage({ id: "home_section_mercados_slide2" })}</p></div>
                                        <div className="icon">
                                            <ChevronRight stroke="#00d6b6" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="industria-textil h-[500px] rounded relative">
                                <Link href={`${intl.locale}/mercados/industria-textil`}>
                                    <div className="absolute bg-[#2a3547] w-[90%] rounded flex items-center p-4 right-0 bottom-16 border-l-8 border-[#00d6b6]">
                                        <div className="label"><p>{intl.formatMessage({ id: "home_section_mercados_slide3" })}</p></div>
                                        <div className="icon">
                                            <ChevronRight stroke="#00d6b6" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

