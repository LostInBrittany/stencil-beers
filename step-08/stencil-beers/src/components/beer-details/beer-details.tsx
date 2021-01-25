import { Component, Prop, State, h, Watch } from '@stencil/core';
import { Beer } from '../../utils/beers';

@Component({
  tag: 'beer-details',
  styleUrl: 'beer-details.css',
})
export class BeerDetails {

    @Prop() beerId: string;
    @State() beer: Beer;
    @State() currentImg: string;


    connectedCallback() {
        console.log('Connected Callback', this.beerId);
        this._getData();
    }

    @Watch('beerId')
    async _getData() {
        console.log('I got called');
        if (this.beerId === undefined) return;
        try {
            const response = await fetch(`/data/beers/details/${this.beerId}.json`);
            this.beer = await response.json();
            this.currentImg = this.beer.img;
        }
        catch (err) {
            console.log('fetch failed', err);
        }
    }

    render() {
        return <div id={this.beer?.id} class="detail clearfix">
        
            <a href="/">
                <img class="pull-right back" src="/data/img/back.png" />
            </a>
            <h1 class="name">{this.beer?.name}</h1>
        
            <img class="pull-right img" src={"/data/" + this.currentImg} />
        
            <p class="description">{this.beer?.description}</p>
    
            <ul class="beer-thumbs">
                <li>
                    <img 
                        src={"/data/" + this.beer?.img} 
                        onClick={() => this.currentImg = this.beer.img } />
                </li>
                <li>
                    <img src={"/data/" + this.beer?.label}
                        onClick={() => this.currentImg = this.beer.label } />
                </li>
            </ul>
            <ul class="specs">
                <li>
                    <dl>
                    <dt>Alcohol content</dt>
                    <dd>{this.beer?.alcohol} %</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                    <dt>Brewery</dt>
                    <dd>{this.beer?.brewery}</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                    <dt>Availability</dt>
                    <dd>{this.beer?.availability}</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                    <dt>Style</dt>
                    <dd>{this.beer?.style}</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                    <dt>Serving instructions</dt>
                    <dd>{this.beer?.serving}</dd>
                    </dl>
                </li>
            </ul>
        </div>;
    }
}
