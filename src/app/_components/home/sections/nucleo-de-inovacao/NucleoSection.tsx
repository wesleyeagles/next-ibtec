"use client"
import Container from "@/app/_components/container/Container";
import InputButton from "@/app/_components/inputs/Button";
import Image from "next/image";
import { useIntl } from "react-intl";
import { CircleAnimateIcon } from "../../icons";

export default function NucleoSection() {
    const intl = useIntl();

    return (
        <div className="relative mt-24 sm:mt-48 z-[1]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 relative">
                    <CircleAnimateIcon style={{
                        animationDuration: "60s",
                    }} size={"100rem"} className="absolute -top-96 -right-[800px] animate-spin z-[-1000]" />
                    <div className="md:w-[320px] lg:w-[360px] xl:w-[460px]">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">{intl.formatMessage({ id: "home_section_nucleo_title" })}</h2>
                        <p className="text-sm md:text-base text-[#bbb] font-medium mt-6 md:mt-12 mb-5 md:mb-8 lg:mb-10 xl:mb-20">{intl.formatMessage({ id: "home_section_nucleo_text" })}</p>
                        <InputButton href={`${intl.locale}/nucleo-de-inovacao`} />
                    </div>


                    <div className="relative w-full h-[300px] md:w-[348px] lg:w-[408px] md:h-[408px] lg:h-[408px] xl:w-[588px] xl:h-[440px]">
                        <Image placeholder="blur" blurDataURL="/home/home_tenis-blur.webp" fill src="/home/home_tenis.webp" alt="nucleo-de-inovacao" />
                    </div>
                </div>
            </Container>
        </div>
    )

}