import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/sidebar';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import {
  getRouteProfile,
  getRouteArticles,
  getRouteMain,
  getRouteAbout,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'О сайте',
    },
  ];

  if (userData) {
    SidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
      },
    );
  }

  return SidebarItemsList;
});
