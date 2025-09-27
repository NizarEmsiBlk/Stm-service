'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { 
  ChevronDownIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  AcademicCapIcon,
  CubeIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.team-dropdown')) {
        setIsTeamDropdownOpen(false);
      }
    };

    if (isTeamDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isTeamDropdownOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsTeamDropdownOpen(false); // Close dropdown when navigating
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="STM Services Logo"
                  width={55}
                  height={55}
                  className="rounded-2xl shadow-xl ring-4 ring-white/20 hover:ring-blue-300/50 transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">STM Services</h1>
                <p className="text-sm bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">Wind Turbine Maintenance Tangier</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-1 items-center">
              <button onClick={() => scrollToSection('home')} className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium">Services</button>
              <button onClick={() => scrollToSection('advantages')} className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium">Advantages</button>
              
              {/* Team Dropdown Menu */}
              <div className="relative team-dropdown">
                <button 
                  onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                  className="flex items-center space-x-1 px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium"
                >
                  <span>Team</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isTeamDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isTeamDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100/50 py-2 z-50 animate-fade-in-up">
                    <div className="px-3 py-2 text-xs font-semibold text-blue-600 uppercase tracking-wider border-b border-blue-100/50 mb-2">
                      Team Sections
                    </div>
                    
                    <button
                      onClick={() => scrollToSection('team-safety')}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">👥</span>
                      </div>
                      <div>
                        <div className="font-medium">Our Team</div>
                        <div className="text-xs text-gray-500">Safety first, teamwork always</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => scrollToSection('expertise')}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">⚙️</span>
                      </div>
                      <div>
                        <div className="font-medium">Our Expertise</div>
                        <div className="text-xs text-gray-500">Technical excellence in action</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => scrollToSection('emergency-response')}
                      className="w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center space-x-3 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">⚡</span>
                      </div>
                      <div>
                        <div className="font-medium">Emergency Response</div>
                        <div className="text-xs text-gray-500">Critical maintenance 24/7</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
              
              <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-500/15 to-blue-800/10"></div>
        
        {/* Moving Turbine Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Extra large turbine image - main hero background */}
          <div className="absolute -top-32 -right-40 opacity-12 animate-turbine-float">
            <Image
              src="/turbine.png"
              alt="Wind Turbine Background"
              width={1200}
              height={1200}
              className="object-contain transform rotate-12 hover:rotate-15 transition-transform duration-1000"
            />
          </div>
          
          {/* Large turbine image - left side */}
          <div className="absolute -bottom-40 -left-32 opacity-10 animate-turbine-float-delayed">
            <Image
              src="/turbine.png"
              alt="Wind Turbine Background"
              width={900}
              height={900}
              className="object-contain transform -rotate-8 hover:rotate-3 transition-transform duration-1000"
            />
          </div>
          
          {/* Medium turbine image - top left */}
          <div className="absolute -top-20 left-1/4 opacity-8 animate-turbine-float-slow">
            <Image
              src="/turbine.png"
              alt="Wind Turbine Background"
              width={700}
              height={700}
              className="object-contain transform rotate-6 hover:-rotate-2 transition-transform duration-1000"
            />
          </div>
          
          {/* Giant turbine image - bottom center */}
          <div className="absolute -bottom-48 right-1/4 opacity-15 animate-turbine-float">
            <Image
              src="/turbine.png"
              alt="Wind Turbine Background"
              width={1400}
              height={1400}
              className="object-contain transform -rotate-15 hover:rotate-5 transition-transform duration-1000"
            />
          </div>
          
          {/* Small accent turbine - top right */}
          <div className="absolute -top-12 right-1/3 opacity-6 animate-turbine-float-delayed">
            <Image
              src="/turbine.png"
              alt="Wind Turbine Background"
              width={500}
              height={500}
              className="object-contain transform rotate-20 hover:rotate-25 transition-transform duration-1000"
            />
          </div>
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left side - Content */}
          <div className="text-left lg:text-left order-2 lg:order-1 animate-slide-in-left">
            <div className="relative mb-8 lg:hidden flex justify-center">
              <Image
                src="/logo.png"
                alt="STM Services Logo"
                width={120}
                height={120}
                className="rounded-3xl shadow-2xl ring-8 ring-white/20 hover:ring-blue-300/30 transition-all duration-500"
              />
            </div>
            
            <div className="hidden lg:block relative mb-8">
              <Image
                src="/logo.png"
                alt="STM Services Logo"
                width={100}
                height={100}
                className="rounded-2xl shadow-xl ring-4 ring-white/20 hover:ring-blue-300/30 transition-all duration-500"
              />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900 bg-clip-text text-transparent mb-6 leading-tight">
              STM Services
            </h1>
            
            <p className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Wind Turbine Maintenance Tangier
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light max-w-lg">
              Professional wind turbine maintenance and repair services in Tangier. 
              Ensuring optimal performance and longevity of your renewable energy assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-600/25"
              >
                <span className="relative z-10">Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-blue-600/50 text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative group animate-float">
              {/* Main hero image with spectacular effects */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-2">
                <div className="overflow-hidden rounded-2xl relative">
                  <Image
                    src="/hero.png"
                    alt="STM Services - Professional Wind Turbine Maintenance"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-all duration-1000"
                    priority
                  />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-2xl"></div>
                  
                  {/* Professional badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                    <span className="text-sm font-semibold">Professional Service</span>
                  </div>
                  
                  {/* Animated pulse rings */}
                  <div className="absolute top-4 right-4 w-4 h-4">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                    <div className="absolute inset-1 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                </div>
              </div>
              
              {/* Floating statistics */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-blue-100 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-xs text-gray-600 font-medium">Service</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-blue-100 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-xs text-gray-600 font-medium">Reliable</div>
                </div>
              </div>
              
              {/* Premium glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-indigo-500/15 to-blue-600/10 rounded-3xl blur-3xl -z-10 group-hover:from-blue-400/20 group-hover:via-indigo-500/25 group-hover:to-blue-600/20 transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* Center the content when needed */}
        <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 hidden">
          <div className="animate-fade-in-up">
            <div className="relative mb-12">
              <Image
                src="/logo.png"
                alt="STM Services Logo"
                width={140}
                height={140}
                className="mx-auto rounded-3xl shadow-2xl ring-8 ring-white/20 hover:ring-blue-300/30 transition-all duration-500"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-2xl opacity-15 animate-pulse"></div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900 bg-clip-text text-transparent mb-8 animate-slide-in-left leading-tight">
              STM Services
            </h1>
            
            <div className="relative mb-10">
              <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-slide-in-right">
                Wind Turbine Maintenance Tangier
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-600 mb-14 max-w-3xl mx-auto animate-fade-in leading-relaxed font-light">
              Professional wind turbine maintenance and repair services in Tangier. 
              Ensuring optimal performance and longevity of your renewable energy assets with cutting-edge technology and expert care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Our Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative bg-white/10 backdrop-blur-sm border-2 border-blue-600/50 text-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon 
            className="w-8 h-8 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
            onClick={() => scrollToSection('services')}
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-30 animate-float"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              {/* Professional Technician Image Section */}
              <div className="relative group">
                {/* Main image container with modern styling */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/technician.png"
                    alt="STM Services Technician performing wind turbine maintenance"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-blue-900 font-semibold text-sm">Professional Service</span>
                  </div>
                  
                  {/* Bottom content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Expert Technicians at Work</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our certified professionals ensure the highest standards of wind turbine maintenance and safety.
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl blur-2xl -z-10 group-hover:from-blue-400/30 group-hover:to-indigo-500/30 transition-all duration-700"></div>
                
                {/* Stats overlay cards */}
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Safety Record</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About STM Services</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Tangier, STM Services is your trusted partner for wind turbine maintenance and repair. 
                With years of experience in the renewable energy sector, we provide comprehensive solutions to keep your wind energy systems operating at peak performance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of certified technicians combines technical expertise with a commitment to safety and excellence. 
                We understand the critical importance of maintaining renewable energy infrastructure and work tirelessly to minimize downtime while maximizing efficiency.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Support</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-gray-600">Turbines Serviced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive wind turbine maintenance solutions to keep your renewable energy systems running at peak efficiency
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Preventive Maintenance",
                description: "Regular inspections and maintenance to prevent costly breakdowns and extend turbine lifespan.",
                icon: "🔧"
              },
              {
                title: "Emergency Repairs",
                description: "24/7 emergency repair services to minimize downtime and restore operations quickly.",
                icon: "⚡"
              },
              {
                title: "Component Replacement",
                description: "Professional replacement of turbine components with high-quality parts and expert installation.",
                icon: "🔄"
              },
              {
                title: "Performance Optimization",
                description: "Advanced diagnostics and optimization to maximize energy output and efficiency.",
                icon: "📊"
              },
              {
                title: "Safety Inspections",
                description: "Comprehensive safety assessments to ensure compliance with industry standards and regulations.",
                icon: "🛡️"
              },
              {
                title: "Technical Consultancy",
                description: "Expert advice on turbine upgrades, maintenance strategies, and operational improvements.",
                icon: "💡"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up border border-white/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Icon with modern styling */}
                <div className="relative mb-6">
                  <div className="text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
                
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Advantages Section */}
      <section id="advantages" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 rounded-full blur-xl animate-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Our Advantages
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our competitive advantages that make us the preferred choice for wind turbine maintenance in Tangier
            </p>
            <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                title: "Fast Response Times",
                icon: <ClockIcon className="w-12 h-12" />,
                description: "Quick mobilization and rapid on-site response"
              },
              {
                title: "Certified Technicians",
                icon: <AcademicCapIcon className="w-12 h-12" />,
                description: "Highly trained and certified maintenance experts"
              },
              {
                title: "Cutting-edge Tools & Drones",
                icon: <CubeIcon className="w-12 h-12" />,
                description: "Advanced diagnostic equipment and drone technology"
              },
              {
                title: "Comprehensive Reports",
                icon: <DocumentTextIcon className="w-12 h-12" />,
                description: "Detailed maintenance reports and recommendations"
              },
              {
                title: "Safety First",
                icon: <ShieldCheckIcon className="w-12 h-12" />,
                description: "Strict adherence to safety protocols and standards"
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 overflow-hidden group-hover:border-blue-300/50 h-full flex flex-col justify-between min-h-[320px]">
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                  
                  {/* Animated pulse effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Top section with icon */}
                  <div className="flex flex-col items-center flex-grow">
                    {/* Icon container with enhanced animation */}
                    <div className="relative mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 inline-block shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-blue-600 group-hover:to-indigo-700">
                        <div className="text-white group-hover:scale-125 transition-transform duration-300 flex justify-center animate-pulse group-hover:animate-none">
                          {advantage.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 group-hover:from-blue-700 group-hover:to-indigo-800 transition-all duration-300 relative z-10 text-center">
                      {advantage.title}
                    </h3>
                  </div>
                  
                  {/* Bottom section with description */}
                  <div className="mt-auto">
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10 text-center">
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* Animated bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                  
                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team & Safety Section */}
      <section id="team-safety" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-blue-500/20 backdrop-blur-sm text-blue-200 px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase border border-blue-400/30">Our Team</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Safety First, Teamwork Always
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our certified technicians work as a unified team, prioritizing safety protocols and leveraging collective expertise to deliver exceptional wind turbine maintenance services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Technicians Image */}
            <div className="animate-slide-in-left">
              <div className="relative group">
                {/* Main image with premium frame */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800/20 to-indigo-800/20 p-3 backdrop-blur-sm border border-white/10">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/technicians.png"
                      alt="STM Services team of technicians working together with safety equipment"
                      width={700}
                      height={500}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay for premium look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent rounded-2xl"></div>
                    
                    {/* Safety badge overlay */}
                    <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        Safety Certified
                      </span>
                    </div>
                    
                    {/* Team size indicator */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-2 rounded-full shadow-lg">
                      <span className="text-sm font-bold">Professional Team</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating stats cards around the image */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-blue-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">0</div>
                    <div className="text-xs text-gray-600 font-medium">Accidents</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-blue-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">15+</div>
                    <div className="text-xs text-gray-600 font-medium">Team Members</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-blue-100 transform -translate-y-1/2">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">100%</div>
                    <div className="text-xs text-gray-600 font-medium">Safety Record</div>
                  </div>
                </div>
                
                {/* Premium glow effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-indigo-500/10 to-blue-600/10 rounded-3xl blur-3xl -z-10 group-hover:from-blue-400/20 group-hover:via-indigo-500/20 group-hover:to-blue-600/20 transition-all duration-700"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                {/* Safety First */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Safety First Protocol</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Every team member is equipped with advanced safety gear and follows strict protocols. Our zero-accident record speaks to our unwavering commitment to worker safety.
                    </p>
                  </div>
                </div>
                
                {/* Team Collaboration */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Team Collaboration</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Our technicians work in coordinated teams, combining individual expertise with collective problem-solving to ensure efficient and thorough maintenance operations.
                    </p>
                  </div>
                </div>
                
                {/* Advanced Equipment */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Professional Equipment</h3>
                    <p className="text-blue-100 leading-relaxed">
                      State-of-the-art tools and safety equipment ensure our team can handle any maintenance challenge while maintaining the highest safety standards.
                    </p>
                  </div>
                </div>
                
                {/* Continuous Training */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Continuous Training</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Regular training sessions and certifications keep our team updated with the latest safety protocols and maintenance techniques in the wind energy industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise in Action Section */}
      <section id="expertise" className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
              Excellence in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch our certified technicians perform precision maintenance on wind turbines with cutting-edge equipment and unmatched expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Safety Protocols</h3>
                    <p className="text-gray-600">Every maintenance operation follows strict safety standards with specialized equipment and certified procedures.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Precision Maintenance</h3>
                    <p className="text-gray-600">Our technicians use state-of-the-art tools and techniques to ensure optimal turbine performance and longevity.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Documentation</h3>
                    <p className="text-gray-600">Complete maintenance reports and recommendations ensure transparency and future planning.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Technician image */}
            <div className="animate-slide-in-right">
              <div className="relative group">
                {/* Main image with modern frame */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-2">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/technician.png"
                      alt="Professional technician performing wind turbine maintenance"
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Floating stats cards */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">99.9%</div>
                    <div className="text-sm text-gray-600 font-medium">Uptime Rate</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">24h</div>
                    <div className="text-sm text-gray-600 font-medium">Response Time</div>
                  </div>
                </div>
                
                {/* Glowing background effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/10 via-indigo-500/10 to-blue-600/10 rounded-3xl blur-3xl -z-10 group-hover:from-blue-400/20 group-hover:via-indigo-500/20 group-hover:to-blue-600/20 transition-all duration-700"></div>
                
                {/* Professional badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold">Certified Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Maintenance Section */}
      <section id="emergency-response" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Dramatic background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-red-500/20 backdrop-blur-sm text-red-200 px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase border border-red-400/30">Emergency Response</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 mt-6">
              Critical Maintenance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600">
                Under Extreme Conditions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              When weather conditions are harsh and turbines face critical issues, our expert technicians are ready to respond. 
              Safety protocols, professional equipment, and years of experience ensure successful maintenance even in the most challenging environments.
            </p>
          </div>

          {/* Cards positioned around the central image */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Top Cards - Above Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Emergency Response Card - Top Left */}
              <div className="group bg-slate-800/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:border-red-500/30 hover:bg-slate-800/80 animate-slide-in-left">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 group-hover:scale-110 transition-all duration-500">
                    <span className="text-white text-3xl">⚡</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors duration-300">Emergency Response</h3>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      24/7 emergency maintenance with rapid response times for urgent repairs in adverse conditions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Safety Protocols Card - Top Right */}
              <div className="group bg-slate-800/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-500/30 hover:bg-slate-800/80 animate-slide-in-right">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-500">
                    <span className="text-white text-3xl">🔒</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">Safety Protocols</h3>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      Professional harness systems and weather monitoring for extreme height safety operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Image */}
            <div className="flex justify-center mb-12">
              <div className="relative group animate-slide-in-up">
                {/* Dramatic lighting effects */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-orange-500/20 to-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                
                {/* Main image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 animate-float w-full max-w-2xl">
                  <Image
                    src="/technician3.png"
                    alt="Technician performing emergency maintenance on wind turbine in windy conditions"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  
                  {/* Dramatic overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/40 to-red-900/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/10 to-red-600/20"></div>
                  
                  {/* Weather effect overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-400/20 via-transparent to-slate-600/20 animate-pulse"></div>
                  </div>
                  
                  {/* Status indicators overlay */}
                  <div className="absolute bottom-6 right-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-2 border border-slate-700/50">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs font-semibold">SAFETY SECURED</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-2 border border-slate-700/50">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-orange-400 text-xs font-semibold">HIGH RESOLUTION</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accent elements */}
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-400/60"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-400/60"></div>
              </div>
            </div>

            {/* Bottom Cards - Below Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Precision Maintenance Card - Bottom Left */}
              <div className="group bg-slate-800/60 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:border-green-500/30 hover:bg-slate-800/80 animate-slide-in-left delay-200">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/25 group-hover:scale-110 transition-all duration-500">
                    <span className="text-white text-3xl">🎯</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-200 transition-colors duration-300">Precision Maintenance</h3>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      High-resolution diagnostic tools ensuring quality control and detailed reporting for all operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Documentation Card - Bottom Right */}
              <div className="group bg-gradient-to-br from-red-900/40 via-red-800/30 to-orange-900/40 backdrop-blur-sm rounded-3xl p-6 border border-red-700/40 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:border-red-500/50 hover:from-red-900/50 hover:to-orange-900/50 animate-slide-in-right delay-200">
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-red-500/30 group-hover:scale-110 transition-all duration-500">
                    <span className="text-white text-3xl">📸</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">Documentation</h3>
                    <p className="text-red-100 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      Professional photography documenting safety protocols and maintenance excellence in extreme conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to optimize your wind turbine performance? Contact us today for a consultation or emergency service.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-gray-600">+(212) 539 32 41 71</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600">info@stmservices.ma</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="text-gray-600">Tangier, Morocco</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <form className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="STM Services Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">STM Services</h3>
                <p className="text-blue-300 text-sm">Wind Turbine Maintenance Tangier</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-300 mb-2">© 2024 STM Services. All rights reserved.</p>
              <p className="text-blue-400 text-sm">Powering sustainable energy solutions in Morocco</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
