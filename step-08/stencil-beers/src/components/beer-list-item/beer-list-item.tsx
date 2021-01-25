import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'beer-list-item',
  styleUrl: 'beer-list-item.css',
})
export class BeerListItem {
    
    @Prop() id: string;
    @Prop() name: string;
    @Prop() description: string;
    @Prop() alcohol: number;
    @Prop() img: string;

    render() {
        return <div class="container clearfix beer">    
            <a href={"/beer/"+this.id}>        
                <img class="float-end img" src={"./data/beers/" + this.img}></img>
                <h2 class="name">{this.name}</h2>
                <p class="description">{this.description}</p>
                <p class="float-end alcohol">Alcohol content: {this.alcohol}%</p>
            </a>
        </div>;
    }
}