import * as StringFilter from './stringFilter';
import * as OrderFilter from './orderFilter';
import Vue from 'vue';

const filter = {};

Object.assign(filter, StringFilter, OrderFilter);

Object.keys(filter).forEach((key) => {
    Vue.filter(key, filter[key]);
});
