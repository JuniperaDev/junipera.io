import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Cloud, Cpu, Zap, Shield, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import './App.css'

// Import logo assets
import logoHorizontal from './assets/JuniperaLogoHorizontal-wText-v2.png'
import logoIcon from './assets/JuniperaLogoIcononly.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

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
                <a href="#services" className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-sky-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Unlocking Your
                <span className="text-sky-500"> Potential</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We empower enterprises to accelerate their next level of business evolution through AI and cloud modernization.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3">
                  Transform Your Business Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-64 object-contain p-8"
                    src={logoIcon}
                    alt="Junipera Cloud Solutions"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Comprehensive AI-powered solutions for your cloud modernization journey
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

      {/* Why Choose Junipera Section */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Junipera
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              What sets us apart in the enterprise modernization landscape
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Expertise</h3>
              <p className="text-gray-600 mb-4">
                We understand the unique challenges and complexities faced by large enterprises. Our team comprises seasoned professionals with extensive experience in delivering large-scale IT transformations.
              </p>
              <p className="text-gray-600">
                Our solutions are not only innovative but also practical and aligned with your business objectives.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Methodology</h3>
              <p className="text-gray-600 mb-4">
                Our approach is built on a foundation of best practices and proven methodologies. We combine industry-leading frameworks with our proprietary AI-driven insights.
              </p>
              <p className="text-gray-600">
                Our transparent process keeps you informed and in control every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Driven Insights</h3>
              <p className="text-gray-600 mb-4">
                What sets Junipera apart is our deep integration of AI into our consulting process. We leverage advanced analytics and machine learning to identify patterns and predict potential issues.
              </p>
              <p className="text-gray-600">
                This leads to faster, more efficient, and more effective transformations.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-4">
                We have a track record of helping leading enterprises achieve their cloud and modernization goals. Our success stories span various industries.
              </p>
              <p className="text-gray-600">
                We demonstrate our ability to deliver tangible business value and drive significant ROI for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                About Junipera
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At Junipera, our mission is to be the trusted partner for enterprises navigating the complexities of digital transformation. We are committed to delivering innovative, AI-powered solutions that unlock the full potential of cloud technologies.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team</h3>
                <p className="text-gray-600 mb-6">
                  Our team is a collective of passionate AI specialists, cloud architects, and enterprise consultants. With diverse backgrounds and deep industry knowledge, we bring a holistic perspective to every project.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600">
                  We believe in a collaborative and iterative approach. We work closely with your internal teams, fostering knowledge transfer and building internal capabilities. Our agile methodologies ensure flexibility and responsiveness.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg p-8 text-white">
                <div className="text-center">
                  <img src={logoIcon} alt="Junipera" className="h-24 w-24 mx-auto mb-6 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                  <p className="text-sky-100 mb-6">
                    Let's discuss how our AI-powered solutions can accelerate your cloud modernization journey.
                  </p>
                  <Button variant="secondary" size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Ready to accelerate your cloud modernization journey? Contact Junipera today.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your modernization needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
                      Start Your Transformation Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-sky-500 mr-3" />
                    <span className="text-gray-600">info@junipera.io</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-sky-500 mr-3" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-sky-500 mr-3" />
                    <span className="text-gray-600">2108 N Street Suite N, Sacramento, CA 95816</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Why Wait?</h3>
                <p className="text-sky-100 mb-4">
                  Every day you delay modernization is a day your competitors get ahead. Let's change that.
                </p>
                <ul className="text-sky-100 space-y-2 text-sm">
                  <li>• Free initial consultation</li>
                  <li>• Custom modernization roadmap</li>
                  <li>• ROI analysis and projections</li>
                  <li>• Risk assessment and mitigation</li>
                </ul>
              </div>
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

