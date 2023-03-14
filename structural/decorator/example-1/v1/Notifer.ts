class Notifier {
    emails: string[]

    constructor(emails: string[]) {
        this.emails = emails;
    }


    send(message: string): void {
        for (const email of this.emails) {
            console.log(`Sending message "${message}" to ${email}`);
        }
    }
}