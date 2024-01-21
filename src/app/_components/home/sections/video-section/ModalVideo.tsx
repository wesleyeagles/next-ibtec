import { Dialog } from "primereact/dialog";
import dynamic from 'next/dynamic'
import { Button } from "primereact/button";
import CloseIcon from '@mui/icons-material/Close';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface IModalVideoProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalVideo({...props}: IModalVideoProps) {
    return (
        <Dialog dismissableMask closeOnEscape pt={{
            root: {
                className: "lg:w-[1000px] lg:h-[563px]"
            },
            header: {
                className: "hidden p-0",
            },
            content: {
                className: "p-0",
            },
            mask: {
                className: "backdrop-blur-md"
            }
        }} blockScroll visible={props.showModal} onHide={() => props.setShowModal(false)}>
            <Button onClick={() => props.setShowModal(false)} className="absolute z-[999] p-0 right-2 top-2"><CloseIcon fontSize="small" /></Button>
            <ReactPlayer url={"home/videoinstitucional.mp4"} width={"100%"} height={"100%"} controls={true} loop />
        </Dialog>
    )
}