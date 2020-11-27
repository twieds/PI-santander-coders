import { Mapper } from 'src/app/core/mapper/mapper';
import { DevEntity } from './dev-entity';
import { DevModel } from './dev-model';

export class DevMapper extends Mapper<DevEntity, DevModel> {

    mapFrom(param: DevEntity): DevModel {
        return {
            id: param.id,
            name: param.name,
            bio: param.bio,
            location: param.location
            // dev_practice: param.dev_practice,
            // dev_skills: param.dev_skills
        };
    }

    mapTo(param: DevModel): DevEntity {
        return {
            id: param.id,
            name: param.name,
            bio: param.bio,
            location: param.location
            // dev_practice: param.dev_practice,
            // dev_skills: param.dev_skills
        };
    }
}
