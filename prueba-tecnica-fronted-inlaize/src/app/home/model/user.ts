export class User {
    public readonly id : Number;
    public name: string;
    public email: string;
    public password: string;
    public nick_name: string;

    public constructor(entity: any){
        this.id = entity.id;
        this.name = entity.name,
        this.email = entity.email
        this.password = entity.password;
        this.nick_name = entity.nick_name
    }
}
