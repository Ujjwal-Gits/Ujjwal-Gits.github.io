const fs = require('fs');
const path = require('path');

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let dirty = false;

    // Get canonical URL for this file based on its path
    let relativePath = path.relative('.', filePath).replace(/\\/g, '/');
    let canonicalUrl = `https://ujjwalrupakheti.com.np/${relativePath.replace('index.html', '')}`;
    if (canonicalUrl.endsWith('//')) canonicalUrl = canonicalUrl.slice(0, -1);

    // 1. Add canonical tag if missing
    if (!content.includes('rel="canonical"')) {
        const canonicalTag = `\n    <link rel="canonical" href="${canonicalUrl}" />`;
        content = content.replace(/<\/head>/i, `${canonicalTag}\n</head>`);
        dirty = true;
    }

    // 2. Add hreflang tag (en-NP)
    if (!content.includes('hreflang="en-NP"')) {
        const hreflangTag = `\n    <link rel="alternate" hreflang="en-NP" href="${canonicalUrl}" />`;
        content = content.replace(/<\/head>/i, `${hreflangTag}\n</head>`);
        dirty = true;
    }

    // 3. Open Graph Tags
    if (!content.includes('property="og:title"')) {
        const titleMatch = content.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : 'Ujjwal Rupakheti';
        const ogTags = `\n    <meta property="og:title" content="${title}" />\n    <meta property="og:description" content="Expert Web Development and SEO Services." />\n    <meta property="og:url" content="${canonicalUrl}" />\n    <meta property="og:type" content="website" />\n    <meta property="og:image" content="https://ujjwalrupakheti.com.np/assets/images/Uzal-Hero.png" />`;
        content = content.replace(/<\/head>/i, `${ogTags}\n</head>`);
        dirty = true;
    }

    // 4. Twitter Card Tags
    if (!content.includes('name="twitter:card"')) {
        const twitterTags = `\n    <meta name="twitter:card" content="summary_large_image" />\n    <meta name="twitter:site" content="@ujjwalrupakheti" />\n    <meta name="twitter:creator" content="@ujjwalrupakheti" />`;
        content = content.replace(/<\/head>/i, `${twitterTags}\n</head>`);
        dirty = true;
    }

    // 5. rel="author" pointing to Google profile / LinkedIn for blog posts
    // I will add it to the head for all files if it doesnt exist
    if (!content.includes('rel="author"') && !content.includes("humans.txt")) {
        const authorTag = `\n    <link rel="author" href="https://linkedin.com/in/ujjwal-rupakheti-bb421b339/" />`;
        content = content.replace(/<\/head>/i, `${authorTag}\n</head>`);
        dirty = true;
    } else if (filePath.includes('blogs') && !content.includes('rel="author"')) {
        const authorTag = `\n    <link rel="author" href="https://linkedin.com/in/ujjwal-rupakheti-bb421b339/" />`;
        content = content.replace(/<\/head>/i, `${authorTag}\n</head>`);
        dirty = true;
    }

    // 6. Descriptive alt text logic: regex to check if missing
    // We will just report missing alt text, replacing it perfectly automagically is hard.
    let imgRegex = /<img\s+([^>]+)>/ig;
    let newContent = content.replace(imgRegex, (match, p1) => {
        if (!p1.includes('alt=')) {
            dirty = true;
            return `<img ${p1} alt="Website graphic by Ujjwal Rupakheti">`;
        }
        return match;
    });
    content = newContent;

    if (dirty) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated: ' + filePath);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !fullPath.includes('.git') && !fullPath.includes('scratch') && !fullPath.includes('node_modules')) {
            traverseDir(fullPath);
        } else if (file.endsWith('.html')) {
            processHtmlFile(fullPath);
        }
    });
}

traverseDir('.');
console.log('Done scanning and updating HTML files.');
