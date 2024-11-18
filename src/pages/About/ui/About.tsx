import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";


export const About = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('О сайте')}
            <Counter/>
        </div>
    )
}

export default About;