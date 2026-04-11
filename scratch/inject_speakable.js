const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('index.html')) results.push(file);
    }
  });
  return results;
}

const files = walk('b:/Main Portfolio/services');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('"SpeakableSpecification"')) {
    const slugMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/is) || content.match(/<link\s+href="([^"]+)"\s+rel="canonical"/is);
    const titleMatch = content.match(/<title>([^<]+)<\/title>/is);
    
    if (slugMatch && titleMatch) {
      const url = slugMatch[1];
      const title = titleMatch[1];
      
      const schema = `\n    <!-- Schema: WebPage (Speakable for GEO and Voice Assistants) -->\n    <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "WebPage",\n      "name": "${title.replace(/"/g, '\\"')}",\n      "url": "${url}",\n      "speakable": {\n        "@type": "SpeakableSpecification",\n        "cssSelector": ["h1", "h2", "h3", "p", ".service-body p"]\n      }\n    }\n    </script>\n`;
      
      content = content.replace('</head>', schema + '</head>');
      fs.writeFileSync(f, content);
      console.log('Injected speakable schema into: ' + f);
    } else {
      console.log('Failed to parse title or URL for: ' + f);
    }
  }
});
