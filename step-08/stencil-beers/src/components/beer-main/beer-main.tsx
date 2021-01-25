import { Component, Prop, State, h, Host } from '@stencil/core';
import { createRouter, Route, match, NotFound } from 'stencil-router-v2';

const Router = createRouter();


@Component({
    tag: 'beer-main',
    styleUrl: 'beer-main.css',
  })
export class BeerMain {
    render() {
        return <Host>
                <Router.Switch>

                <Route path="/">
                    <beer-list></beer-list>
                </Route>

                <Route 
                    path={match('/beer/:page')}
                    render={(({page}) =>  <beer-details beerId={page} />)}>
                </Route>

                <Route path={NotFound}>
                    <beer-list></beer-list>
                </Route>

                </Router.Switch>
            </Host>;
    }
}
