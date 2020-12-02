import { Mapper } from 'src/app/core/mapper/mapper';
import { NgoEntity } from './ngo-entity';
import { NgoModel } from './ngo-model';

export class NgoMapper extends Mapper<NgoEntity, NgoModel> {

    mapFrom(param: NgoEntity): NgoModel {
        return {
            id: param.id,
            name: param.name,
            bio: param.bio,
            how_can_we_help: param.how_can_we_help,
            location: param.location,
            ongTypeId: param.ongTypeId,
            whatsapp: param.whatsapp,
            facebook: param.facebook,
            instagram: param.instagram,
            contact_email: param.contact_email
        };
    }

    mapTo(param: NgoModel): NgoEntity {
        return {
            id: param.id,
            name: param.name,
            bio: param.bio,
            how_can_we_help: param.how_can_we_help,
            location: param.location,
            ongTypeId: param.ongTypeId,
            whatsapp: param.whatsapp,
            facebook: param.facebook,
            instagram: param.instagram,
            contact_email: param.contact_email
        };
    }
}
