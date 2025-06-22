import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from '@/shared/ui/_deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/_deprecated/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/library/components/DynamicModuleLoader/DynamicModuleLoader';
import classNames from '@/shared/library/ClassNames/classNames';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        data-testid="AddCommentForm"
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          data-testid="AddCommentForm.Input"
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          data-testid="AddCommentForm.Button"
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
