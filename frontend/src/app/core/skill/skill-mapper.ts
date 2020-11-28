import { Mapper } from '../mapper/mapper';
import { SkillEntity } from './skill-entity';
import { SkillModel } from './skill-model';

export class SkillMapper extends Mapper<SkillEntity, SkillModel> {

    mapFrom(param: SkillEntity): SkillModel {

        return {
            id: param.id,
            description: param.description
        };
    }

    mapTo(param: SkillModel): SkillEntity {
        return {
            id: param.id,
            description: param.description
        };
    }
}