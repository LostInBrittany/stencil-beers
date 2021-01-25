import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'beer-list-item',
  styleUrl: 'beer-list-item.css',
})
export class BeerListItem {
    
    @Prop() name: string;
    @Prop() description: string;
    @Prop() alcohol: number;

    render() {
        return <div class="container beer">
            <div class="alcohol">{this.alcohol} %</div>
            <h2 class="name"> {this.name} </h2>
            <div class="description"> {this.description}</div>
        </div>;
    }
}