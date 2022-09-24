import { Route, Switch} from "react-router-dom";
import {Home} from "../ Home"
import { Page1Routes } from "./Page1Router";
import { Page2Routes } from "./Page2Router";


export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/page1" render={(props) => (
                
                <Switch>                
                    {Page1Routes.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${props.match.url}${route.path}`}>
                            {route.Children}
                        </Route>
                    ))}
                </Switch>
            )}>
            </Route>

            <Route path="/page2" render={(props) => (
                
                <Switch>                
                    {Page2Routes.map((route) => (
                        <Route key={route.path} exact={route.exact} path={`${props.match.url}${route.path}`}>
                            {route.Children}
                        </Route>
                    ))}
                </Switch>
            )}>
            </Route>


        </Switch>
    );
};