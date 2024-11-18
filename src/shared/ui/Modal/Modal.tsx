import { classNames } from "shared/lib/ClassNames/classNames";
import s from './Modal.module.scss'
import { useCallback, useEffect, useRef, useState } from "react";


interface IModalProps {
    className?: string,
    children?: React.ReactNode,
    isOpen?: boolean,
    onClose?: () => void;
}

const ANIMATION_DELAY = 300

export const Modal = ({ className, children, isOpen, onClose }: IModalProps) => {

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [s.open]: isOpen,
        [s.closing]: isClosing
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                window.removeEventListener('keydown', onKeyDown);
            }
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
            closeHandler();
        }
    }, [closeHandler]);

    return (
        <section className={classNames(s.Modal, mods, [className])}>
            <div className={s.overlay} onClick={closeHandler}>
                <div className={s.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Modal;

