import React, { memo, Suspense } from "react";
import LJAppHeader from "../../components/app-header/index";
import LJAppFooter from "../../components/app-footer/index";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "../../router/index";

export default memo(function LJmain() {
  return (
    <HashRouter>
      <LJAppHeader></LJAppHeader>
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <LJAppFooter></LJAppFooter>
    </HashRouter>
  );
});
