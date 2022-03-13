const areaOne = require('./area1');

module.exports = {
    app: { import: './app.ts', dependOn: 'shared', library: { name: 'tutApp', type: 'window' }},
    ...areaOne,
    shared: { import: './shared/shared.ts', dependOn: 'jq' },
    bootstrap: { import: './shared/bootstrap.ts' },
    'bootstrap-scss': { import: './shared/bootstrap-scss.ts' },
    jq: { import: 'jquery', library: { name: '$', type: 'window'}}
};