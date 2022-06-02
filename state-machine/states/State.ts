import { StateMachine } from "../StateMachine";

export abstract class State {
    abstract enter(manager: StateMachine): void;
    abstract execute(manager: StateMachine, delta: number): void;
    abstract exit(manager: StateMachine): void;
}