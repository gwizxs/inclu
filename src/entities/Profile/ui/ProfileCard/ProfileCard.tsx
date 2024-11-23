import { useSelector } from 'react-redux';
import s from './ProfileCard.module.scss'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';

interface ILoginModalProps {
    className?: string;
}

export const ProfileCard = (props: ILoginModalProps) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    const {
        className
    } = props

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text title={t('Профиль')} />
                <Button
                    className={s.editBtn}
                    theme={ThemeButton.BACKGROUND}

                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Имя')}
                    className={s.input} />
                <Input
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                    className={s.input} />
            </div>
        </div>
    )
}

export default ProfileCard