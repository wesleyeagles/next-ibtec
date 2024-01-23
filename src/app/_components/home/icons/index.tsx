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
                <circle cx="728" cy="728.715" r="228" fill="#00D6B6" fillOpacity="0.5" />
            </g>
            <g filter="url(#filter1_b_1356_30)">
                <path d="M728.206 1246.79C1014.51 1246.79 1246.6 1014.7 1246.6 728.396C1246.6 442.094 1014.51 210 728.206 210C441.904 210 209.811 442.094 209.811 728.396C209.811 1014.7 441.904 1246.79 728.206 1246.79Z" stroke="#00D6B6" strokeOpacity="0.15" />
            </g>
            <circle cx="216" cy="645.715" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="216" cy="645.715" r="6" fill="#00D6B6" />
            <circle cx="1004" cy="1167.71" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="1004" cy="1167.71" r="6" fill="#00D6B6" />
            <circle cx="1157" cy="1019.71" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="1157" cy="1019.71" r="6" fill="#00D6B6" />
            <circle cx="1244" cy="782.715" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="1244" cy="782.715" r="6" fill="#00D6B6" />
            <circle cx="694" cy="1246.71" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="694" cy="1246.71" r="6" fill="#00D6B6" />
            <circle cx="280" cy="469.715" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="280" cy="469.715" r="6" fill="#00D6B6" />
            <circle cx="389" cy="338.715" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="389" cy="338.715" r="6" fill="#00D6B6" />
            <circle cx="538" cy="245.715" r="12" fill="#00D6B6" fillOpacity="0.2" />
            <circle cx="538" cy="245.715" r="6" fill="#00D6B6" />
            <defs>
                <filter id="filter0_f_1356_30" x="0" y="0.714844" width="1456" height="1456" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_1356_30" />
                </filter>
                <filter id="filter1_b_1356_30" x="189.311" y="189.5" width="1077.79" height="1077.79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1356_30" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1356_30" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

export const SliderPrevIcon: FC<IIconProps> = (props) => {
	const { size = "1em", ...newProps } = props;

	newProps.height = newProps.height || size;
	newProps.width = newProps.width || size;

	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps}>
			<rect x="1" y="1" width="38" height="38" rx="4" stroke="#1CA591" strokeOpacity="0.2" strokeWidth="2" />
			<path d="M17 19.832L23 25.6631" stroke="#1CA591" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M17 19.8311L23 14" stroke="#1CA591" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export const SliderNextIcon: FC<IIconProps> = (props) => {
	const { size = "1em", ...newProps } = props;

	newProps.height = newProps.height || size;
	newProps.width = newProps.width || size;

	return (
		<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...newProps}>
			<rect x="1" y="1" width="38" height="38" rx="4" stroke="#1CA591" strokeOpacity="0.2" strokeWidth="2" />
			<path d="M23 19.832L17 25.6631" stroke="#1CA591" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M23 19.8311L17 14" stroke="#1CA591" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export const FisicoMecanicoIcon: FC<IIconProps> = (props) => {
	const { size = "1em", ...newProps } = props;

	newProps.height = newProps.height || size;
	newProps.width = newProps.width || size;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" {...newProps}>
			<path className="inovacao_icon_svg"
				id="fisico_mecanico_line"
				d="M10.334 15.254C10.7685 15.685 11.2871 16.0274 11.8595 16.2611C12.4319 16.4949 13.0465 16.6153 13.6673 16.6153C14.2882 16.6153 14.9028 16.4949 15.4752 16.2611C16.0475 16.0274 16.5662 15.685 17.0007 15.254L22.334 10.0708C23.2181 9.21166 23.7147 8.04638 23.7147 6.83133C23.7147 5.61629 23.2181 4.45101 22.334 3.59184C21.45 2.73267 20.2509 2.25 19.0007 2.25C17.7504 2.25 16.5514 2.73267 15.6673 3.59184L15.0007 4.23974"
				stroke="currentColor"
				strokeOpacity="0.5"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
                className="inovacao_icon_svg"
				id="fisico_mecanico_line"
				d="M15.6659 10.0702C15.2314 9.63925 14.7128 9.29687 14.1404 9.06312C13.568 8.82938 12.9534 8.70898 12.3326 8.70898C11.7117 8.70898 11.0971 8.82938 10.5247 9.06312C9.95235 9.29687 9.43372 9.63925 8.99922 10.0702L3.66587 15.2534C2.78181 16.1126 2.28516 17.2779 2.28516 18.4929C2.28516 19.708 2.78181 20.8732 3.66587 21.7324C4.54993 22.5916 5.74897 23.0742 6.99921 23.0742C8.24946 23.0742 9.4485 22.5916 10.3326 21.7324L10.9992 21.0845"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path className="animate-pulse" id="fisico_mecanico_pulse" d="M18.334 24.324V21.7324" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path className="animate-pulse" id="fisico_mecanico_pulse" d="M22.334 17.8457H25.0007" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path className="animate-pulse" id="fisico_mecanico_pulse" d="M1 7.47852H3.66667" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path className="animate-pulse" id="fisico_mecanico_pulse" d="M7.66797 1V3.59159" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export const SubstanciasIcon: FC<IIconProps> = (props) => {
	const { size = "1em", ...newProps } = props;

	newProps.height = newProps.height || size;
	newProps.width = newProps.width || size;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="18" height="26" viewBox="0 0 18 26" fill="none" {...newProps}>
			<path className="inovacao_icon_svg" d="M5 1H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path className="inovacao_icon_svg" d="M6.33203 8.77539H11.6654" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			<path className="inovacao_icon_svg"
				id="fisico_mecanico_line"
				d="M6.36546 1V8.77476L1.09639 23.0285C1.03283 23.1543 0.999834 23.2928 1 23.4333C1.00017 23.5738 1.03349 23.7123 1.09735 23.8379C1.1612 23.9635 1.25385 24.0728 1.36797 24.1572C1.4821 24.2416 1.6146 24.2988 1.75502 24.3243H16.245C16.3854 24.2988 16.5179 24.2416 16.632 24.1572C16.7462 24.0728 16.8388 23.9635 16.9027 23.8379C16.9665 23.7123 16.9998 23.5738 17 23.4333C17.0002 23.2928 16.9672 23.1543 16.9036 23.0285L11.6345 8.77476V1"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const MicrobiologiaIcon: FC<IIconProps> = (props) => {
	const { size = "1em", ...newProps } = props;

	newProps.height = newProps.height || size;
	newProps.width = newProps.width || size;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" {...newProps}>
			<path className="animate-pulse" id="fisico_mecanico_line" d="M3.41406 4.56641L5.00781 9.72812M12.0166 16.542L17.3303 18.0908" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path className="animate-pulse" id="fisico_mecanico_line" d="M10.6035 11.1035L17.8023 4.10742" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path
            className="inovacao_icon_svg"
				d="M2.875 4.64442C3.91053 4.64442 4.75 3.82859 4.75 2.82221C4.75 1.81583 3.91053 1 2.875 1C1.83947 1 1 1.81583 1 2.82221C1 3.82859 1.83947 4.64442 2.875 4.64442Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
				id="microeconomia_line"
			/>
			<path
            className="inovacao_icon_svg"
				d="M19.125 4.64442C20.1605 4.64442 21 3.82859 21 2.82221C21 1.81583 20.1605 1 19.125 1C18.0895 1 17.25 1.81583 17.25 2.82221C17.25 3.82859 18.0895 4.64442 19.125 4.64442Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
				id="microeconomia_line"
			/>
			<path
            className="inovacao_icon_svg"
				d="M19.125 20.4374C20.1605 20.4374 21 19.6216 21 18.6152C21 17.6088 20.1605 16.793 19.125 16.793C18.0895 16.793 17.25 17.6088 17.25 18.6152C17.25 19.6216 18.0895 20.4374 19.125 20.4374Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				id="microeconomia_line"
				strokeLinejoin="round"
			/>
			<path
            className="inovacao_icon_svg"
				d="M6.625 20.4372C9.7316 20.4372 12.25 17.9897 12.25 14.9705C12.25 11.9514 9.7316 9.50391 6.625 9.50391C3.5184 9.50391 1 11.9514 1 14.9705C1 17.9897 3.5184 20.4372 6.625 20.4372Z"
				stroke="currentColor"
				id="fisico_mecanico_line"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const BiomecanicaIcon: FC<IIconProps> = (props) => {
	const { size = "1em", ...newProps } = props;

	newProps.height = newProps.height || size;
	newProps.width = newProps.width || size;

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none" {...newProps}>
			<path
            className="animate-pulse"
				d="M9.16666 3.26763C9.81099 3.26763 10.3333 2.76001 10.3333 2.13382C10.3333 1.50763 9.81099 1 9.16666 1C8.52233 1 8 1.50763 8 2.13382C8 2.76001 8.52233 3.26763 9.16666 3.26763Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path className="inovacao_icon_svg" d="M2.16602 21.4083L5.66601 16.873" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path className="inovacao_icon_svg" d="M12.6673 21.4095L10.334 16.8743L6.83398 13.4728L8.00065 6.66992" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
			<path
                 className="inovacao_icon_svg"
				id="fisico_mecanico_line"
				d="M1 11.2052L3.33333 7.80374L7.99998 6.66992L11.5 10.0714L15 11.2052"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};


