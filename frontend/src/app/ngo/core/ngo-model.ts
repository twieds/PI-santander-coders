import { LocationModel } from 'src/app/core/location/location-model';

export interface NgoModel{
    id?: number;
    name?: string;
    bio?: string;
    how_can_we_help?: string;
    location?: LocationModel;
    ongTypeId?: number;
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
    contact_email?: string;
}