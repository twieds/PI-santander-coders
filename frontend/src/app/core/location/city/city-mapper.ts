import { Mapper } from '../../mapper/mapper';
import { CityEntity } from './city-entity';
import { CityModel } from './city-model';

export class CityMapper extends Mapper<CityEntity, CityModel> {

    mapFrom(param: CityEntity): CityModel {

        return {
            id: param.id,
            city_name: param.city_name,
            state: param.state
        };
    }

    mapTo(param: CityModel): CityEntity {
        return {
            id: param.id,
            city_name: param.city_name,
            state: param.state
        };
    }
}