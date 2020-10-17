import { DevEntity } from '../entity/dev-entity';
import { DevModel } from '../model/dev-model';
import { Mapper } from './../../../app/core/mapper';

export class DevMapper extends Mapper<DevEntity, DevModel> {

    mapFrom(entity: DevEntity): DevModel {
        return {
            id: entity.id,
            name: entity.name,
            avatar: entity.avatar,
            bio: entity.bio,
            tags: entity.tags,
        };
    }
    
    mapTo(param: DevModel): DevEntity {
        return {
            id: param.id,
            name: param.name,
            avatar: param.avatar,
            bio: param.bio,
            tags: param.tags
        };
    }
}