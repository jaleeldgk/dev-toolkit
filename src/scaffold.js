const fs = require('fs');
const path = require('path');

const templates = {
  'node-basic': {
    files: {
      'package.json': '{ "name": "{{name}}", "version": "1.0.0", "main": "index.js" }',
      'index.js': 'console.log("Hello from {{name}}!");',
      '.gitignore': 'node_modules/\n.env\n*.log',
      'README.md': '# {{name}}\n\nA new project.'
    }
  },
  'express-api': {
    files: {
      'package.json': '{ "name": "{{name}}", "version": "1.0.0", "main": "server.js", "dependencies": { "express": "^4.18.2" } }',
      'server.js': 'const express = require("express");\nconst app = express();\napp.get("/", (req, res) => res.json({ status: "ok" }));\napp.listen(3000);',
      '.gitignore': 'node_modules/\n.env'
    }
  }
};

function scaffold(name, template = 'node-basic') {
  const tmpl = templates[template];
  if (!tmpl) throw new Error('Unknown template: ' + template);
  
  fs.mkdirSync(name, { recursive: true });
  for (const [file, content] of Object.entries(tmpl.files)) {
    const filepath = path.join(name, file);
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    fs.writeFileSync(filepath, content.replace(/\{\{name\}\}/g, name));
  }
  return name;
}

module.exports = { scaffold, templates };
