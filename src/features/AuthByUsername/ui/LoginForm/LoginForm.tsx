import { classNames } from '@/shared/library/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/_deprecated/Button';
import { Input } from '@/shared/ui/_deprecated/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from '@/shared/ui/_deprecated/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/library/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && (
          <Text
            text={t('Вы ввели неверный логин или пароль')}
            theme={TextTheme.ERROR}
          />
        )}
        <Input
          autofocus
          type="text"
          className={cls.input}
          placeholder={t('Введите username')}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          type="text"
          className={cls.input}
          placeholder={t('Введите пароль')}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
