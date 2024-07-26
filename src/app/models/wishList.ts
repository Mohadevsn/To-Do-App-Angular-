export class wishList{
    constructor(public text : string, public isComplete: boolean = false){

    }

    completeTask(){
        this.isComplete = true;
    }

}