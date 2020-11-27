import { StateModel } from '../state/state-model';

export interface CityModel{
    id?: number;
    city_name?: string;
    state?: StateModel;
}