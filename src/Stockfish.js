export default class StockfishEngine {
    constructor() {
        this.stockfish = new Worker('https://cdn.jsdelivr.net/npm/stockfish/src/stockfish.js');
    }

    postMessage(message) {
        this.stockfish.postMessage(message);
    }

    onMessage(callback) {
        this.stockfish.onmessage = (event) => callback(event.data);
    }
}