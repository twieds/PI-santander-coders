import { DevEntity } from '../entity/dev-entity';
import { DevModel } from '../model/dev-model';
import { Mapper } from './../../../app/core/mapper';

export class DevMapper extends Mapper<DevEntity, DevModel> {

    mapFrom(entity: DevEntity): DevModel {
        return {
            id: entity.id,
            avatar: entity.avatar,
            bio: entity.bio,
            city: entity.city,
            district: entity.district,
            state: entity.state,
            tags: entity.tags,
            email: entity.email,
            password: entity.password
        };
    }
    
    mapTo(param: DevModel): DevEntity {
        return {
            id: param.id,
            avatar: param.avatar,
            bio: param.bio,
            city: param.city,
            district: param.district,
            state: param.state,
            tags: param.tags,
            email: param.email,
            password: param.password
        };
    }
}