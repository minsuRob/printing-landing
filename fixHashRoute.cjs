const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    content = content.replace(/href="\//g, 'href="#/');
    content = content.replace(/window\.location\.href='\/checkout'/g, 'window.location.href="#/checkout"');
    fs.writeFileSync(path.join(dir, file), content);
  }
});
