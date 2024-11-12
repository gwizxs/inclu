import { classNames } from 'shared/lib/classNames';
import './loader.scss'

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames("lds-facebook", {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

export default Loader;