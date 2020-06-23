const car = {
    color: 'blue'
};

const handler = {
    get(target, property) {
        return target[property] ? target[property] : 'Not found';
    }
};

const proxyObject = new Proxy(car, handler);
console.log(proxyObject.color);
console.log(proxyObject.property);
