export class Mail{
    to: string;
    userName: string;
    companyName: string;
    timestamp: BigInt;
    timeEdited: BigInt;

    constructor(){
        this.to = null;
        this.userName = null;
        this.companyName = null;
        this.timestamp = null;
        this.timeEdited = null;
    }
}