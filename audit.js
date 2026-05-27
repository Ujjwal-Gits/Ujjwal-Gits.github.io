const fs = require('fs');
const path = require('path');

const rootDir = 'b:\\Main Portfolio';
const results = [];

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === '.git' || file === 'node_modules' || file === 'assets' || file === 'blogs') continue;
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const files = getHtmlFiles(rootDir);

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Extract internal links (href starts with / or https://www.ujjwalrupakheti.com.np)
    const links = [];
    const linkRegex = /href="([^"]+)"/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
        let href = match[1];
        if (href.startsWith('/') || href.startsWith('https://www.ujjwalrupakheti.com.np')) {
             if (href.startsWith('https://www.ujjwalrupakheti.com.np')) {
                 href = href.replace('https://www.ujjwalrupakheti.com.np', '');
             }
             if (href === '') href = '/';
             if (!href.startsWith('/assets') && !href.startsWith('/images') && !href.endsWith('.css') && !href.endsWith('.js') && !href.endsWith('.png') && !href.endsWith('.jpg') && !href.endsWith('.webp')) {
                 links.push(href);
             }
        }
    }

    // Rough word count (stripping script/style first, then all tags)
    let text = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
    text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
    text = text.replace(/<[^>]+>/g, ' ');
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;

    // Relative path for easier reading
    const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
    
    results.push({
        page: relPath.replace('/index.html', '').replace('index.html', '/') || '/',
        wordCount: words,
        internalLinks: [...new Set(links)]
    });
}

fs.writeFileSync(path.join(rootDir, 'audit-results.json'), JSON.stringify(results, null, 2));
console.log('Audit complete. Processed ' + files.length + ' files.');
