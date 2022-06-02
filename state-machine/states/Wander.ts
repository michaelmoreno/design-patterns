import { State } from "./State";
import { StateMachine } from "../StateMachine";

export class Wander extends State {
    duration: number;
    timer: number;

    constructor(duration: number) {
        super();
        this.duration = duration;
        this.timer = 0;
    }
    enter(manager: StateMachine): void {
        console.log("Entering Wander state");
        this.timer = 0;
    }
    execute(manager: StateMachine, delta: number): void {
        // console.log("Executing Wander state");
        this.timer += delta;
        if (this.timer >= this.duration) {
            manager.changeState(manager.idle);
        }
    }
    exit(manager: StateMachine): void {
        console.log("Exiting Wander state");
    }
}