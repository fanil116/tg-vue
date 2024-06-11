import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";
export const namespaced = true;
/**
 * Export the module state.
 */
export default {
    namespaced,
    state,
    actions,
    mutations,
    getters
};
