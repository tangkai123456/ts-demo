import { action, observable } from "mobx";

interface IStore {
  enthusiasmLevel: number;
  increment: () => void;
  decrement: () => void;
}

export default class Store implements IStore {
  @observable public enthusiasmLevel = 1;

  @action public increment = () => {
    this.enthusiasmLevel++;
  }

  @action public decrement = () => {
    this.enthusiasmLevel--;
  }
}