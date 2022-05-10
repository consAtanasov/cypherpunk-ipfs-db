class DecentralizedDb {
    constructor(Ipfs, OrbitDB) {
        this.Ipfs = Ipfs;
        this.OrbitDB = OrbitDB;
    }
}

try {
    const Ipfs = require('ipfs');
    const OrbitDB = require('orbit-db')

    module.exports = exports = new DecentralizedDb(Ipfs, OrbitDB)
} catch (e) {
    window.DDB = new DecentralizedDb(window.Ipfs, window.OrbitDB);
}