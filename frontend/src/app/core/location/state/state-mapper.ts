import { Mapper } from '../../mapper/mapper';
import { StateEntity } from './state-entity';
import { StateModel } from './state-model';

export class StateMapper extends Mapper<StateEntity, StateModel> {

    mapFrom(param: StateEntity): StateModel {

        return {
            id: param.id,
            state_name: param.state_name
        };
    }

    mapTo(param: StateModel): StateEntity {
        return {
            id: param.id,
            state_name: param.state_name
        };
    }
}