import type { Store, CommitOptions, DispatchOptions, Computed } from "vuex";
import  { mapGetters } from "vuex";
export class StoreModule<StateType, ActionType, MutationType, GetterType> {

    constructor(
        public readonly Namespace: string,
    ) { }

    public commit(
        store: Store<StateType>,
        mutationType: MutationType,
        payload?: any,
        options?: CommitOptions | undefined
    ): void {
        store.commit(
            `${this.Namespace}/${mutationType}`,
            payload,
            options
        );
    }

    public async dispatch(
        store: Store<StateType>,
        actionType: ActionType,
        payload?: any,
        options?: DispatchOptions | undefined
    ) {
        return store.dispatch(
            `${this.Namespace}/${actionType}`,
            payload,
            options
        );
    }

    public get<T>(store: Store<StateType>, getterType: GetterType): T {
        return store.getters[`${this.Namespace}/${getterType}`];
    }

    public mapGetters<Map extends Record<string, string>>(map: Map): { [K in keyof Map]: Computed } {
        return mapGetters(this.Namespace, map);
    }
}
