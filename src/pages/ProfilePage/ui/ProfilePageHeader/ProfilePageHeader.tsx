import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";

interface ProfilePageProps {
    className?: string;
}

const ProfilePageHeader = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            <Button
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Редактировать')}
            </Button>
        </div>
    );
};

export default ProfilePageHeader;
