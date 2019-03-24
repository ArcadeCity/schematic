var fs = require('fs');
var Schematic = require('../')('1.8');

var filePrefix = 'plane'

fs.readFile(__dirname + '/' + filePrefix + '.schematic', function (err, data) {
  if (err) throw err;

  Schematic.parse(data, function (err, schem) {
    if (err) throw err;

    let acobj = []
    let block, prunedBlock

    l('width:', schem.width)    // x
    l('height:', schem.height)  // y
    l('length:', schem.length)  // z

    for (var x = 0; x < schem.width; x++) {
        for (var y = 0; y < schem.height; y++) {
            for (var z = 0; z < schem.length; z++) {

                block = schem.getBlock(x, y, z)

                // If block isn't air, save the info we want: position and type
                if (block.type > 0) {

                    prunedBlock = {
                        x: block.position.x,
                        y: block.position.y,
                        z: block.position.z,
                        t: block.type
                    }

                    acobj.push(prunedBlock)
                }
            }
        }
    }

    // console.log(acobj)



    fs.writeFileSync('./finished/' + filePrefix + '.json', JSON.stringify(acobj), 'utf-8');
    let stats = fs.statSync('./finished/' + filePrefix + '.json')
    var fileSizeInBytes = stats['size']
    var fileSizeInKB = fileSizeInBytes / 1000
    console.log('Object created. Size: ' + fileSizeInKB + ' KB')

  });
});

function l() {console.log.apply(null, arguments);}
