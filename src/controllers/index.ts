import {CustomerController} from './customer';
import {PingController} from './ping';

export const CONTROLLERS = [
    new CustomerController(),
    new PingController()
];
