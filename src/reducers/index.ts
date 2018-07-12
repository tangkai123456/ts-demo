import { EnthusiasmAction } from 'src/actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM  } from 'src/constants';
import { IStoreState } from 'src/types';

export function enthusiasm(state: IStoreState, action: EnthusiasmAction): IStoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel - 1 };
    default:
      return state;
  }
}