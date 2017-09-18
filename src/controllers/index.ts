import {CustomerController} from './customer';
import {BillController} from './bill';

export const CONTROLLERS = [
    new CustomerController(),
    new BillController()
];
