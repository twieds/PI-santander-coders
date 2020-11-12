import { Mapper } from 'src/app/core/mapper/mapper';
import { ProjectEntity } from './project-entity';
import { ProjectModel } from './project-model';

export class ProjectMapper extends Mapper<ProjectEntity, ProjectModel> {

    mapFrom(param: ProjectEntity): ProjectModel {
        return {
            id: param.id,
            id_ngo: param.id_ngo,
            title: param.title,
            description: param.description,
            deadline: param.deadline,
            category: param.category
        };
    }

    mapTo(param: ProjectModel): ProjectEntity {
        return {
            id: param.id,
            id_ngo: param.id_ngo,
            title: param.title,
            description: param.description,
            deadline: param.deadline,
            category: param.category
        };
    }
}
 