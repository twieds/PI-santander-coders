import { LocationEntity } from 'src/app/core/location/location-entity';
import { SkillEntity } from 'src/app/core/skill/skill-entity';

export interface DevEntity {
    id?: number;
    name?: string;
    bio?: string;
    whatsapp?: string;
    linkedin?: string;
    github?: string;
    contact_email?: string;
    location?: LocationEntity;
    dev_practice?: SkillEntity[];
    dev_skills?: SkillEntity[];
}