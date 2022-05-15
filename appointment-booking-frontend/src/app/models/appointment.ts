import { User } from "./user";
import { Location } from "./location";

export class Appointment{
    id: string;
    dateTime: number;
    company: User;
    user: User;
    note: string;
    location: Location;

    constructor(){
        this.id = null;
        this.dateTime = null;
        this.company = new User();
        this.user = new User();
        this.note = null;
        this.location = new Location();
    }
}