$replacements = @{
    "â€”" = "-"
    "â€™" = "'"
    "â€œ" = '"'
    "â€" = '"'
    "â€“" = "-"
}

Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $modified = $false
    
    foreach ($key in $replacements.Keys) {
        if ($content.Contains($key)) {
            $content = $content.Replace($key, $replacements[$key])
            $modified = $true
        }
    }
    
    if ($modified) {
        # Using UTF8 without BOM is often standard for web, but WriteAllText defaults to BOM in some PS versions.
        # We'll use a specific encoding to be sure.
        $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($_.FullName, $content, $utf8NoBOM)
        Write-Host "Fixed encoding issues in $($_.FullName)"
    }
}
