
export default class Communicator {
    constructor(router) {
        this.router = router;
        this.conn = null;
    }
    connect(host, port) {
        this.conn = new WebSocket(`ws://${host}:${port}/`);
        this.conn.onmessage = (message) => this.router.route(message);
    }
    send(route, message) {
        this.conn.send({route, message})
    }
}
