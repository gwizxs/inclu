
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";


export const Main = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value)
    }
    
    return (
        <div>
            {t('Главная страница')}
            <Input value={value} onChange={onChange} placeholder="введите текст"></Input>
        </div>
    )
}
export default Main;