import { StateEntity } from "../state/state-entity";

export interface CityEntity {
    id?: number;
    city_name?: string;
    state?: StateEntity;
}