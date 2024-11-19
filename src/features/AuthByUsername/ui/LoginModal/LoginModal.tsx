import { classNames } from "shared/lib/ClassNames/classNames"
import { Modal } from "shared/ui/Modal/Modal";
import s from './LoginModal.module.scss'
import {LoginForm} from "../LoginForm/LoginForm";

interface ILoginModalProps  {
    className?: string;
    isOpen: boolean;
    onClose: () => void
}

export const LoginModal= ({className, isOpen, onClose}: ILoginModalProps) => {
    return (
        <Modal
            className={classNames(s.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy>
            <LoginForm/>
        </Modal>
    )
}

export default LoginModal