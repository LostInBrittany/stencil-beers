import { Component, State, h } from '@stencil/core';
import { beerList, Beer } from '../../utils/beers';

@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.css',
})
export class BeerList {

    @State() beers: Array<Beer>;

    componentWillLoad() {
        this.beers = beerList;
    }


    render() {
        return <ul class="container beers">
            {this.beers.map((beer: Beer) => {
                return <li>
                    <beer-list-item 
                        name={beer.name} 
                        description={beer.description}
                        alcohol={beer.alcohol}></beer-list-item>
                </li>;
            })}
        </ul>
    }
}

