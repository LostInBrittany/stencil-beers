import { Component, Prop, State, h } from '@stencil/core';
import { beerList, Beer } from '../../utils/beers';

@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.css',
})
export class BeerList {

    @State() beers: Array<Beer>;
    @State() pattern: string;

    componentWillLoad() {
        this.beers = beerList;
    }

    doFilter(evt: Event) {
        this.pattern = (evt.target as HTMLInputElement).value;
    } 

    _currentBeers(): number {
        return this.beers.filter((beer: Beer) => {
            return beer.name 
                && beer.name.match(new RegExp(this.pattern, 'i'));
          }).length;
    }

    render() {
        return <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label 
                            htmlFor="search">
                            Search
                        </label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="search"  
                            onInput={(evt) => this.doFilter(evt)}  
                            placeholder="Enter search"></input>
                    </div>
                    <div>Current search: {this.pattern}</div>
                </div>
                <div class="col-md-9">
                    <ul class="container beers">
                        {this.beers
                        .filter( (beer: Beer) => {
                            return beer.name 
                                && beer.name.match(new RegExp(this.pattern, 'i'));
                          })
                        .map((beer: Beer) => {
                            return <li>
                                <beer-list-item 
                                    name={beer.name} 
                                    description={beer.description}
                                    alcohol={beer.alcohol}></beer-list-item>
                            </li>;
                        })}
                    </ul>
                    <div class="container">
                        <div>Number of beers in list: {this._currentBeers()}</div>
                    </div>
                </div>  
          </div>        
        </div>;
    }
}

