const https = require('https');
const fs = require('fs');
const path = require('path');

const screens = [
  {
    name: 'MainPage',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzc5ZGFjYjFiMGEwMDQ5ZDZhNGY1NzAwNmNlNDg5YjM3EgsSBxCd5J-ZoAoYAZIBIgoKcHJvamVjdF9pZBIUQhI3NTA2NDE2NTU1OTc2NzI5OTA&filename=&opi=89354086'
  },
  {
    name: 'MaskDetail',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzc0YzUzODFiM2Q4MTQzMzViNjRlZTExMGQ5ZjA0ODU3EgsSBxCd5J-ZoAoYAZIBIgoKcHJvamVjdF9pZBIUQhI3NTA2NDE2NTU1OTc2NzI5OTA&filename=&opi=89354086'
  },
  {
    name: 'SneakerDetail',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sX2M4NDMwMTEwNzgwMjRjODRhMzNkNjY0MGNlNjEwY2QxEgsSBxCd5J-ZoAoYAZIBIgoKcHJvamVjdF9pZBIUQhI3NTA2NDE2NTU1OTc2NzI5OTA&filename=&opi=89354086'
  },
  {
    name: 'BagDetail',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzczMDA1YjczZDk0ZTQxOTZiNGMxMGVmOGY1ZjgyMzBlEgsSBxCd5J-ZoAoYAZIBIgoKcHJvamVjdF9pZBIUQhI3NTA2NDE2NTU1OTc2NzI5OTA&filename=&opi=89354086'
  }
];

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function convertHtmlToReact(html, name) {
  // Extract body content
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;

  // Basic HTML to JSX conversions
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  content = content.replace(/<img([^>]+)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  content = content.replace(/<input([^>]+)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  content = content.replace(/<hr([^>]+)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
  });
  content = content.replace(/<br([^>]*?)>/g, '<br />');

  // Fix style strings to objects (simplistic)
  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={{}}`; // Strip inline styles for simplicity since they are rarely used here
  });
  
  // Custom links logic: Replace shop buttons/links
  // Since we don't know the exact class names, we'll just inject standard link modifications later manually or trust the user flow.

  return `
const ${name} = () => {
  return (
    <div className="bg-background text-on-surface font-body-md w-full min-h-screen">
      ${content}
    </div>
  );
};

export default ${name};
`;
}

async function run() {
  for (const screen of screens) {
    console.log(`Downloading ${screen.name}...`);
    const html = await download(screen.url);
    const reactCode = convertHtmlToReact(html, screen.name);
    fs.writeFileSync(path.join(__dirname, 'src', 'pages', `${screen.name}.tsx`), reactCode);
    console.log(`Saved ${screen.name}.tsx`);
  }
}

run();
