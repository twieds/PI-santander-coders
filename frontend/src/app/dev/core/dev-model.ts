import { LocationModel } from 'src/app/core/location/location-model';
import { SkillModel } from 'src/app/core/skill/skill-model';

export interface DevModel{
    id?: number;
    password?: string;
    email?: string;
    name?: string;
    bio?: string;
    whatsapp?: string;
    linkedin?: string;
    github?: string;
    contact_email?: string;
    location?: LocationModel;
    dev_practice?: SkillModel[];
    dev_skills?: SkillModel[];
}