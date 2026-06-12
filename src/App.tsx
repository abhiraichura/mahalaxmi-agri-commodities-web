import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThreeBackground } from './components/ThreeBackground';
import { HeroSEO } from './components/HeroSEO';
import { MarketDataGrid } from './components/MarketDataGrid';
import { CommodityLedger } from './components/CommodityLedger';

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "B2BBusiness",
    "name": "Mahalaxmi Agri Commodities",
    "image": "https://yourwebsite.com/logo.png",
    "@id": "https://yourwebsite.com",
    "url": "https://yourwebsite.com",
    "telephone": "INSERT_PHONE",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "description": "Premier B2B agriculture commodity brokerage based in Rajkot, Gujarat. Specializing in bulk procurement, risk management, and export of wheat, sugar, and oilseeds.",
    "areaServed": "Worldwide",
    "founder": {
      "@type": "Person",
      "name": "Kishan Raichura"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Mahalaxmi secure quality in bulk commodity exports?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We deploy a multi-stage quality assurance protocol, working directly with vetted growers in Gujarat and central India. Every bulk shipment undergoes independent assaying prior to port transit, guaranteeing exact specifications."
        }
      },
      {
        "@type": "Question",
        "name": "What are the standard terms for international bulk procurement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We facilitate institutional trades starting at 100 Metric Tons. Our desk handles end-to-end contracting, real-time price discovery, and FOB/CIF logistics coordination out of major Indian ports."
        }
      }
    ]
  };

  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-brand-black text-brand-light selection:bg-brand-pink">
        <Helmet>
          <title>Mahalaxmi Agri Commodities | Institutional Brokerage Rajkot</title>
          <meta name="description" content="Premier B2B agriculture commodity brokerage in Rajkot, Gujarat. Global bulk procurement, market advisory, and secure supply chains for wheat, sugar, and oilseeds." />
          <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        {/* 3D WebGL Engine Layer */}
        <ThreeBackground />

        {/* UI & Content Layer */}
        <main className="relative z-10 w-full flex flex-col">
          <HeroSEO />
          <MarketDataGrid />
          <CommodityLedger />
          
          <footer className="w-full border-t border-white/5 py-12 px-6 md:px-12 lg:px-24 text-center text-brand-gray text-sm font-medium">
            <p>© {new Date().getFullYear()} Mahalaxmi Agri Commodities. Entity headquartered in Rajkot, Gujarat, India.</p>
          </footer>
        </main>
      </div>
    </HelmetProvider>
  );
}
