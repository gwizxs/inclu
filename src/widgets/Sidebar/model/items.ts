import { SVGProps, VFC } from "react";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import AboutIcon20 from 'shared/assets/icons/about-20-20.svg'
import MainIcon20 from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon20 from 'shared/assets/icons/profile-20-20.svg'
export interface SidebarItemCom {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemCom[] = [
    {
        path: RoutePath.main,
        icon: MainIcon20,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        icon: AboutIcon20,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon20,
        text: 'Профиль',
    },
]