import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'
import PostDetail from '../pages/PostDetail'
import Update from '../pages/Update'
import Profile from '../pages/Profile'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot" component={Update} />

      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/detail/:post_id" component={PostDetail} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  )
}

export default Routes
