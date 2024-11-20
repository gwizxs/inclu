import { classNames } from "shared/lib/ClassNames/classNames"
import s from './LoginForm.module.scss'
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/LoginSlice";
import { getLoginState } from "../../model/selectors/GetLoginState/GetLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import { get } from "http";

interface ILoginFormProps  {
    className?: string;
}

export const LoginForm= memo(({className}: ILoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const loginForm = useSelector(getLoginState);
    const {username, password} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) =>
        dispatch(loginActions.setUsername(value)),
    [dispatch]);

    const onChangePassword = useCallback((value: string) =>
        dispatch(loginActions.setPassword(value)),
    [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    
    return (
        <section className={classNames(s.LoginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Логин')}
                className={s.input}
                onChange={onChangeUsername}
                value={loginForm?.username}
            />
            <Input 
                type="text"
                placeholder={t('Пароль')}
                className={s.input}
                onChange={onChangePassword}
                value={loginForm?.password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={s.loginBtn}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </section>
    )
})

export default LoginForm;