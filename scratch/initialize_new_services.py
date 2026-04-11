import os
import re

def update_page(file_path, title, desc, h1_seo, h1_visual, breadcrumb_name):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Update Meta Block
    meta_new = f"""
    <!-- ADVANCED SEO / AEO / GEO DOMINANCE -->
    <title>{title} | Ujjwal Rupakheti</title>
    <meta name="description" content="{desc}" />
    <meta name="keywords" content="{breadcrumb_name} Nepal, SEO expert, technical SEO, local rankings" />
    <link rel="canonical" href="https://ujjwalrupakheti.com.np/services/{os.path.basename(os.path.dirname(file_path))}/" />

    <!-- Open Graph Metadata -->
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{desc}" />
    
    <!-- Breadcrumb JSON-LD -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{ "@type": "ListItem", "position": 1, "item": {{ "@id": "https://ujjwalrupakheti.com.np/", "name": "Home" }} }},
        {{ "@type": "ListItem", "position": 2, "item": {{ "@id": "https://ujjwalrupakheti.com.np/services/", "name": "Services" }} }},
        {{ "@type": "ListItem", "position": 3, "item": {{ "@id": "https://ujjwalrupakheti.com.np/services/{os.path.basename(os.path.dirname(file_path))}/", "name": "{breadcrumb_name}" }} }}
      ]
    }}
    </script>
"""
    content = re.sub(r'<!-- ADVANCED SEO / AEO / GEO DOMINANCE -->.*?</script>', meta_new, content, flags=re.DOTALL)

    # Update H1 Masking
    h1_new = f"""
                <h1 class="font-headline font-black tracking-tighter text-primary-container uppercase mb-10 mobile-h1">
                  <span class="sr-only">{h1_seo}</span>
                  <span aria-hidden="true" class="block text-[3.5rem] lg:text-[4rem] leading-[0.9]">{h1_visual}</span>
                </h1>
"""
    content = re.sub(r'<h1.*?</h1>', h1_new.strip(), content, flags=re.DOTALL)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

# Update SEO Audit
update_page(
    r"b:\Main Portfolio\services\seo-audit\index.html",
    "Technical SEO Audit Nepal — Expert Website Diagnostic Services",
    "Get a comprehensive technical SEO audit in Nepal. Ujjwal Rupakheti analyzes site speed, Core Web Vitals, and crawl errors to boost your Google rankings.",
    "Technical SEO Audit Nepal — Expert Website Diagnostic & Performance Analysis",
    "SEO<br />AUDIT",
    "SEO Audit"
)

# Update Local SEO
update_page(
    r"b:\Main Portfolio\services\local-seo\index.html",
    "Local SEO Services Nepal — Rank Higher in Google Maps",
    "Dominate local search in Itahari, Biratnagar, and Kathmandu with expert Local SEO services. Rank in the Google Map Pack and drive more local customers.",
    "Local SEO Nepal — Rank Higher in Google Maps & Local Search Results",
    "LOCAL<br />SEO",
    "Local SEO"
)
