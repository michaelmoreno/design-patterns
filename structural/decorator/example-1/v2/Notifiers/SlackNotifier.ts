class SlackNotifier extends Notifier {
    channels: string[];

    constructor(channels: string[]) {
        super([]);
        this.channels = channels;
    }
    
    send(message: string) {
        console.log(`Slack: ${message}`);
    }
}