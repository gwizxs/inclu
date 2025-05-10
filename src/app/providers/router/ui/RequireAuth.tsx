/* eslint-disable prefer-const */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, UserRole, getUserRoles } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    let auth = useSelector(getUserAuthData);
    let location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const hasRequireRoles = useMemo(() => {
        if (!roles) return true;
        return roles.some((role) => {
            const hasRole = userRoles?.includes(role);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!hasRequireRoles) return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;

    if (!auth) return <Navigate to={getRouteMain()} state={{ from: location }} replace />;

    return children;
}
