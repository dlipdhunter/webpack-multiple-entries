import { sayHello } from './shared/shared';

class Greeter {
    static greet = (msg: string): void => {
        sayHello(msg);
    }
}

export { Greeter }