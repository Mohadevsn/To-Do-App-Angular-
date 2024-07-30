import { Component } from "@angular/core";
import {wishList} from "../models/wishList"
import { CommonModule } from "@angular/common";
import test from "node:test";
import { setTimeout } from "node:timers/promises";


@Component({
    selector: 'box',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './box.component.html',
    styleUrl: './box.component.css'
})

export class Box{
    /* The line `toDos: Array <{done: boolean, title: string}> = [];` is declaring a property named
    `toDos` in the `toDoBox` class. This property is an array that holds objects with two
    properties: `done` of type boolean and `title` of type string. Each object in the array
    represents a task in a to-do list, where `done` indicates whether the task is completed or not,
    and `title` is the title of the task. Initially, the `toDos` array is initialized as an empty
    array `[]`. */
    toDos: Array <{done: boolean, title: string}> = [];
    numberTask: number = 0 ;
    numberTaskDone: number = 0;

    onSubmit(){
        return "good";
    }

    /**
     * The `addItem` function in TypeScript adds a new task with a given title to a list of to-dos and
     * increments the number of tasks.
     * @param {string} title - The `title` parameter in the `addItem` function represents the title of
     * the task that you want to add to the list of to-dos. When you call the `addItem` function and
     * pass a string as the `title` argument, a new task object with the provided title will be added
     */
    addItem( title: string){
        this.toDos.push({done: false, title: title});
        this.numberTask++;
    }

    clearTask(this: Box): void{
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

        /* The condition `if((this.numberTask !== 0 ) &&(this.numberTask == this.numberTaskDone))` in
        the `toggle` method of the `toDoBox` class is checking if the number of total tasks
        (`numberTask`) is not zero and if the number of tasks that are marked as done
        (`numberTaskDone`) is equal to the total number of tasks. */
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