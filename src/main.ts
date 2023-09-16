import type {IDependencyManager} from "./startup/IDependencyManager/IDependencyManager.ts";
import {IApplication} from "./startup/Application/IApplication.ts";
import {FastifyInstance} from "fastify";
import {registeredControllers} from "./decorators/Controller.decorator.ts";


function main() {
    require('reflect-metadata');
    const {container} = require('tsyringe');
    const {DependencyManager} = require("./startup/IDependencyManager/implementations/DependencyManager.ts");

    const manager: IDependencyManager = new DependencyManager();
    manager.defineDependencies();

    const application: IApplication<FastifyInstance> = container.resolve(IApplication.name);
    application.onInit();

    application.defineRoutes((app) => {
        registeredControllers.forEach(c => {

        })
    })

}

main();