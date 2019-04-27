import React  from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Teste from './pages/teste';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=> <h1>Hello world!</h1>} />
            <Route path="/teste" component={Teste} />
        </Switch>
        
    </BrowserRouter>
)

export default Routes;