import React from 'react'
import { Switch, Route } from "react-router-dom"
import AddUser from '../components/AddUser'
import UserContainer from '../containers/UserContainer'

  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2>Home</h2>
    },
    {
      path: "/user",
      main: () => <h2>User</h2>
    },
    {
      path: "/profile",
      main: () => <h2>Profile</h2>
    },
    {
      path: "/add-user",
      main: () => <AddUser/>
    },
    {
      path:"/users",
      main: () => <UserContainer/>
    }
]

const Routes = () => {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    exact
                    key={index}
                    path={route.path}
                    children={<route.main />}/>
            ))}
        </Switch>
    )
}

export default Routes