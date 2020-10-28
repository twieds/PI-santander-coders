import { Mapper } from 'src/app/core/mapper/mapper';
import { NgoEntity } from './ngo-entity';
import { NgoModel } from './ngo-model';

export class NgoMapper extends Mapper<NgoEntity, NgoModel> {

    mapFrom(param: NgoEntity): NgoModel {
        return {
            id: param.id,
            name: param.name,
            cnpj: param.cnpj,
            bio: param.bio,
            how_can_we_help: param.how_can_we_help,
            socials: param.socials,
            location: param.location
        };
    }

    mapTo(param: NgoModel): NgoEntity {
        return {
            id: param.id,
            name: param.name,
            cnpj: param.cnpj,
            bio: param.bio,
            how_can_we_help: param.how_can_we_help,
            socials: param.socials,
            location: param.location
        };
    }
}
