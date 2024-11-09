import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "shared/config/routerConfig/routerConfig";

export const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.entries(routeConfig).map(([path, {element}]) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter

