import type {MasterState} from "./state";
import {GetterType} from "./types/enums/getter-type";

export type Getters = {[key in GetterType]: any};

export default {
    [GetterType.GET_MASTERS](state: MasterState): any {
        return state.masters;
    },

};
