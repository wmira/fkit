fkit
===========

fkit is a small javascript utility that aid in functional programming in javascript.

It consists of the following utilities:

* get/mget
* memoize
* curry
* identity
* map


# get/mget

get is a simple field getter for object literal data. It can be used to create
reusable functions that access path that might be empty.

```javascript

import { get } from 'jkit-js';

const order = ...

/*
  assumming order has a structure
  order = { product: { code: 'XY123' } };
  and product can be null
*/
if ( order && order.product ) {
    return order.product.code;
}

/**
  using get
*/
export const getProductCode = get('product.code');
const code = getProductCode(order);

```

Note that mget is a same as get but is memoized

# memoize

A simple helper to create simple memoized functions. This assume that the function is a pure function. memoize takes in 2 arguments, 1. the function to memoize, 2.(optional) The function that can be used to generate a key. By default memoize will use the first argument as a key.

```javascript

import { memoize } from 'jkit-js';

const translateCompute = memoize((a,b) => {
    return a.charCodeAt(a) + b.charCodeAt(b);
}, (a,b) => a + '_' + b);

export { translateCompute };

```

# compose

Compose is a standard right to left compose.

```javascript

import { get, compose } from 'jkit-js';

const getOrder = get('order');
const getProduct = get('product');
const getDeliveryInfo = get('deliveryInfo');

const getOrderProduct = compose(getProduct, getOrder);
const getOrderDeliveryInfo = compose(getDeliveryInfo, getOrder);

getOrderProduct({ order: { product: { id: '123'}}}); // { id: '123' }
getOrderDeliveryInfo({ order: { deliveryInfo: { address: 'Somewhere'}}}); // { address: '123' }

```

# map
# identity
# curry
# combinators
