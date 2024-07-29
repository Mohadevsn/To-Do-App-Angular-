import { Component, input } from "@angular/core";
import {wishList} from "../models/wishList"
import { CommonModule } from "@angular/common";
import test from "node:test";


@Component({
    selector: 'box',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './to-do-box.component.html',
    styleUrl: './to-do-box.component.css'
})

export class toDoBox{
    toDos: Array <{done: boolean, title: string}> = [];


    onSubmit(){
        return "good";
    }

    addItem( title: string){
        this.toDos.push({done: false, title: title});
    }

    toggle(index: any){
        if(this.toDos[index] ){
            this.toDos[index].done = false;
        }
        this.toDos[index].done = true;

    }

    // completeTask(){
    //     this.isComplete = true;
    // }
}