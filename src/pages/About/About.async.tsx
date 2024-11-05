import { lazy } from "react";


export const AboutPageAsync = lazy(() => import('./About').then(module => ({ default: module.About })));