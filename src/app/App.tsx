import React, { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useSelector } from 'react-redux';
import { getUserInited } from '@/entities/User';
import { initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/shared/ui/_deprecated/PageLoader';
import { ToggleFeatures } from '@/shared/library/features';
import { MainLayout } from '@/shared/layouts';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={<div>lretlg</div>}
            />
          </Suspense>
        </div>
      }
      off={
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
}

export default App;
