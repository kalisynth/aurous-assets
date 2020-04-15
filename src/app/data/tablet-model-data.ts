import {Deserialisable} from '../service/deserialisable';

export class TabletModelData implements Deserialisable{
    public id: string;
    public name: string;
    public initSetup: Date;
    public lastSetup: Date;
    public sentToClient: Boolean;
    public dateSent: Date;
    public phone: number;
    public imei: number;
    public sim: number;
    public status: string;
    public serialnum: string;
    public modelnum: string;
    public clientProvider: string;
    public clientProgram: string;
    public clientName: string;
    public skypeId: string;
    public skypeUrl: string;
    public pinCode: number;

    deserialize(input: any): this {
        return Object.assign(this, input);
      }
}
