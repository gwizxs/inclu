

import { useTranslation } from "react-i18next";


export const ProfilePage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Профиль')}
        </div>
    )
}

export default ProfilePage;