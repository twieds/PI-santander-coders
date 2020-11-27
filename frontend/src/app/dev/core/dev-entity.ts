import { LocationEntity } from 'src/app/core/location/location-entity';

export interface DevEntity {
    id?: number;
    name?: string;
    bio?: string;
    location?: LocationEntity;
    // dev_practice?: any[];
    // dev_skills?: any[];
}