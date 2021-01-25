import { Component, Prop, State, h } from '@stencil/core';
import { beerList, Beer, sortingCriteria, sortingCriterion } from '../../utils/beers';

@Component({
  tag: 'beer-list',
  styleUrl: 'beer-list.css',
})
export class BeerList {

    @State() beers: Array<Beer>;
    @State() pattern: string;
    @State() criterion: sortingCriterion;
    @State() descendingSort: boolean;

    componentWillLoad() {
        this.beers = beerList;
        this.criterion = sortingCriteria[0];
        this.descendingSort = false;
        this._getData();
    }

    doFilter(evt: Event) {
        this.pattern = (evt.target as HTMLInputElement).value;
    } 

    async _getData() {
        try {
            const response = await fetch('/data/beers/beers.json');
            this.beers = await response.json();
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    }

    _currentBeers(): number {
        return this.beers.filter((beer: Beer) => {
            return beer.name 
                && beer.name.match(new RegExp(this.pattern, 'i'));
          }).length;
    }

    _beerSorter(a:Beer, b:Beer) {  
        var invert = 1;
        if (this.descendingSort) invert = -1;
        if ( a[this.criterion.name] === b[this.criterion.name] ) return 0;
        if ( a[this.criterion.name] < b[this.criterion.name] ) return -1*invert;
        if ( a[this.criterion.name] > b[this.criterion.name] ) return 1*invert;      
    }

    _sortingChanged(evt: Event) {
        this.criterion = { 
            name: (evt.target as HTMLSelectElement).selectedOptions[0].value,
            label: (evt.target as HTMLSelectElement).selectedOptions[0].text,
        }
    }

    _descendingChange(evt: Event) {
        this.descendingSort = (evt.target as HTMLInputElement).checked;
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
                    <label 
                        htmlFor="sort">
                    Sort by
                    </label>
                    <select 
                        id="sort" 
                        class="form-select"
                        onChange={(evt) => this._sortingChanged(evt)}>
                        { sortingCriteria.map((item) => <option value={item.name}> {item.label}</option>) }
                    </select>
                    <label htmlFor="descending">Descending sort</label>
                    <input 
                        id="descending" 
                        type="checkbox" 
                        class="form-check-input"
                        onChange={(evt) => this._descendingChange(evt)}></input>
                </div>
                <div class="col-md-9">
                    <ul class="container beers">
                        {this.beers
                        .filter( (beer: Beer) => {
                            return beer.name 
                                && beer.name.match(new RegExp(this.pattern, 'i'));
                          })
                        .sort((a,b) => this._beerSorter(a,b))
                        .map((beer: Beer) => {
                            return <li>
                                <beer-list-item 
                                    id={beer.id}
                                    name={beer.name} 
                                    description={beer.description}
                                    alcohol={beer.alcohol}
                                    img={beer.img}></beer-list-item>
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

