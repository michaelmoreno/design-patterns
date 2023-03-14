class FBNotifier extends Notifier {
    accounts: string[];

    constructor(accounts: string[]) {
        super([]);
        this.accounts = accounts;
    }

    send(message: string): void {
        console.log("FB: " + message);
    }
}