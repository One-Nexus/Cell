var sass = require("sass");
const path = require('path');
const fs = require('fs');

var result = sass.renderSync({ file: "./demo/demo.scss" });

fs.writeFile(path.join(__dirname, './output.css'), result.css, error => {
    if (error) {
        return console.warn(error);
    }
});