class Application {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }
    doSomething(): void {
        console.log("Doing something");
        this.notifier.send("Something was done");
    }
}