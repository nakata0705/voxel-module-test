var voxel = require('voxel');

var generatedVoxel = voxel.generate([0,0,0], [16,16,16], function(x,y,z) {
  return Math.round(Math.random() * 0xffffff)
});

console.log(generatedVoxel);