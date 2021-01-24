import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'beer-list-item',
  styleUrl: 'beer-list-item.css',
})
export class BeerListItem {
    
    @Prop() name: string;
    @Prop() description: string;

    render() {
        return <div class="beer">
            <h2> {this.name} </h2>
            <p> {this.description} </p>
        </div>;
    }
}