import { StateMachine } from "./StateMachine";

const stateMachine = new StateMachine();

let last = Date.now();
while (true) {
    const timestamp = Date.now();
    const delta = timestamp - last;
    stateMachine.update(delta);
    last = timestamp;
}