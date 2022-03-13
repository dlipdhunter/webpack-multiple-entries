import { sayHello } from '../shared/shared';

export class AreaOne {
    static sayHelloFromArea1 = (msg: string): void => {
        sayHello(msg);
    }
}