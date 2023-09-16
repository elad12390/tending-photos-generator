import "reflect-metadata";

import Fastify, {FastifyInstance} from 'fastify';
import {IApplication} from "../IApplication.ts";

export class Application implements IApplication<FastifyInstance> {
    private _fastify: FastifyInstance;

    public onInit() {
        this._fastify = this.createFastifyApp();
    }

    public onDestroy() {
        console.log(`[${Application.name}]: Destroyed`);
    }

    public onError(error: Error) {
        console.log(`[${Application.name}]: Has encountered an error: ${error}`);
    }

    public defineRoutes(callback: (serverApp: FastifyInstance) => void) {
        callback(this._fastify);
    }

    private createFastifyApp() {
        const fastify = Fastify({
            logger: true
        })

        return fastify;
    }

}