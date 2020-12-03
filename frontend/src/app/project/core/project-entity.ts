import { SkillEntity } from 'src/app/core/skill/skill-entity';
import { NgoEntity } from 'src/app/ngo/core/ngo-entity';

export interface ProjectEntity {
    id?: number;
    ong?: NgoEntity;
    title?: string;
    description?: string;
    deadline?: Date;
    project_skills?: SkillEntity[];
} 