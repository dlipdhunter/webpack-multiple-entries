module.exports = {
    'areas/areaOne': { import: './areas/area1.ts', dependOn: 'shared', library: { name: 'areaOne', type: 'window' }},
}