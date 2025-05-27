import { classNames, Mods } from '@/shared/library/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Profile } from '@/entities/Profile';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';

import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';

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
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  onChangeCountry?: (country: Country) => void;
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
    onchangeAge,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap="8" className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.header} />
      <HStack justify="center" max className={cls.AvatarWr}>
        {data?.avatar && (
          <Avatar src={data?.avatar} alt={data?.first} size={100} />
        )}
      </HStack>
      <Input
        readonly={readonly}
        value={data?.first}
        placeholder={t('Ваше имя')}
        className={cls.input}
        onChange={onchangeFirstName}
        data-testid="ProfileCard.FirstName"
      />
      <Input
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        className={cls.input}
        onChange={onchangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.LastName"
      />
      <Input
        readonly={readonly}
        value={data?.city}
        placeholder={t('Ваше город')}
        className={cls.input}
        onChange={onChangeCity}
        data-testid="ProfileCard.City"
      />
      <Input
        value={data?.age}
        placeholder={t('Ваш возраст')}
        className={cls.input}
        onChange={onchangeAge}
        readonly={readonly}
        data-testid="ProfileCard.Age"
      />
      <Input
        readonly={readonly}
        value={data?.username}
        placeholder={t('имя пользователя')}
        className={cls.input}
        onChange={onChangeUsername}
        data-testid="ProfileCard.Username"
      />
      <Input
        value={data?.avatar}
        placeholder={t('ваша ссылка на аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid="ProfileCard.Avatar"
      />
      <CurrencySelect
        value={data?.currency}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeCurrency}
        data-testid="ProfileCard.Currency"
      />
      <CountrySelect
        value={data?.country}
        readonly={readonly}
        className={cls.input}
        onChange={onChangeCountry}
        data-testid="ProfileCard.Country"
      />
    </VStack>
  );
};
