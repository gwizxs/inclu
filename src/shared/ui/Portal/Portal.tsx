import { createPortal } from "react-dom";
import { classNames } from "shared/lib/ClassNames/classNames";


interface IPortalProps {
    children?: React.ReactNode;
    element?: HTMLElement;
}

export const Portal = ({ children, element }: IPortalProps) => {

    return createPortal(children, element || document.body);
}

export default Portal;

