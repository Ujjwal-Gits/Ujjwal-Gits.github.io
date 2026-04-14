$tag = @"
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-52X0FPC5QG"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-52X0FPC5QG');
    </script>
"@

# Normalize the tag to avoid issues with CRLF vs LF in the PowerShell variable
$tag = $tag -replace "`r`n", "`n"

Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    # case-insensitive check for existence
    if ($content -notmatch "G-52X0FPC5QG") {
        # regex to replace <head> case-insensitively
        # [regex]::Replace(input, pattern, replacement, options)
        $newContent = [regex]::Replace($content, "<head>", "<head>`n$tag", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        [System.IO.File]::WriteAllText($_.FullName, $newContent)
        Write-Host "Updated $($_.FullName)"
    } else {
        Write-Host "Skipping $($_.FullName) - Tag already exists"
    }
}
