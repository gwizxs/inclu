import { useSelector } from 'react-redux';
import s from './ProfileCard.module.scss'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';

interface ILoginModalProps  {
    className?: string;
}

export const  ProfileCard = (props: ILoginModalProps) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    const {
        className
    } = props

    return (
        <div className={classNames(s.LoginModal, {}, [className])}>
            <div>
                <Text title={t('Профиль')} />
                <Button
                    theme={ThemeButton.BACKGROUND_INVERTED}
                >
                    {t('Редактировать')}
                </Button>
            </div>
        </div>
    )
}

export default ProfileCard