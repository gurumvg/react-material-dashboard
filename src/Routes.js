import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  Services as ServicesView,
  Partners as PartnersView,
  NotFound as NotFoundView
} from './views';

import { ServiceAdd as ServiceAddView } from './views/Services/components'
import { PartnerAdd as PartnerAddView } from './views/Partners/components'

const Routes = (props) => {
  const {user} = props;
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        user={user}
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        user={user}
        component={ServicesView}
        exact
        layout={MainLayout}
        path="/services"
      />
      <RouteWithLayout
        user={user}
        component={ServiceAddView}
        exact
        layout={MainLayout}
        path="/addservice"
      />
      <RouteWithLayout
        user={user}
        component={PartnersView}
        exact
        layout={MainLayout}
        path="/partners"
      />
      <RouteWithLayout
        user={user}
        component={PartnerAddView}
        exact
        layout={MainLayout}
        path="/addpartner"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
