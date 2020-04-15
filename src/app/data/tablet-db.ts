import {Deserialisable} from '../service/deserialisable';
import {TabletModelData} from './tablet-model-data';

export class TabletDb implements Deserialisable{
    public id: string;
    public tablets: TabletModelData[];

    deserialize(input: any): this {
        // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
        Object.assign(this, input);
    
        // Iterate over all cars for our user and map them to a proper `Car` model
        this.tablets = input.map(tabletData => new TabletModelData().deserialize(tabletData));
    
        return this;
      }
}
