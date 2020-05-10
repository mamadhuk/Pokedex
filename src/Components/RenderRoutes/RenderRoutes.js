import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { routesConfig } from "../../config";

const RenderRoutes = (props) => {
    const { redirect } = props;

    const renderRoutes = () => {
        routesConfig.map((route, index) => {
            return (
                <Route
                    key={index}
                    exact
                    path={route.path}
                    component={route.component}
                />
            );
        });
    }

    return <>{renderRoutes()}</>;
}

export { RenderRoutes }