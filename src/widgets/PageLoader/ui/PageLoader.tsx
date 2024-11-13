import { classNames } from "shared/lib/ClassNames/classNames";
import s from './PageLoader.module.scss'
import Loader from "shared/loader/loader";


interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(s.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}

export default PageLoader;