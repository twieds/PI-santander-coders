import { EmailValidator } from '@angular/forms';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { LocationEntity } from 'src/app/core/location/location-entity';

export interface NgoEntity {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    bio?: string;
    how_can_we_help?: string;
    location?: LocationEntity;
    ongTypeId?: number;
    whatsapp?: string;
    facebook?: string;
    instagram?: string;
    contact_email?: string;
}
