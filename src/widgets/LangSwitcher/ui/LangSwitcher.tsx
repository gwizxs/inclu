import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";


export const LangSwitcher = () => {

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