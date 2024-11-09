import { classNames } from 'shared/lib/classNames';
import s from './Sidebar.module.scss'
import { useState } from 'react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';


interface SidebarProps {
    className?: string;
}


export const Sidebar = ({ className }: SidebarProps) => {

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>

            <Button
                theme={ThemeButton.CLEAR}>
                toogle</Button>
        </div>
    );
}

export default Sidebar;