export default class Router {
    constructor() {
        this.registry = new Map();
    }
    register(route, callback) {
        this.registry.set(route, callback);
    }
    route({route, message}) {
        return this.registry.get(route)(message);
    }
}
