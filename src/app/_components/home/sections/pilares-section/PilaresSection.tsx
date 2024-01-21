"use client"
import { useIntl } from "react-intl";
import { ConhecimentoIcon, InovacaoIcon, SustentabilidadeIcon, TecnologiaIcon } from "../../icons";
import Container from "@/app/_components/container/Container";

export default function PilaresSection() {
    const intl = useIntl();

    return (
        <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 sm:mt-32 gap-10 md:gap-0">
            <h3 className="text-2xl">{intl.formatMessage({ id: "nossos-pilares" })}</h3>

            <div className="flex flex-wrap justify-between xl:justify-start gap-x-20 gap-y-5 xl:gap-20 md:max-w-[500px] xl:max-w-full">
                <div className="flex items-center gap-2 w-[200px] xl:w-auto">
                    <InovacaoIcon />
                    <span className="text-lg text-[#bbb]">{intl.formatMessage({ id: "inovacao" })}</span>
                </div>

                <div className="flex items-center gap-2 w-[200px] xl:w-auto">
                    <TecnologiaIcon />
                    <span className="text-lg text-[#bbb]">{intl.formatMessage({ id: "tecnologia" })}</span>
                </div>

                <div className="flex items-center gap-2 w-[200px] xl:w-auto">
                    <SustentabilidadeIcon />
                    <span className="text-lg text-[#bbb]">{intl.formatMessage({ id: "sustentabilidade" })}</span>
                </div>

                <div className="flex items-center gap-2 w-[200px] xl:w-auto">
                    <ConhecimentoIcon />
                    <span className="text-lg text-[#bbb]">{intl.formatMessage({ id: "conhecimento" })}</span>
                </div>
            </div>
        </div>
        </Container>
    )
}