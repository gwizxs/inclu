

import { memo } from "react";
import { useTranslation } from "react-i18next";


export const ProfilePage = memo(() => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Профиль')}
        </div>
    )
})

export default ProfilePage;