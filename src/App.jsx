import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Cloud, Cpu, Zap, Shield, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import './App.css'

// Import logo assets
import logoHorizontal from './assets/JuniperaLogoHorizontal-wText-v2.png'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-sky-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoHorizontal} alt="Junipera" className="h-8 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">What We Do</a>
                <a href="#about" className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered Cloud Modernization
            <span className="block text-sky-500 mt-2">for Enterprises</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            We empower enterprises to accelerate their digital transformation through intelligent cloud solutions and AI integration.
          </p>
          <div className="mt-10">
            <a href="#contact">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Comprehensive solutions for your cloud modernization journey
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-xl">AI Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Deep expertise in artificial intelligence to integrate intelligent solutions into your modernized applications, from ML model development to AI strategy implementation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-xl">Cloud Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  End-to-end guidance from initial assessment and planning to execution and post-migration optimization, minimizing disruption and maximizing cloud benefits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-xl">App Modernization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Transform monolithic applications into agile, scalable microservices architectures that thrive in cloud environments and accelerate innovation cycles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-xl">Architecture Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Comprehensive analyses of your existing applications, infrastructure, and data to identify modernization opportunities and design tailored roadmaps.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Junipera
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We are a collective of passionate AI specialists, cloud architects, and enterprise consultants dedicated to helping businesses navigate digital transformation. Our mission is to be your trusted partner, delivering innovative solutions that unlock the full potential of cloud technologies.
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Through a collaborative approach, we work closely with your teams to foster knowledge transfer and build internal capabilities using agile methodologies that ensure flexibility and responsiveness.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Let's Start the Conversation
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Ready to accelerate your cloud modernization journey?
            </p>
          </div>

          <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Contact Junipera</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@junipera.io" className="text-lg hover:underline">info@junipera.io</a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+16504796140" className="text-lg hover:underline">(650) 479-6140</a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">2108 N Street Suite N, Sacramento, CA 95816</span>
                </div>
              </div>
              <p className="text-sky-100 text-lg">
                Get in touch today for a free consultation and discover how we can help transform your enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logoHorizontal} alt="Junipera" className="h-8 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Empowering enterprises to unlock their cloud potential through AI-powered modernization solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI Consulting</li>
                <li>Cloud Migration</li>
                <li>App Modernization</li>
                <li>Architecture Assessment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Junipera. All rights reserved. | junipera.io</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

