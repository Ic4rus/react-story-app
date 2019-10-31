import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as RouteMap from '../../constants/RouteMap';
import Item from '../../page/item/Item';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from={RouteMap.ROUTE_HOME} to={RouteMap.ROUTE_ITEM1} />
      <Route exact path={RouteMap.ROUTE_ITEM1} component={Item} />
      <Route exact path={RouteMap.ROUTE_ITEM2} component={Item} />
      <Route exact path={RouteMap.ROUTE_ITEM3} component={Item} />
      <Route exact path={RouteMap.ROUTE_ITEM4} component={Item} />
      <Route exact path={RouteMap.ROUTE_ITEM5} component={Item} />
    </Switch>
  );
};

export default Routes;
