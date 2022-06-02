import { State } from "./State";
import { StateMachine } from "../StateMachine";

export class Idle extends State {
    duration: number
    timer: number;

    constructor(duration: number) {
        super();
        this.duration = duration;
        this.timer = 0;
    }
    
    enter(manager: StateMachine): void {
        console.log("Entering Idle state");
        this.timer = 0
    }
    execute(manager: StateMachine, delta: number): void {
        // console.log("Executing Idle state");
        this.timer += delta;
        if (this.timer >= this.duration) {
            manager.changeState(manager.wander);
        }
    }
    exit(manager: StateMachine): void {
        console.log("Exiting Idle state");
    }
}