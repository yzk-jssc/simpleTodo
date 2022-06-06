import { ChangeEvent } from "react";

export interface goalItem{
    id:number;
    task: string;
    complete:boolean
}

export interface TodoState {
    goals: goalItem[];
    handleToggle:(e:ChangeEvent<HTMLInputElement>,id:number)=>void;
    removeTask: (id:number)=>void
    complete:boolean;

}

export interface TodoCheckboxState{
}