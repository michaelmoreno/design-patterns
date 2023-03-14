class SMSNotifer extends Notifier {
    numbers: string[];

    constructor(numbers: string[]) {
        super([]);
        this.numbers = numbers;
    }
    
    send(message: string) {
        console.log(`SMS: ${message}`);
    }
}