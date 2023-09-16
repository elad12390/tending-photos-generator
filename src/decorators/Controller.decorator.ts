import 'reflect-metadata';
import {injectable} from "tsyringe";

export interface IRoutedController {
    route: string;
}

export interface IMultiRoutedController {
    routes: string[]
}

export type IControllerConfigurations = IRoutedController | IMultiRoutedController;

export const registeredControllers: Function[] = [];

export function Controller(config: IControllerConfigurations) {
    return function (target: Function) {
        registeredControllers.push(target);
        injectable()(target);
        if ('route' in config) {
            Reflect.defineMetadata('route', config.route, target);
        } else if ('routes' in config) {
            Reflect.defineMetadata('routes', config.routes, target);
        }

        target.
    };
}