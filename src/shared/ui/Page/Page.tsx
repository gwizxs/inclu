import classNames from "shared/lib/ClassNames/classNames"
import s from './Page.module.scss'
import { MutableRefObject, ReactNode, useRef } from "react"
import { UseInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll"

interface PageProps {
    className?: string
    children?: ReactNode;
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    UseInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd
    })
    return (
        <section ref={wrapperRef} className={classNames(s.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
}