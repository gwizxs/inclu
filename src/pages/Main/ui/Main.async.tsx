import { lazy } from "react";


export const MainPageAsync = lazy(() => import('./Main').then(module => ({ default: module.Main })));