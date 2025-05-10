import { Button } from '@/shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
