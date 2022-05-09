import { User } from "./user";

export class Appointment{
    id: string;
    dateTime: number;
    company: User;
    user: User;
    note: string;

    constructor(){
        this.id = null;
        this.dateTime = null;
        this.company = new User();
        this.user = new User();
        this.note = null;
    }
}