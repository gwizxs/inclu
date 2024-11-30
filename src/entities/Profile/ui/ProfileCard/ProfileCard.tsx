import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onchangeFirstName?: (value?: string) => void;
    onchangeLastName?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onchangeAge?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onchangeFirstName,
        onchangeLastName,
        onChangeCity,
        onchangeAge
    } = props
    const { t } = useTranslation('profile');

    if(isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader/>
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text theme={TextTheme.ERROR}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
            </div>
            <div className={cls.data}>
                <Input
                    readonly={readonly}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onchangeFirstName}
                    
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onchangeLastName}
                    readonly={readonly}
                />
                <Input
                    readonly={readonly}
                    value={data?.city}
                    placeholder={t('Ваше город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    
                />
                <Input
                    value={data?.age}
                    placeholder={t('Ваш возраст')}
                    className={cls.input}
                    onChange={onchangeAge}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
