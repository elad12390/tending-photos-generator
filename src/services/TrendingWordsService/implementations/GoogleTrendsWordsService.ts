import {injectable} from "tsyringe";
import {ITrendingWordsService} from "../ITrendingWordsService.ts";

@injectable()
export class GoogleTrendsWordsService extends ITrendingWordsService {
    getTrendingWords(): string[] {
        return [];
    }

}