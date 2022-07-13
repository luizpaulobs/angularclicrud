export class GeneralModel {
    constructor(init?: Partial<GeneralModel>) {
        Object.assign(this, init);
    }

    id?: number | null = null;
    name: string = "";
    origem: string = "";
    valor: number | null = null;
    date: string = (new Date()).toLocaleDateString().split('/').reverse().join('-');
}