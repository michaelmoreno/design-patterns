import { State } from "./states/State";
import { Idle } from "./states/Idle";
import { Wander } from "./states/Wander";

export class StateMachine {
    state: State;
    idle: Idle = new Idle(1000);
    wander: Wander = new Wander(1000);
    
    constructor() {
        this.state = this.idle;
    }
    update(delta: number): void {
        this.state.execute(this, delta);
    }
    changeState(newState: State): void {
        this.state.exit(this);
        this.state = newState;
        this.state.enter(this);
    }
}