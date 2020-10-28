import { Mapper } from 'src/app/core/mapper/mapper';
import { DevEntity } from './dev-entity';
import { DevModel } from './dev-model';

export class DevMapper extends Mapper<DevEntity, DevModel> {

    mapFrom(param: DevEntity): DevModel {
        return {
            id: param.id,
            name: param.name,
            avatar: param.avatar,
            bio: param.bio,
            tags: param.tags,
            location: param.location,
            userAuth: param.userAuth
        };
    }

    mapTo(param: DevModel): DevEntity {
        return {
            id: param.id,
            name: param.name,
            avatar: param.avatar,
            bio: param.bio,
            tags: param.tags,
            location: param.location,
            userAuth: param.userAuth
        };
    }
}
