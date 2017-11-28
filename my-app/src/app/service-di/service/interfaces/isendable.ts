export interface  ISendable {
     sendMessage(): string;
}
abstract class MySender implements ISendable {
    abstract sendMessage(): string;
    send(): string {
        console.log('send message');
        return this.sendMessage();
    }
}
