import { Component } from "@angular/core";
import {wishList} from "../models/wishList"
import { CommonModule } from "@angular/common";

@Component({
    selector: 'to-do-box',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './to-do-box.component.html',
    styleUrl: './to-do-box.component.css'
})

export class toDoBox{
    items = [
        new wishList('Learn Angular'),
        new wishList('learn Laravel', true),
        new wishList('graduate', true)
      ]
}