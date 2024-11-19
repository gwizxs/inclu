import { classNames } from "shared/lib/ClassNames/classNames"
import s from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ILoginFormProps  {
    className?: string;
}

export const LoginForm= ({className}: ILoginFormProps) => {
    const {t} = useTranslation()
    return (
        <section className={classNames(s.LoginForm, {}, [className])}>
            <Input type="text" placeholder={t('Логин')}  className={s.input}/>
            <Input type="text" placeholder={t('Пароль')}  className={s.input}/>
            <Button theme={ThemeButton.BACKGROUND_INVERTED} className={s.loginBtn}>
                {t('Войти')}
            </Button>
        </section>
    )
}

export default LoginForm;