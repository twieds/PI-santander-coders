

import { Mapper } from '../mapper/mapper';
import { NgoTypeEntity } from './ngotype-entity';
import { NgoTypeModel } from './ngotype-model';

export class NgoTypeMapper extends Mapper<NgoTypeEntity, NgoTypeModel> {

    mapFrom(param: NgoTypeEntity): NgoTypeModel {

        return {
            id: param.id,
            description: param.description
        };
    }

    mapTo(param: NgoTypeModel): NgoTypeEntity {
        return {
            id: param.id,
            description: param.description
        };
    }
}