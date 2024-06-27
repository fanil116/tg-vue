import {MutationType} from "./types/enums/mutation-type";
import type {MasterState} from "./state";
const mutations = {
    [MutationType.SET_USERS](
        state: MasterState,
        payload: any
    ) {

        state.users = payload;
    },
};
export default mutations;