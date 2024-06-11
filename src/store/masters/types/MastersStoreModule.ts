import {StoreModule} from "@/models/store";
import type {State} from "@/models/masters";
import {ActionType} from "./enums/action-type";
import {GetterType} from "./enums/getter-type";
import {MutationType} from "./enums/mutation-type";

export const MastersStoreModule =
    new StoreModule<State, ActionType, MutationType, GetterType>('masters');

export { ActionType, MutationType, GetterType };
