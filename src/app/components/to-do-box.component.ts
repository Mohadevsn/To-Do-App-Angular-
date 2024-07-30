import { Component, input } from "@angular/core";
import {wishList} from "../models/wishList"
import { CommonModule } from "@angular/common";
import test from "node:test";
import { setTimeout } from "node:timers/promises";


@Component({
    selector: 'box',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './to-do-box.component.html',
    styleUrl: './to-do-box.component.css'
})

export class toDoBox{
    toDos: Array <{done: boolean, title: string}> = [];
    numberTask: number = 0 ;
    numberTaskDone: number = 0;

    onSubmit(){
        return "good";
    }

    addItem( title: string){
        this.toDos.push({done: false, title: title});
        this.numberTask++;
    }

    clearTask(this: toDoBox): void{
        this.toDos = [] ;
        console.log("clearing up")
        
    }

    toggle(index: any){
        if(this.toDos[index].done ){
            this.toDos[index].done = false;
            console.log('false');
            
        }
        else if(!this.toDos[index].done ){
            this.toDos[index].done = true;
            console.log('true');
            this.numberTaskDone++;
        
        }

        if((this.numberTask !== 0 ) &&(this.numberTask == this.numberTaskDone)){
            console.log('start to clear .....');
            window.setTimeout(this.clearTask, 1000);
            // setTimeout( this.clearTask, 3000);
            console.log('clearing completed');
            
        }

    }

   

    

    // completeTask(){
    //     this.isComplete = true;
    // }
}