import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  // @ts-ignore
  const { increment, decrement, add } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  const handleAdd = (value: number) => {
    add(value);
  };

  return (
    <div>
      <h1>{counterValue}</h1>
      <Button onClick={handleIncrement}>{t('increment')}</Button>
      <Button onClick={handleDecrement}>{t('decrement')}</Button>
      <Button onClick={() => handleAdd(10)}>{t('add')}</Button>
    </div>
  );
};
