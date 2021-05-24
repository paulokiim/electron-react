import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import NewProductPage from './pages/NewProduct';
// import DataTablePage from './pages/Table';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <MainPage />} />
        <Route path='/product' render={() => <NewProductPage />} />
        {/* <Route
					path='/register'
					render={() => (
						<MainLayout>
							<Register />
						</MainLayout>
					)}
				/>
				<Route
					path='/login'
					render={() => (
						<MainLayout>
							<Login />
						</MainLayout>
					)}
				/> */}
        {/* <Route
					path='/forgot-password'
					render={() => (
						<MainLayout>
							<ForgotPassword />
						</MainLayout>
					)}
				/> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
