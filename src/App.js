import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Four04 from './pages/404';
import ApWelcome from './pages/ap/welcome';
import ApSession from './pages/ap/session';
import UigovHome from './pages/uigov/index';

export default () => (
  <ThemeProvider theme={theme}>
    <div className="app">
      <Switch>
        <Route path="/ap" exact component={ApWelcome} />
        <Route path="/ap/session/:sessionId" exact component={ApSession} />
        <Route path="/uigov" exact component={UigovHome} />
        <Route component={Four04} />
      </Switch>
    </div>
  </ThemeProvider>
);
