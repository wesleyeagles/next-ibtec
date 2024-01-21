import { FC, SVGProps } from "react";

export interface IIconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
}

export type CustomIconType = FC<IIconProps>;

export const VideoPlayIcon: FC<IIconProps> = (props) => {
    const { size = "1rem", ...newProps } = props;

    newProps.height = newProps.height || size;
    newProps.width = newProps.width || size;

    return (
        <svg {...newProps} className="video-play-svg" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="animate-pulse" d="M17.6 13.2C16.9408 12.7056 16 13.176 16 14V25C16 25.824 16.9408 26.2944 17.6 25.8L24.9333 20.3C25.4667 19.9 25.4667 19.1 24.9333 18.7L17.6 13.2Z" stroke="#00D6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19.5" cy="19.5" r="18.5" stroke="url(#paint0_linear_1349_2)" strokeOpacity="0.8" strokeWidth="2" />
            <defs>
                <linearGradient id="paint0_linear_1349_2" x1="19.5" y1="0" x2="19.5" y2="39" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00D6B6" />
                    <stop offset="1" stopColor="#00D6B6" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const InovacaoIcon: FC<IIconProps> = (props) => {
    const { size = "1rem", ...newProps } = props;

    newProps.height = newProps.height || size;
    newProps.width = newProps.width || size;

    return (
        <svg {...newProps} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="5" fill="#171F2B" />
            <path className="animate-pulse" d="M10.8008 23.1918H12.2174M23.5508 10.8008V12.1776M34.8841 23.1918H36.3008M14.4841 14.3804L15.4758 15.3442M32.6174 14.3804L31.6258 15.3442" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="inovacao_icon_svg" d="M19.3001 28.6996C18.1108 27.8327 17.2323 26.6241 16.789 25.2451C16.3457 23.866 16.3602 22.3863 16.8303 21.0156C17.3004 19.6449 18.2024 18.4528 19.4084 17.608C20.6145 16.7632 22.0635 16.3086 23.5501 16.3086C25.0368 16.3086 26.4858 16.7632 27.6918 17.608C28.8979 18.4528 29.7998 19.6449 30.27 21.0156C30.7401 22.3863 30.7545 23.866 30.3113 25.2451C29.868 26.6241 28.9895 27.8327 27.8001 28.6996C27.247 29.2317 26.8306 29.8829 26.5844 30.6004C26.3383 31.318 26.2695 32.0818 26.3835 32.83C26.3835 33.5602 26.085 34.2606 25.5536 34.777C25.0222 35.2934 24.3016 35.5835 23.5501 35.5835C22.7987 35.5835 22.078 35.2934 21.5467 34.777C21.0153 34.2606 20.7168 33.5602 20.7168 32.83C20.8308 32.0818 20.7619 31.318 20.5158 30.6004C20.2697 29.8829 19.8532 29.2317 19.3001 28.6996" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="inovacao_icon_svg" d="M21 30H27.5167" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const TecnologiaIcon: FC<IIconProps> = (props) => {
    const { size = "1rem", ...newProps } = props;

    newProps.height = newProps.height || size;
    newProps.width = newProps.width || size;

    return (
        <svg {...newProps} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="5" fill="#171F2B" />
            <path className="inovacao_icon_svg" d="M31.4996 14.5273H15.8996C15.1816 14.5273 14.5996 15.093 14.5996 15.7907V30.9515C14.5996 31.6493 15.1816 32.2149 15.8996 32.2149H31.4996C32.2176 32.2149 32.7996 31.6493 32.7996 30.9515V15.7907C32.7996 15.093 32.2176 14.5273 31.4996 14.5273Z" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="inovacao_icon_svg" d="M19.7988 19.5801H27.5988V27.1605H19.7988V19.5801Z" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M12 20.8438H14.6" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M12 25.8965H14.6" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M21.1016 12V14.5268" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M26.2988 12V14.5268" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M35.4008 20.8438H32.8008" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M35.4008 25.8965H32.8008" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M26.2988 34.7416V32.2148" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="animate-pulse" d="M21.1016 34.7416V32.2148" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const SustentabilidadeIcon: FC<IIconProps> = (props) => {
    const { size = "1rem", ...newProps } = props;

    newProps.height = newProps.height || size;
    newProps.width = newProps.width || size;

    return (
        <svg {...newProps} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="5" fill="#171F2B" />
            <path className="inovacao_icon_svg" d="M17 32C17.5 27.5 19.5 24 24 22" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="inovacao_icon_svg" d="M21.3227 29C27.9236 29 32.4692 25.9469 33 17.8571V16H28.7389C19.1847 16 16.0149 19.7143 16 24.3571C16 25.2857 16 27.1429 18.1231 29H21.3079H21.3227Z" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const ConhecimentoIcon: FC<IIconProps> = (props) => {
    const { size = "1rem", ...newProps } = props;

    newProps.height = newProps.height || size;
    newProps.width = newProps.width || size;

    return (
        <svg {...newProps} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5C0 2.23858 2.23858 0 5 0H43C45.7614 0 48 2.23858 48 5V43C48 45.7614 45.7614 48 43 48H5C2.23858 48 0 45.7614 0 43V5Z" fill="#171F2B" />
            <path className="inovacao_icon_svg" d="M15 22C15 22.9193 15.1811 23.8295 15.5328 24.6788C15.8846 25.5281 16.4002 26.2997 17.0503 26.9497C17.7003 27.5998 18.4719 28.1154 19.3212 28.4672C20.1705 28.8189 21.0807 29 22 29C22.9193 29 23.8295 28.8189 24.6788 28.4672C25.5281 28.1154 26.2997 27.5998 26.9497 26.9497C27.5998 26.2997 28.1154 25.5281 28.4672 24.6788C28.8189 23.8295 29 22.9193 29 22C29 21.0807 28.8189 20.1705 28.4672 19.3212C28.1154 18.4719 27.5998 17.7003 26.9497 17.0503C26.2997 16.4002 25.5281 15.8846 24.6788 15.5328C23.8295 15.1811 22.9193 15 22 15C21.0807 15 20.1705 15.1811 19.3212 15.5328C18.4719 15.8846 17.7003 16.4002 17.0503 17.0503C16.4002 17.7003 15.8846 18.4719 15.5328 19.3212C15.1811 20.1705 15 21.0807 15 22Z" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path className="inovacao_icon_svg" d="M33 33L27 27" stroke="#00D6B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    )
}

export const CircleAnimateIcon: FC<IIconProps> = (props) => {
    const { size = "1rem", ...newProps } = props;

    newProps.height = newProps.height || size;
    newProps.width = newProps.width || size;

    return (
        <svg {...newProps} viewBox="0 0 1456 1457" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1356_30)">
                <circle cx="728" cy="728.715" r="228" fill="#00D6B6" fill-opacity="0.5" />
            </g>
            <g filter="url(#filter1_b_1356_30)">
                <path d="M728.206 1246.79C1014.51 1246.79 1246.6 1014.7 1246.6 728.396C1246.6 442.094 1014.51 210 728.206 210C441.904 210 209.811 442.094 209.811 728.396C209.811 1014.7 441.904 1246.79 728.206 1246.79Z" stroke="#00D6B6" stroke-opacity="0.15" />
            </g>
            <circle cx="216" cy="645.715" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="216" cy="645.715" r="6" fill="#00D6B6" />
            <circle cx="1004" cy="1167.71" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="1004" cy="1167.71" r="6" fill="#00D6B6" />
            <circle cx="1157" cy="1019.71" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="1157" cy="1019.71" r="6" fill="#00D6B6" />
            <circle cx="1244" cy="782.715" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="1244" cy="782.715" r="6" fill="#00D6B6" />
            <circle cx="694" cy="1246.71" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="694" cy="1246.71" r="6" fill="#00D6B6" />
            <circle cx="280" cy="469.715" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="280" cy="469.715" r="6" fill="#00D6B6" />
            <circle cx="389" cy="338.715" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="389" cy="338.715" r="6" fill="#00D6B6" />
            <circle cx="538" cy="245.715" r="12" fill="#00D6B6" fill-opacity="0.2" />
            <circle cx="538" cy="245.715" r="6" fill="#00D6B6" />
            <defs>
                <filter id="filter0_f_1356_30" x="0" y="0.714844" width="1456" height="1456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1356_30" />
                </filter>
                <filter id="filter1_b_1356_30" x="189.311" y="189.5" width="1077.79" height="1077.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1356_30" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1356_30" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}


