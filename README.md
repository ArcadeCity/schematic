# schematic

[![NPM version](https://img.shields.io/npm/v/mc-schematic.svg)](http://npmjs.com/package/mc-schematic)

Read Minecraft MCEdit/WorldEdit schematics.

```js
var fs = require('fs');
var Schematic = require('schematic')('1.8');

fs.readFile('test/test1.schematic', function (err, data) {
  Schematic.parse(data, function (err, schem) {
    console.log(schem.getBlock(0, 0, 0));
  });
});
```

### [Documentation](https://github.com/1b8/schematic/blob/master/doc/api.md)
### [Example](https://github.com/1b8/schematic/blob/master/doc/examples.js)

---

### Arcade City edit

Added a script to convert a .schematic file into lightweight JSON for easy loading into the Arcade City [realgame BabylonJS app](https://github.com/ArcadeCity/realgame).

See test/convert.js. Test with:

```
git clone git@github.com:ArcadeCity/schematic.git
cd schematic
npm install
npm run convert
