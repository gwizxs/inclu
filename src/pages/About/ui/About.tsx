import { useTranslation } from "react-i18next";


export const About = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('О сайте')}
        </div>
    )
}

export default About;