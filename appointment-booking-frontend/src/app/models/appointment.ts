export class Appointment{
    id: string;
    time: BigInt;
    companyId: string;
    userId: string;

    constructor(){
        this.id = null;
        this.time = null;
        this.companyId = null;
        this.userId = null;
    }
}