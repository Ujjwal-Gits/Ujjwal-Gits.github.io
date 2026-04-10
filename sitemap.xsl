<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | UJR Architectural Solutions</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 14px;
            color: #0d1c32;
            margin: 0;
            padding: 40px;
            background-color: #f7f9fc;
          }
          #header {
            padding-bottom: 20px;
            border-bottom: 2px solid rgba(13, 28, 50, 0.1);
            margin-bottom: 40px;
          }
          #header h1 {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 24px;
            margin: 0 0 10px 0;
            letter-spacing: -1px;
          }
          #header p {
            margin: 0;
            color: #515f78;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 2px solid #0d1c32;
          }
          th {
            text-align: left;
            padding: 15px;
            background-color: #0d1c32;
            color: #ffffff;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          td {
            padding: 15px;
            border-bottom: 1px solid rgba(13, 28, 50, 0.1);
          }
          tr:hover td {
            background-color: #f2f4f7;
          }
          a {
            color: #0d1c32;
            text-decoration: none;
            font-weight: 600;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div id="header">
          <h1>UJR XML Sitemap</h1>
          <p>Engineered for SEO Dominance</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>URL / Loc</th>
              <th>Priority</th>
              <th>Change Frequency</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <xsl:variable name="itemURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <a href="{$itemURL}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="sitemap:priority"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:changefreq"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
