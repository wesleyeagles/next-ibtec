"use client"

import { TypeAnimation } from "react-type-animation"
import Container from "../container/Container"
import { useIntl } from "react-intl";
import InputButton from "../inputs/Button";
import { Carousel } from "primereact/carousel";

import StraightIcon from '@mui/icons-material/Straight';        

import dynamic from 'next/dynamic'
import { useMediaQuery } from "@mui/material";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Header() {
    const isMedia600px = useMediaQuery("(max-width: 600px)");
    const intl = useIntl();

    const styles = {
        nextButton: {
            style: {
                position: "absolute",
                right: "15px",
                display: isMedia600px ? "none" : "block",
            },
        },
        nextButtonIcon: {
            style: {
                color: "#00d6b6",
            },
        },
        previousButtonIcon: {
            style: {
                color: "#00d6b6",
            },
        },
        previousButton: {
            style: {
                position: "absolute",
                left: "0px",
                zIndex: "999999",
                display: isMedia600px ? "none" : "block",
            },
        },
        indicators: {
            className: "hidden",
        },
    }

    const itemTemplate = (item: any) => {
        return (
            <div className="react-video-container">
                {item.type === "video" ? <ReactPlayer url={"home/videoinstitucional2.mp4"} width="100%" height={"100%"} controls={false} loop playing muted /> : item.content}
            </div>
        );
    };

    const items = [
        {
            type: "video",
            source: "videoinstitucional2.mp4"
        },
        {
            type: "html",
            content: (
                <div className="home-banner">
                    <Container>
                        <div className="flex flex-col justify-center h-full pt-14 sm:pt-16">
                            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl md:text-5xl font-bold sm:w-[420px] md:w-[550px] md:leading-tight">{}{intl.formatMessage({ id: "h1_header_1" })}</h1>
                            <p className="text-sm sm:text-xl md:leading-relaxed sm:w-[420px] md:w-[450px] mt-4 mb-8 sm:mb-20 sm:mt-8">{intl.formatMessage({ id: "p_header" })}</p>
                            <InputButton href={`/${intl.locale}/contact`} />
                            <div className="border border-gray-600 w-max p-2 sm:p-5 rounded-full rotate-180 mt-16 sm:mt-32 cursor-pointer">
                                <StraightIcon className="animate-bounce" fontSize="large" />
                            </div>
                        </div>
                    </Container>
                </div>
            )
        }
    ]

    const itemsMobile = [
        {
            type: "html",
            content: (
                <div className="home-banner">
                    <Container>
                        <div className="flex flex-col justify-center h-full pt-14 sm:pt-16">
                            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl md:text-5xl font-bold sm:w-[420px] md:w-[550px] md:leading-tight">{}{intl.formatMessage({ id: "h1_header_1" })}</h1>
                            <p className="text-sm sm:text-xl md:leading-relaxed sm:w-[420px] md:w-[450px] mt-4 mb-8 sm:mb-20 sm:mt-8">{intl.formatMessage({ id: "p_header" })}</p>
                            <InputButton href={`/${intl.locale}/contact`} />
                            <div className="border border-gray-600 w-max p-2 sm:p-5 rounded-full rotate-180 mt-16 sm:mt-32 cursor-pointer">
                                <StraightIcon className="animate-bounce" fontSize="large" />
                            </div>
                        </div>
                    </Container>
                </div>
            )
        }
    ]

    return (
        <Carousel itemTemplate={itemTemplate} pt={styles} value={isMedia600px ? itemsMobile : items} />
    )
}