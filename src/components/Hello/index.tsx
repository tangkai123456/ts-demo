import { observer } from "mobx-react";
import * as React from 'react';
import { getExclamationMarks } from 'src/helpers';
import Store from './Store';

import styles from './index.scss';

interface IProps {
  name: string;
}

@observer
export default class Hello extends React.Component<IProps, object> {
  private store = new Store()
  public render() {
    const { name } = this.props;
    const { enthusiasmLevel, increment, decrement } = this.store;
    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic');
    }

    return (
      <div className={styles.hello}>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}