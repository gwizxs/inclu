import { memo } from "react";
import { useTranslation } from "react-i18next";


export const About = memo(() => {
    const {t} = useTranslation();

    return (
        <div>
            {t('О сайте')}
        </div>
    )
})

export default About;