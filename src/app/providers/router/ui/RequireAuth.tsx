/* eslint-disable prefer-const */
import { getUserAuthData, UserRole, getUserRoles } from 'entities/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

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

    if (!auth || !hasRequireRoles) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
    return children;
}
