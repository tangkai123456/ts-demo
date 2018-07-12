import * as React from 'react';
import { IProps } from './HelloSFC';
import { getExclamationMarks } from './helpers';

import styles from './hello.scss';

console.log(111, styles);

export default class Hello extends React.Component<IProps, object> {
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props;
    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic');
    }

    return (
      <div className={styles.hello}>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}