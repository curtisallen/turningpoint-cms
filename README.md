# Turning Point of the City CMS

Tracks youth metrics

## Usage
This project is built on [keystone](http://keystonejs.com/) and runs in [BeepBoop](https://beepboophq.com/).

### Developer Instructions
Prerequisites

  - Node JS v6 + (see https://github.com/creationix/nvm)
  - Docker (see https://www.docker.com/products/docker)
  - Gulp (see http://gulpjs.com/) `npm install gulp-cli -g && npm install gulp -D`

#### Start server locally

    # Create mongo if you haven't created it before else `gulp startMongo`
    gulp createMongo
    gulp

#### Development Watch

While developing it's useful to watch for file changes and automatically restart the server upon change. The following command will enable this functionality.

    npm run watch

#### Troubleshooting

<details>
<summary>Cannot connect to mongo</summary>

```shell
Mongo Error:

Error: failed to connect to [localhost:27017]
    at .<anonymous> (/Users/callen/src/turningpoint-cms/node_modules/mongodb/lib/mongodb/connection/server.js:556:25)
    at emitThree (events.js:116:13)
    at emit (events.js:194:7)
    at .<anonymous> (/Users/callen/src/turningpoint-cms/node_modules/mongodb/lib/mongodb/connection/connection_pool.js:156:15)
    at emitTwo (events.js:106:13)
    at emit (events.js:191:7)
    at Socket.<anonymous> (/Users/callen/src/turningpoint-cms/node_modules/mongodb/lib/mongodb/connection/connection.js:534:10)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at emitErrorNT (net.js:1272:8)
    at _combinedTickCallback (internal/process/next_tick.js:74:11)
    at process._tickCallback (internal/process/next_tick.js:98:9)
/Users/callen/src/turningpoint-cms/node_modules/keystone/lib/core/mount.js:630
			throw new Error('KeystoneJS (' + keystone.get('name') + ') failed to start');
			^

Error: KeystoneJS (turningpoint) failed to start
    at NativeConnection.<anonymous> (/Users/callen/src/turningpoint-cms/node_modules/keystone/lib/core/mount.js:630:10)
    at emitOne (events.js:96:13)
    at NativeConnection.emit (events.js:188:7)
    at NativeConnection.Connection.error (/Users/callen/src/turningpoint-cms/node_modules/mongoose/lib/connection.js:389:8)
    at /Users/callen/src/turningpoint-cms/node_modules/mongoose/lib/connection.js:416:14
    at /Users/callen/src/turningpoint-cms/node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:57:21
    at /Users/callen/src/turningpoint-cms/node_modules/mongodb/lib/mongodb/db.js:286:18
    at /Users/callen/src/turningpoint-cms/node_modules/mongodb/lib/mongodb/db.js:365:7
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
    at process._tickCallback (internal/process/next_tick.js:98:9)
[20:29:31] 'runKeystone' errored after 2.37 s
[20:29:31] Error: Command `node keystone.js` failed with exit code 1
    at ChildProcess.exithandler (child_process.js:206:12)
    at emitTwo (events.js:106:13)
    at ChildProcess.emit (events.js:191:7)
    at maybeClose (internal/child_process.js:877:16)
    at Socket.<anonymous> (internal/child_process.js:334:11)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at Pipe._handle.close [as _onclose] (net.js:493:12)

```
</details>
The app cannot connect to Mongo. Did you start mongo using `gulp createMongo`? or `gulp startMongo`?

