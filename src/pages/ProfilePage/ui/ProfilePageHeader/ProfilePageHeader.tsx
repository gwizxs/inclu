import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/library/ClassNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  updateProfileData,
} from '@/features/editableProfileCard';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { profileActions } from '@/features/editableProfileCard/model/slice/profileSlice';

interface ProfilePageProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCantleEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <HStack gap="8">
          <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCantleEdit}>
            {t('Отменить')}
          </Button>
          <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
            {t('Сохранить')}
          </Button>
        </HStack>
      )}
    </HStack>
  );
};

export default ProfilePageHeader;
