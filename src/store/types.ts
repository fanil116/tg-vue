// src/store/types.ts

// Импортируем типы состояний из модулей
import type { MasterState } from './masters/state';

export interface RootState {
  masters: MasterState;

}