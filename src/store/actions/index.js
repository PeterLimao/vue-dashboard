import * as GlobalAction from './globalAction';
import * as ShoppingCartAction from './shoppingCartAction';
import * as TodomvcAction from './todomvcAction';

const actions = {};

Object.assign(actions, GlobalAction, ShoppingCartAction, TodomvcAction);

export default actions;

