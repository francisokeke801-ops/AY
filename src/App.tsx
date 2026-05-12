/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { PriceCalculator } from './components/PriceCalculator';
import { OrderTracking } from './components/OrderTracking';
import { PaymentDetails } from './components/PaymentDetails';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ChatBot } from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 scroll-smooth relative overflow-x-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[-100px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <PriceCalculator />
        <OrderTracking />
        <PaymentDetails />
        <Testimonials />
      </main>

      <Footer />

      
      {/* Floating Elements */}
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
