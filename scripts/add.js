const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const { spawn } = require("child_process");
const handlebars = require("handlebars");
const chalk = require("chalk");
const _ = require('lodash');

(() => {

  const component = process.argv[2];
  const dirName = _.kebabCase(component);
  const componentName = _.upperFirst(_.camelCase(component))

  spawn("mkdir", ["-p", path.join(process.cwd(), `src/${dirName}`)]);

  const tplFiles = glob.sync(path.join(__dirname, "template/*.hbs"));
  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, "utf-8");
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });

    const newPath = filePath
      .replace("scripts/template", `src/${dirName}`)
      .replace("COMPONENT", dirName)
      .replace(".hbs", "");
    await fs.writeFile(newPath, result);
    console.log(chalk.green(`wirte ${newPath} success`));
  });
})();
