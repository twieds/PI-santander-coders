import { LocationModel } from 'src/app/core/location/location-model';

export interface DevModel{
    id?: number;
    name?: string;
    bio?: string;
    location?: LocationModel;
    // dev_practice?: any[];
    // dev_skills?: any[];
}