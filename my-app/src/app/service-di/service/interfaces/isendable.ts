export interface  ISendable {
     sendMessage(): string;
}
abstract class AbstractSender implements ISendable {
    abstract sendMessage(): string;
    send(): string {
        console.log('send message');
        return this.sendMessage();
    }
}
class MySender extends AbstractSender {
    sendMessage(): string {
        console.log('my message');
        return 'my message';
    }
}
