import { SkillModel } from 'src/app/core/skill/skill-model';
import { NgoModel } from 'src/app/ngo/core/ngo-model';

export interface ProjectModel {
    id?: number;
    ong?: NgoModel;
    title?: string;
    description?: string;
    deadline?: Date;
    project_skills?: SkillModel[];
} 