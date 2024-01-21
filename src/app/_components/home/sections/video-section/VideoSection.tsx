"use client"
import Container from "@/app/_components/container/Container";
import InputButton from "@/app/_components/inputs/Button";
import Image from "next/image";
import { useState } from "react";
import { useIntl } from "react-intl";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ModalVideo from "./ModalVideo";
import { VideoPlayIcon } from "../../icons";

export default function VideoSection() {
    const [showModal, setShowModal] = useState(false);
    const intl = useIntl()
    return (
        <div className="mt-32 md:mt-64">
            <Container>
                <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
                    <div className="relative w-full h-[360px] md:w-[348px] lg:w-[378px] md:h-[448px] lg:h-[488px] xl:w-[488px] xl:h-[500px]">
                        <Image placeholder="blur" blurDataURL="/home/video-home-bg-blur" fill src="/home/video-home-bg.webp" alt="Video institucional" />
                        <div role="button" onClick={() => setShowModal(true)} className="bg-[#171f2b] w-[180px] h-[130px] shadow-md absolute left-[20px] top-[20px] lg:left-auto lg:-right-[32px] lg:top-[98px] rounded-md flex flex-col items-center justify-center gap-2">
                            <div className="rounded-full flex items-center justify-center">
                                <VideoPlayIcon size={"3rem"} />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span>{intl.formatMessage({ id: "assista_o_video" })}</span>
                                <span className="text-[#00d6b6] font-bold lowercase">{intl.formatMessage({ id: "institucional" })}</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[320px] lg:w-[400px] xl:w-[500px]">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">{intl.formatMessage({ id: "home_section_video_title" })}</h2>
                        <p className="text-sm md:text-base text-[#bbb] font-medium mt-6 md:mt-12 mb-5 md:mb-8 lg:mb-10 xl:mb-20">{intl.formatMessage({ id: "home_section_video_text" })}</p>
                        <InputButton href={`${intl.locale}/quem-somos`} />
                    </div>
                </div>
            </Container>
            <ModalVideo showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}