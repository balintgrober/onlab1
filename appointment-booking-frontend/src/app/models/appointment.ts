import { User } from "./user";

export class Appointment{
    id: string;
    time: number;
    company: User;
    user: User;

    constructor(){
        this.id = null;
        this.time = null;
        this.company = new User();
        this.user = new User();
    }
}