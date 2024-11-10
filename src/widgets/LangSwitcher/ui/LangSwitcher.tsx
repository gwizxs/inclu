import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import s from './LangSwitcher.module.scss'
import Button, { ThemeButton } from "shared/ui/Button/Button";


interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: ILangSwitcherProps) => {

    const { t, i18n } = useTranslation();
    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
            <Button theme={ThemeButton.CLEAR}
             onClick={toogle}>{t('Язык')}</Button>
    )
}

export default LangSwitcher;