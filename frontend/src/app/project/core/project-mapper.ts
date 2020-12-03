import { Mapper } from 'src/app/core/mapper/mapper';
import { ProjectEntity } from './project-entity';
import { ProjectModel } from './project-model';

export class ProjectMapper extends Mapper<ProjectEntity, ProjectModel> {

    mapFrom(param: ProjectEntity): ProjectModel {
        return {
            id: param.id,
            ong: param.ong,
            title: param.title,
            description: param.description,
            deadline: param.deadline,
            project_skills: param.project_skills
        };
    }

    mapTo(param: ProjectModel): ProjectEntity {
        return {
            id: param.id,
            ong: param.ong,
            title: param.title,
            description: param.description,
            deadline: param.deadline,
            project_skills: param.project_skills
        };
    }
}
 