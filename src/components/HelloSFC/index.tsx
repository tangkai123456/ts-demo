import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from 'src/actions';
import { getExclamationMarks } from 'src/helpers';
import { IStoreState } from 'src/types';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onDecrement, onIncrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('you could be a little more enthusiastic');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

function mapStateToProps({ languageName, enthusiasmLevel }: IStoreState): IProps {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
