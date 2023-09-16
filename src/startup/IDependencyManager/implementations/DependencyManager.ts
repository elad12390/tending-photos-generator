import {container} from "tsyringe";
import {IDependencyManager} from "../IDependencyManager.ts";
import {ITrendingWordsService} from "../../../services/TrendingWordsService/ITrendingWordsService.ts";
import {
    GoogleTrendsWordsService
} from "../../../services/TrendingWordsService/implementations/GoogleTrendsWordsService.ts";
import {IApplication} from "../../Application/IApplication.ts";
import {Application} from "../../Application/implementations/Application.ts";

export class DependencyManager implements IDependencyManager{
    defineDependencies() {
        container.register<IApplication>(IApplication.name, {useClass: Application});
        DependencyManager.defineControllers();
        DependencyManager.defineServices();
        DependencyManager.defineRepositories();
    }

    public static defineControllers() {

    }

    public static defineServices() {
        container.register<ITrendingWordsService>(ITrendingWordsService.name, { useClass: GoogleTrendsWordsService });
    }

    public static defineRepositories() {

    }
}