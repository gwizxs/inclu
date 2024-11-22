

import { profileReducer } from "entities/Profile";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
    profile: profileReducer
}

export const ProfilePage = memo(() => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage;