import React from 'react'
import { Switch, Route } from "react-router-dom"

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
    }
]

const Routes = () => {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}/>
            ))}
        </Switch>
    )
}

export default Routes