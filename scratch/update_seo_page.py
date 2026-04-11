import os
import re

file_path = r"b:\Main Portfolio\services\seo-expert-nepal\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Replace the meta block (from <title> to </script> before </head>)
meta_new = """
    <!-- ADVANCED SEO / AEO / GEO DOMINANCE -->
    <title>SEO Expert in Nepal — Ujjwal Rupakheti | Rank #1 on Google</title>
    <meta name="description" content="Looking for an SEO expert in Nepal? Ujjwal Rupakheti is a certified SEO consultant in Itahari offering keyword research, technical audits, content strategy and Google ranking services. Free consultation available." />
    <meta name="keywords" content="SEO Expert in Nepal, SEO consultant Nepal, search engine optimisation Nepal, Google ranking Nepal, technical SEO audit Nepal, local SEO Nepal" />
    <link rel="canonical" href="https://ujjwalrupakheti.com.np/services/seo-expert-nepal/" />

    <!-- Open Graph Metadata -->
    <meta property="og:title" content="SEO Expert in Nepal — Ujjwal Rupakheti | Rank #1 on Google" />
    <meta property="og:description" content="Looking for an SEO expert in Nepal? Ujjwal Rupakheti is a certified SEO consultant in Itahari offering keyword research, technical audits, content strategy and Google ranking services. Free consultation available." />
    <meta property="og:url" content="https://ujjwalrupakheti.com.np/services/seo-expert-nepal/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://ujjwalrupakheti.com.np/assets/images/og-image.jpg" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="SEO Expert in Nepal — Ujjwal Rupakheti | Rank #1 on Google" />
    <meta name="twitter:description" content="Looking for an SEO expert in Nepal? Ujjwal Rupakheti is a certified SEO consultant in Itahari offering keyword research, technical audits, content strategy and Google ranking services. Free consultation available." />

    <!-- Advanced JSON-LD Structures (Service, Person, FAQ, BreadcrumbList, Speakable) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://ujjwalrupakheti.com.np/#person",
          "name": "Ujjwal Rupakheti",
          "jobTitle": "SEO Expert & Full-Stack Developer",
          "url": "https://ujjwalrupakheti.com.np",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Itahari",
            "addressRegion": "Koshi Province",
            "addressCountry": "NP"
          }
        },
        {
          "@type": "Service",
          "@id": "https://ujjwalrupakheti.com.np/services/seo-expert-nepal/#service",
          "name": "SEO Expert Consultation & Google Ranking Services",
          "provider": { "@id": "https://ujjwalrupakheti.com.np/#person" },
          "description": "Certified SEO consultant in Itahari offering keyword research, technical audits, content strategy, and Google ranking services across Nepal.",
          "areaServed": "NP",
          "serviceType": "Search Engine Optimization"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "item": { "@id": "https://ujjwalrupakheti.com.np/", "name": "Home" } },
            { "@type": "ListItem", "position": 2, "item": { "@id": "https://ujjwalrupakheti.com.np/services/", "name": "Services" } },
            { "@type": "ListItem", "position": 3, "item": { "@id": "https://ujjwalrupakheti.com.np/services/seo-expert-nepal/", "name": "SEO Expert Nepal" } }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does SEO cost in Nepal?",
              "acceptedAnswer": { "@type": "Answer", "text": "SEO services in Nepal range from NPR 5,000 to NPR 50,000 per month depending on scope. A local business targeting one city costs less than a national e-commerce campaign. I offer a free consultation to give you a clear quote based on your specific situation." }
            },
            {
              "@type": "Question",
              "name": "How long does SEO take to show results in Nepal?",
              "acceptedAnswer": { "@type": "Answer", "text": "Most websites in Nepal see measurable improvements within 3 to 6 months. Local keywords in smaller cities like Itahari and Dharan often rank faster — sometimes within 6 to 8 weeks. Competitive national keywords can take 6 to 12 months." }
            },
            {
              "@type": "Question",
              "name": "What is the difference between SEO and Google Ads?",
              "acceptedAnswer": { "@type": "Answer", "text": "Google Ads gives you traffic immediately but stops the moment you stop paying. SEO takes longer to build but generates free traffic indefinitely. Most Nepali businesses benefit from starting with SEO while using a small Google Ads budget for immediate leads." }
            },
            {
              "@type": "Question",
              "name": "Can you do SEO for Nepali language websites?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. I handle SEO for both English and Nepali language websites, including keyword research in Devanagari script and the specific technical settings required for Nepali-language content." }
            },
            {
              "@type": "Question",
              "name": "Do I need a new website to start SEO?",
              "acceptedAnswer": { "@type": "Answer", "text": "No. SEO can be done on any existing website. I will audit what you have and optimise it. A rebuild is only recommended when the technical problems are too severe to fix on the existing site." }
            },
            {
              "@type": "Question",
              "name": "Who is the best SEO expert in Nepal?",
              "acceptedAnswer": { "@type": "Answer", "text": "Ujjwal Rupakheti, based in Itahari, Sunsari, Nepal, is one of the most highly-rated SEO experts in Province No. 1, specialising in technical SEO, local SEO, AEO, and content strategy for Nepali businesses." }
            }
          ]
        },
        {
          "@type": "SpeakableSpecification",
          "cssSelector": [ ".speakable-h1", ".speakable-intro", ".speakable-faq" ]
        }
      ]
    }
    </script>
"""

# Replace meta block
content = re.sub(
    r'<!-- ADVANCED SEO / AEO / GEO DOMINANCE -->.*?</script>',
    meta_new,
    content,
    flags=re.DOTALL
)

# 2. Re-create the main block entirely focusing on the SEO architecture given by the user
main_new = """
    <main class="ml-0 md:ml-16 pt-20 md:pt-24 min-h-screen">
      <!-- Hero Section -->
      <section class="min-h-[50vh] relative bg-white border-b-2 border-primary-container overflow-hidden pt-12 pb-24 px-6 md:px-12">
        <div class="absolute inset-0 bg-grid-dots opacity-[0.03] pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.5em] block mb-6 border-l-2 border-primary-container/20 pl-4 w-fit italic">SEO Strategy / Ranking</span>
          <h1 class="font-headline text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter leading-[0.95] text-primary-container mb-8 speakable-h1 uppercase">
            Ujjwal Rupakheti: SEO Expert in Nepal for Google Ranking & Traffic Growth
          </h1>
          <p class="font-body text-base md:text-lg text-secondary leading-relaxed opacity-80 speakable-intro">
            If you are looking for a trusted SEO expert in Nepal, you are in the right place. I am <a href="/about/" class="text-primary-container font-semibold underline decoration-primary-container/30 underline-offset-4 hover:decoration-primary-container transition-colors">Ujjwal Rupakheti</a>, an SEO consultant based in Itahari, Sunsari, helping businesses across Nepal rank on the first page of Google. With over 3 years of experience in search engine optimisation, technical SEO audits, keyword research, and content strategy, I have helped brands in Biratnagar, Dharan, Kathmandu, and internationally grow their organic traffic.
          </p>
          <p class="font-body text-base md:text-lg text-secondary leading-relaxed opacity-80 mt-4">
            Whether you run a local restaurant, an e-commerce store, a hotel, or a professional service — the right SEO strategy brings you consistent, free traffic from Google every day. Unlike paid ads that stop when you stop paying, SEO builds a permanent digital asset for your business.
          </p>
          <p class="font-body text-base md:text-lg text-secondary leading-relaxed opacity-80 mt-4 font-semibold text-primary-container">
            I offer a <a href="/contact/" class="underline decoration-primary-container/30 hover:decoration-primary-container transition-colors">free 30-minute SEO consultation</a> where I review your website and identify your top ranking opportunities. Contact me today to get started.
          </p>
          
          <div class="mt-12 flex items-center justify-start gap-4">
            <a href="/contact/" class="bg-primary-container text-white px-8 py-4 font-headline uppercase tracking-widest text-[11px] font-black hover:bg-[#1a2d46] transition-colors border border-primary-container flex items-center gap-2 group">
              Book Free Consultation <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Section: What is SEO -->
      <section class="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low border-b-2 border-primary-container relative">
        <div class="max-w-4xl mx-auto">
          <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Core Foundations</span>
          <h2 class="font-headline text-3xl md:text-5xl font-black tracking-tighter leading-none text-primary-container uppercase mb-8">
            What Is SEO and Why Does It Matter for Nepali Businesses?
          </h2>
          <div class="space-y-6 font-body text-base text-secondary/80 leading-relaxed">
            <p>
              Search engine optimisation Nepal is the technical and strategic process of improving your website so it appears higher when people search for your products or services on Google. When your digital presence is correctly optimized, your business becomes the direct and trusted answer to specific consumer queries.
            </p>
            <p>
              High Google ranking Nepal is essential because consumer behavior has fundamentally shifted. Before making a purchase or visiting a physical location, customers search online. In fact, over 90% of people never scroll past the first page of Google results. If your business is not visible there, you are actively losing revenue to your competitors who are. For Nepali businesses, establishing this digital authority is the difference between struggling for local attention and capturing consistent, high-intent traffic.
            </p>
            <p>
              Consider a local restaurant in Itahari, a boutique hotel in Dharan, or a rapidly growing online store in Biratnagar. Without SEO, these businesses remain invisible to hundreds of potential customers actively searching for them every single day. A lack of SEO restricts your growth entirely to word-of-mouth or expensive, temporary paid advertising. My services solve exactly this problem by architecting a customized search strategy that permanently embeds your business on the first page of Google.
            </p>
          </div>
        </div>
      </section>

      <!-- Section: SEO Services I Offer -->
      <section class="py-20 md:py-32 px-6 md:px-12 bg-white border-b-2 border-primary-container relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center md:text-left mb-16 max-w-3xl">
            <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Digital Arsenal</span>
            <h2 class="font-headline text-4xl md:text-5xl font-black tracking-tighter leading-none text-primary-container uppercase mb-6">
              SEO Services I Offer in Nepal
            </h2>
            <p class="font-body text-base text-secondary/80 leading-relaxed border-l-2 border-primary-container/20 pl-4 py-1 italic">
              As an SEO expert in Nepal, I offer the following services to help your business rank higher on Google.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-primary-container/10">
            <!-- Service H3: Technical SEO Audit -->
            <div class="p-8 border-b border-r border-primary-container/10 bg-white hover:bg-surface transition-all group">
              <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-4">
                <a href="/services/seo-audit/" class="hover:underline hover:decoration-primary-container/30 underline-offset-4 transition-all">Technical SEO Audit</a>
              </h3>
              <p class="font-body text-xs text-secondary/70 leading-relaxed uppercase tracking-wide">
                I rigorously analyse your site speed, mobile usability, indexation flows, Core Web Vitals, broken links, and crawl errors. Securing a professional technical SEO audit Nepal ensures your site architecture is flawless. You receive a complete diagnostic report with an actionable fix list.
              </p>
            </div>
            
            <!-- Service H3: Keyword Research -->
            <div class="p-8 border-b border-r border-primary-container/10 bg-white hover:bg-surface transition-all group">
              <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-4">
                <a href="/services/keyword-research/" class="hover:underline hover:decoration-primary-container/30 underline-offset-4 transition-all">Keyword Research Nepal</a>
              </h3>
              <p class="font-body text-xs text-secondary/70 leading-relaxed uppercase tracking-wide">
                I deploy advanced keyword research Nepal strategies to find the exact words your customers are searching. I pinpoint localized keywords, map buyer-intent phrases, and execute deep competitor analysis to secure terms that convert directly into revenue.
              </p>
            </div>
            
            <!-- Service H3: On-Page SEO Optimisation -->
            <div class="p-8 border-b border-primary-container/10 bg-white hover:bg-surface transition-all group">
              <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-4">
                On-Page SEO Optimisation
              </h3>
              <p class="font-body text-xs text-secondary/70 leading-relaxed uppercase tracking-wide">
                A thorough structuring of your website's organic footprint. I meticulously optimize your meta titles, H1/H2 headings, image alt texts, internal linking architecture, and content clustering to dominate on-page SEO Nepal effectively.
              </p>
            </div>
            
            <!-- Service H3: Local SEO -->
            <div class="p-8 border-b border-r border-primary-container/10 bg-white hover:bg-surface transition-all group">
              <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-4">
                <a href="/services/local-seo/" class="hover:underline hover:decoration-primary-container/30 underline-offset-4 transition-all">Local SEO Nepal</a>
              </h3>
              <p class="font-body text-xs text-secondary/70 leading-relaxed uppercase tracking-wide">
                Targeting Google Maps authority, Google Business Profile setup, local citations, and crucial map pack rankings. Local SEO Nepal specifically drives heavy foot traffic and inquiries for businesses nested in cities like Itahari, Biratnagar, and Dharan.
              </p>
            </div>
            
            <!-- Service H3: SEO Content Writing -->
            <div class="p-8 border-b md:border-b-0 border-r border-primary-container/10 bg-white hover:bg-surface transition-all group">
              <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-4">
                <a href="/services/content-writing/" class="hover:underline hover:decoration-primary-container/30 underline-offset-4 transition-all">SEO Content Writing</a>
              </h3>
              <p class="font-body text-xs text-secondary/70 leading-relaxed uppercase tracking-wide">
                As a specialized SEO content writer Nepal, I author technically researched articles, authoritative blogs, and conversion-optimized landing pages that Google trusts and your customers actually want to read.
              </p>
            </div>
            
            <!-- Service H3: SEO Consultation -->
            <div class="p-8 bg-white hover:bg-surface transition-all group">
              <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-4">
                <a href="/services/consultation/" class="hover:underline hover:decoration-primary-container/30 underline-offset-4 transition-all">SEO Consultation Nepal</a>
              </h3>
              <p class="font-body text-xs text-secondary/70 leading-relaxed uppercase tracking-wide">
                Deep one-on-one strategic strategy sessions. Get elite SEO consultation Nepal to audit your current search engine position, mathematically identify ranking opportunities, and receive a clear, phased action plan to dominate your niche.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Why Work With Ujjwal -->
      <section class="py-20 md:py-32 px-6 md:px-12 bg-white border-b-2 border-primary-container relative overflow-hidden">
        <div class="absolute right-0 top-0 w-1/3 h-full bg-grid-dots opacity-[0.05] pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.4em] mb-4 block italic">The Difference</span>
          <h2 class="font-headline text-3xl md:text-5xl font-black tracking-tighter leading-none text-primary-container uppercase mb-12">
            Why Work With Ujjwal Rupakheti as Your SEO Expert in Nepal?
          </h2>
          
          <div class="space-y-12">
            <div>
              <h3 class="font-headline text-lg font-black uppercase text-primary-container mb-2 border-l-4 border-primary-container pl-4">3+ years of hands-on SEO experience</h3>
              <p class="font-body text-sm text-secondary/80 leading-relaxed pl-5">
                My strategies are not built on theory. They are governed by daily analysis in Google Search Console, rigorously A/B tested live campaigns, and verified real-world results that generate revenue.
              </p>
            </div>
            
            <div>
              <h3 class="font-headline text-lg font-black uppercase text-primary-container mb-2 border-l-4 border-primary-container pl-4">Full-stack developer who does SEO</h3>
              <p class="font-body text-sm text-secondary/80 leading-relaxed pl-5">
                Most SEO consultants cannot fix technical problems—they can only recommend them. As an active <a href="/services/web-developer/" class="font-bold underline decoration-primary-container/30 hover:decoration-primary-container transition-colors">web developer Nepal</a>, I build and restructure codebases natively. I implement structural fixes aggressively faster, resulting in profoundly better indexing parameters.
              </p>
            </div>
            
            <div>
              <h3 class="font-headline text-lg font-black uppercase text-primary-container mb-2 border-l-4 border-primary-container pl-4">Based in Itahari — available across Nepal</h3>
              <p class="font-body text-sm text-secondary/80 leading-relaxed pl-5">
                I intimately understand Nepali search behaviour, regional keyword clusters, and local market psychology. I am available in person across the Sunsari and Morang districts, and remotely for enterprises across the rest of Nepal and internationally.
              </p>
            </div>
            
            <div>
              <h3 class="font-headline text-lg font-black uppercase text-primary-container mb-2 border-l-4 border-primary-container pl-4">200+ SEO articles published</h3>
              <p class="font-body text-sm text-secondary/80 leading-relaxed pl-5">
                I do not just advise on content architecture; I actively write it. I have authored hyper-successful pieces across leading publications including Ektukra Digital Agency, Gadgets in Nepal, and Fact Nepal.
              </p>
            </div>
            
            <div>
              <h3 class="font-headline text-lg font-black uppercase text-primary-container mb-2 border-l-4 border-primary-container pl-4">Transparent reporting every month</h3>
              <p class="font-body text-sm text-secondary/80 leading-relaxed pl-5">
                My clients know exactly what KPIs moved, exactly what structural changes were deployed, and the precise strategy executing next. I eliminate vague metrics and focus entirely on transparent growth data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: SEO Results -->
      <section class="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low border-b-2 border-primary-container relative">
        <div class="max-w-4xl mx-auto">
          <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Track Record</span>
          <h2 class="font-headline text-3xl md:text-5xl font-black tracking-tighter leading-none text-primary-container uppercase mb-12">
            SEO Results — What Clients Achieved
          </h2>
          
          <div class="bg-white border-2 border-primary-container/10 p-8 shadow-sm">
            <h3 class="font-headline text-xl font-black uppercase text-primary-container mb-6 italic">Case Study 01</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 font-body">
              <div class="col-span-1 border-b md:border-b-0 md:border-r border-primary-container/10 pb-4 md:pb-0 pr-0 md:pr-4">
                <span class="text-[10px] uppercase tracking-widest text-surface-tint font-bold block mb-1">Client</span>
                <p class="text-sm font-semibold text-primary-container">E-commerce business, Biratnagar</p>
              </div>
              
              <div class="col-span-3 space-y-4 text-sm text-secondary/80 leading-relaxed">
                <div>
                  <strong class="text-primary-container font-headline uppercase tracking-wide text-xs block mb-1">Challenge:</strong>
                  No organic traffic, entirely dependent on zero-sum paid ads.
                </div>
                <div>
                  <strong class="text-primary-container font-headline uppercase tracking-wide text-xs block mb-1">Action:</strong>
                  Deployed a full technical audit, comprehensive keyword research for core product pages, and authored 12 authoritative blog posts targeting highly specific buyer-intent keywords.
                </div>
                <div class="bg-green-50 p-4 border-l-4 border-green-600 mt-4 rounded-r-md">
                  <strong class="text-green-800 font-headline uppercase tracking-wide text-xs block mb-1">Result:</strong>
                  <span class="font-medium text-green-900">Page 1 rankings for 14 primary keywords within 5 months. Organic traffic exploded to 1,200 visitors per month. Paid advertising spend was successfully reduced by 60%.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: FAQs -->
      <section class="py-20 md:py-32 px-6 md:px-12 bg-white border-b-2 border-primary-container relative">
        <div class="max-w-4xl mx-auto">
          <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Knowledge Graph</span>
          <h2 class="font-headline text-3xl md:text-5xl font-black tracking-tighter leading-none text-primary-container uppercase mb-12">
            Frequently Asked Questions About SEO in Nepal
          </h2>
          
          <div class="space-y-6 speakable-faq">
            <!-- FAQ 1 -->
            <div class="border-b border-primary-container/10 pb-6 group">
              <h3 class="font-headline text-lg font-bold text-primary-container mb-3 flex items-start gap-4">
                <span class="text-xs opacity-50 mt-1">Q:</span> How much does SEO cost in Nepal?
              </h3>
              <div class="font-body text-sm text-secondary/80 leading-relaxed pl-10">
                <span class="text-xs opacity-50 font-bold block mb-1 ml-[-24px] absolute">A:</span> 
                SEO services in Nepal range from NPR 5,000 to NPR 50,000 per month depending on scope. A local business targeting one city costs less than a national e-commerce campaign. I offer a free consultation to give you a clear quote based on your specific situation.
              </div>
            </div>
            <!-- FAQ 2 -->
            <div class="border-b border-primary-container/10 pb-6 group">
              <h3 class="font-headline text-lg font-bold text-primary-container mb-3 flex items-start gap-4">
                <span class="text-xs opacity-50 mt-1">Q:</span> How long does SEO take to show results in Nepal?
              </h3>
              <div class="font-body text-sm text-secondary/80 leading-relaxed pl-10">
                Most websites in Nepal see measurable improvements within 3 to 6 months. Local keywords in smaller cities like Itahari and Dharan often rank faster — sometimes within 6 to 8 weeks. Competitive national keywords can take 6 to 12 months.
              </div>
            </div>
            <!-- FAQ 3 -->
            <div class="border-b border-primary-container/10 pb-6 group">
              <h3 class="font-headline text-lg font-bold text-primary-container mb-3 flex items-start gap-4">
                <span class="text-xs opacity-50 mt-1">Q:</span> What is the difference between SEO and Google Ads?
              </h3>
              <div class="font-body text-sm text-secondary/80 leading-relaxed pl-10">
                Google Ads gives you traffic immediately but stops the moment you stop paying. SEO takes longer to build but generates free traffic indefinitely. Most Nepali businesses benefit from starting with SEO while using a small Google Ads budget for immediate leads.
              </div>
            </div>
            <!-- FAQ 4 -->
            <div class="border-b border-primary-container/10 pb-6 group">
              <h3 class="font-headline text-lg font-bold text-primary-container mb-3 flex items-start gap-4">
                <span class="text-xs opacity-50 mt-1">Q:</span> Can you do SEO for Nepali language websites?
              </h3>
              <div class="font-body text-sm text-secondary/80 leading-relaxed pl-10">
                Yes. I handle SEO for both English and Nepali language websites, including keyword research in Devanagari script and the specific technical settings required for Nepali-language content.
              </div>
            </div>
            <!-- FAQ 5 -->
            <div class="border-b border-primary-container/10 pb-6 group">
              <h3 class="font-headline text-lg font-bold text-primary-container mb-3 flex items-start gap-4">
                <span class="text-xs opacity-50 mt-1">Q:</span> Do I need a new website to start SEO?
              </h3>
              <div class="font-body text-sm text-secondary/80 leading-relaxed pl-10">
                No. SEO can be done on any existing website. I will audit what you have and optimise it. A rebuild is only recommended when the technical problems are too severe to fix on the existing site.
              </div>
            </div>
            <!-- FAQ 6 -->
            <div class="border-b-0 pb-2 group">
              <h3 class="font-headline text-lg font-bold text-primary-container mb-3 flex items-start gap-4">
                <span class="text-xs opacity-50 mt-1">Q:</span> Who is the best SEO expert in Nepal?
              </h3>
              <div class="font-body text-sm text-secondary/80 leading-relaxed pl-10">
                Ujjwal Rupakheti, based in Itahari, Sunsari, Nepal, is one of the most highly-rated SEO experts in Province No. 1, specialising in technical SEO, local SEO, AEO, and content strategy for Nepali businesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: Target Locations & CTA blocks combined cleanly -->
      <section class="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low border-b-2 border-primary-container relative">
        <div class="max-w-4xl mx-auto text-center">
          <span class="text-surface-tint font-label text-[10px] uppercase tracking-[0.4em] mb-4 block italic">Geography</span>
          <h2 class="font-headline text-3xl md:text-5xl font-black tracking-tighter leading-none text-primary-container uppercase mb-8">
            SEO Services in Itahari, Sunsari and Across Nepal
          </h2>
          <div class="font-body text-base text-secondary/80 leading-relaxed max-w-3xl mx-auto space-y-4 mb-16">
            <p>
              I am based in Itahari, Sunsari — one of the fastest-growing commercial cities in Koshi Province, Nepal. I provide SEO services to clients in Itahari, Biratnagar, Dharan, Inaruwa, Rajbiraj, and remotely to clients in Kathmandu, Pokhara, Lalitpur, and internationally.
            </p>
            <p>
              For clients in the Sunsari and Morang districts I am available for in-person meetings. Remote consultations are available for anyone in Nepal and internationally via Google Meet or Zoom.
            </p>
            <p class="font-semibold text-primary-container pt-2">
              Whether you need an SEO expert in Biratnagar, an SEO specialist in Dharan, or an <a href="/services/consultation/" class="underline decoration-primary-container/30 hover:decoration-primary-container transition-colors">SEO consultant</a> anywhere in Nepal — I can help.
            </p>
            <p class="pt-6 font-mono text-xs uppercase tracking-widest text-[#515f78] border-t border-primary-container/10 inline-block w-full">
              Itahari-4, Sunsari, Koshi Province, Nepal.
            </p>
          </div>
          
          <div class="bg-white border-2 border-primary-container p-10 md:p-16 shadow-2xl relative">
            <h2 class="font-headline text-3xl md:text-4xl font-black tracking-tighter leading-none text-primary-container uppercase mb-6">
              Ready to Rank #1 on Google? Let's Talk.
            </h2>
            <p class="font-body text-sm md:text-base text-secondary/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              If you are serious about growing your business through SEO, I offer a free 30-minute consultation where I review your current website, identify your top 3 ranking opportunities, and give you a clear starting point — with no obligation to hire me.
            </p>
            
            <div class="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 font-body text-sm font-semibold text-primary-container">
              <span class="flex items-center gap-2"><i class="fa-brands fa-whatsapp text-lg"></i> +977 9826304766</span>
              <span class="hidden md:inline text-primary-container/30">|</span>
              <span class="flex items-center gap-2"><i class="fa-regular fa-envelope text-lg"></i> work@ujjwalrupakheti.com.np</span>
            </div>
            
            <a href="/contact/" class="inline-block bg-primary-container text-white px-10 py-5 font-headline uppercase tracking-[0.2em] text-[11px] font-black hover:bg-[#1a2d46] hover:-translate-y-1 transition-all shadow-[0_10px_30px_rgba(13,28,50,0.15)]">
              Book Your Free SEO Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
"""

content = re.sub(
    r'<main class="ml-0 md:ml-16 pt-20 md:pt-24 min-h-screen">.*?</main>',
    main_new,
    content,
    flags=re.DOTALL
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated seo-expert-nepal successfully")
