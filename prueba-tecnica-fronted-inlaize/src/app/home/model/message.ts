export class Message {
    public readonly id: number;
    public description: string;
    public date_make: Date;
    public person: User;
    public tittle: string;

    public constructor(entity){
        this.id = entity.id;
        this.tittle = entity.tittle,
        this.description = entity.description
        this.date_make = entity.date_make;
        this.person = entity.person
    }
}
