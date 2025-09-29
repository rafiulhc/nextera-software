export const metadata = {
  title: 'Nextera Software — World-class Software & AI from Bangladesh',
  description: 'Premium software & ITES exporter. Frontend, Backend, DevOps, AI, Chatbots, Blockchain, Call-center VA, CRM, Trading, APIs — export-compliant with BASIS/NBR/BB documentation.',
  icons: { icon: '/logo.svg' },
  openGraph: {
    title: 'Nextera Software',
    description: 'Premium Software & AI from Bangladesh — export-compliant.',
    url: 'https://nextera.example.com',
    siteName: 'Nextera Software',
    images: [{ url: '/logo.svg', width: 200, height: 40 }],
    locale: 'en_US',
    type: 'website',
  }
};

import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
