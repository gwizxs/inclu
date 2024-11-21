import { lazy } from "react";

export const LoginFormAsync = lazy(() => import('./LoginForm').then(module => ({ default: module.LoginForm })));