import { LocationEntity } from 'src/app/core/location/location-entity';

export interface NgoEntity {
    id?: number;
    name?: string;
    bio?: string;
    how_can_we_help?: string;
    location?: LocationEntity;
    ongType?: number;
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
    contact_email?: string;
}
