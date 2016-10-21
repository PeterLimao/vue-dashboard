import * as GlobalGetter from './globalGetter';
import * as TodomvcGetter from './todomvcGetter';
import * as ShoppingCartGetter from './shoppingCartGetter';

const getters = {};

Object.assign(getters, GlobalGetter, TodomvcGetter, ShoppingCartGetter);

export default getters;

