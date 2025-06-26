"use client"


  Truck,
  Warehouse,
  Package,
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  Clock,
  Shield,
  Zap,
  Play,
} from "lucide-react"

function CountUp({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000
      const increment = end / (duration / 16)
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(counter)
    }, 1000)

    return () => clearTimeout(timer)
  }, [end])

  return <span>{count.toLocaleString()}</span>
}

export default function LogisticsWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Incredible service—always on time! Their logistics solutions have transformed our supply chain efficiency.",
      author: "John D.",
      role: "Supply Chain Manager",
      company: "Dubai Enterprises",
    },
    {
      text: "Professional, reliable, and cost-effective. We've been using their services for 3 years now.",
      author: "Sarah M.",
      role: "Operations Director",
      company: "Riyadh Logistics Co.",
    },
    {
      text: "Outstanding customer support and tracking capabilities. Highly recommend for any business.",
      author: "Mike R.",
      role: "Warehouse Manager",
      company: "Cairo Distribution",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sticky Social Media Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-slate-900/80 backdrop-blur-sm border-l border-yellow-400/20 rounded-l-lg shadow-lg">
          <div className="flex flex-col">
            <a
              href="#"
              className="p-4 text-gray-400 hover:text-white hover:bg-yellow-400/10 transition-all duration-300 group"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="p-4 text-gray-400 hover:text-white hover:bg-yellow-400/10 transition-all duration-300 group border-t border-slate-700/50"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="p-4 text-gray-400 hover:text-white hover:bg-yellow-400/10 transition-all duration-300 group border-t border-slate-700/50"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="p-4 text-gray-400 hover:text-white hover:bg-yellow-400/10 transition-all duration-300 group border-t border-slate-700/50"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="https://wa.me/971412345678"
              className="p-4 text-gray-400 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300 group border-t border-slate-700/50"
              aria-label="Contact us on WhatsApp"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-yellow-400/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-yellow-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Al Daraj Cargo Transport
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </nav>

          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-semibold shadow-lg">
            Get a Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Modern logistics hub with trucks and cargo containers"
            fill
            className="object-cover opacity-20 animate-slow-zoom"
          />
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Truck className="h-8 w-8 text-yellow-400/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <Package className="h-6 w-6 text-orange-500/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float-slow">
            <Warehouse className="h-10 w-10 text-yellow-400/30" />
          </div>
          <div className="absolute top-60 right-40 animate-float">
            <MapPin className="h-7 w-7 text-orange-500/30" />
          </div>
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-orange-500/20 rounded-full animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block animate-slide-up">Logistics,</span>{" "}
              <span className="inline-block animate-slide-up-delayed bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse-glow">
                Simplified.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up opacity-0 animation-delay-500">
              Fast. Reliable. Built for Your Business Across MENA Region.
            </p>

            <div className="animate-fade-in-up opacity-0 animation-delay-700">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl animate-bounce-subtle group"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up opacity-0 animation-delay-1000">
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-200">
                <CheckCircle className="h-6 w-6 text-green-400 animate-pulse" />
                <span className="text-lg">
                  <CountUp end={10000} />+ Successful Shipments
                </span>
              </div>
              <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-200">
                <CheckCircle className="h-6 w-6 text-green-400 animate-pulse animation-delay-300" />
                <span className="text-lg">24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="py-20 bg-slate-800 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8">
              See Al Daraj Operations in Action
            </h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Al Daraj Cargo Transport operations video thumbnail showing modern warehouse and fleet"
                width={1000}
                height={600}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Play className="h-12 w-12 text-slate-900 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Coverage Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-orange-500/10 rounded-full animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Experience */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8">
                <CountUp end={15} />+ Years of Excellence
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Since 2009, we've been revolutionizing logistics across the MENA region with cutting-edge technology and
                unmatched reliability.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-yellow-400/20">
                  <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">
                    <CountUp end={50} />+
                  </div>
                  <p className="text-gray-400 text-sm">Industry Awards</p>
                </div>

                <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-orange-500/20">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-2">
                    <CountUp end={500} />+
                  </div>
                  <p className="text-gray-400 text-sm">Expert Team</p>
                </div>
              </div>
            </div>

            {/* Right side - MENA Coverage */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-yellow-400/20">
                <h3 className="text-3xl font-bold text-white mb-6">Serving 10+ MENA Countries</h3>

                <div className="relative mb-8">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="MENA region map showing LogiFlow coverage across Middle East and North Africa"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-xl"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "🇦🇪 UAE",
                    "🇸🇦 Saudi Arabia",
                    "🇪🇬 Egypt",
                    "🇯🇴 Jordan",
                    "🇰🇼 Kuwait",
                    "🇶🇦 Qatar",
                    "🇧🇭 Bahrain",
                    "🇴🇲 Oman",
                    "🇱🇧 Lebanon",
                    "🇲🇦 Morocco",
                  ].map((country, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="h-12 w-12" />,
                title: "Freight Shipping",
                description: "Reliable freight transportation across all major routes",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <MapPin className="h-12 w-12" />,
                title: "Road Transportation",
                description: "Efficient road transport solutions for local and long-distance",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Warehouse className="h-12 w-12" />,
                title: "Warehousing Solutions",
                description: "Secure storage facilities with advanced inventory management",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Package className="h-12 w-12" />,
                title: "Inventory Handling",
                description: "Professional handling and management of your inventory",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border border-yellow-400/20 bg-slate-900/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} - Professional logistics service`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <div className="text-yellow-400 mb-4 group-hover:text-orange-500 transition-colors duration-300 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-orange-500/10 rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">Simple 3-Step Process</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Request a Quote",
                  description: "Tell us about your shipping needs and get an instant quote",
                  image: "/placeholder.svg?height=250&width=350",
                },
                {
                  step: "02",
                  title: "Confirm & Schedule Pickup",
                  description: "Confirm your booking and schedule a convenient pickup time",
                  image: "/placeholder.svg?height=250&width=350",
                },
                {
                  step: "03",
                  title: "We Deliver Your Freight",
                  description: "Track your shipment in real-time until safe delivery",
                  image: "/placeholder.svg?height=250&width=350",
                },
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={`Step ${step.step}: ${step.title} process illustration`}
                      width={350}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>

                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-24 -right-4 h-8 w-8 text-yellow-400/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-slate-900/70"></div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Delivering Seamless Logistics Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <CountUp end={1200} />+
              </div>
              <p className="text-lg text-gray-300 font-medium">Enterprises</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <CountUp end={60000} />+
              </div>
              <p className="text-lg text-gray-300 font-medium">Trucks</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <CountUp end={28} />+
              </div>
              <p className="text-lg text-gray-300 font-medium">Locations</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                <CountUp end={15} />+
              </div>
              <p className="text-lg text-gray-300 font-medium">Years Experience</p>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-yellow-400/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-orange-500/20 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-2 h-2 bg-yellow-400/30 rounded-full animate-ping"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-500/30 rounded-full animate-ping animation-delay-500"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Why Choose LogiFlow?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading the logistics industry with innovation, reliability, and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Secure & Reliable",
                description: "Advanced security measures and 99.9% delivery success rate",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Fast Delivery",
                description: "Express shipping options with real-time tracking",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "24/7 Support",
                description: "Round-the-clock customer service across all time zones",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border border-yellow-400/20 bg-slate-800/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={`${feature.title} - Al Daraj Cargo Transport advantage`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-yellow-400">{feature.icon}</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-40 h-40 border border-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 border border-orange-500/10 rounded-full animate-pulse animation-delay-1000"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              Client Testimonials
            </h2>
            <div className="flex items-center justify-center space-x-8 text-yellow-400">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">2M+</span>
                <span className="text-gray-300">Tons Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">98%</span>
                <span className="text-gray-300">Client Retention</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="bg-slate-900/80 backdrop-blur-sm border border-yellow-400/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl mb-6 text-gray-300">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-white">{testimonials[currentTestimonial].author}</p>
                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                    <p className="text-yellow-400 text-sm">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="bg-transparent border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="bg-transparent border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/90 to-orange-500/90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Move Your Goods?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom quote tailored to your specific logistics needs across MENA
          </p>
          <Button
            size="lg"
            className="bg-slate-900 text-yellow-400 hover:bg-slate-800 px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Get a Custom Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm opacity-75">Quick, No Obligation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Truck className="h-8 w-8 text-yellow-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Al Daraj Cargo Transport
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Your trusted partner for all logistics and transportation needs across the MENA region.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Freight Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Road Transportation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Warehousing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Inventory Handling
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-400">info@aldarajcargo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-400">+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-400">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-400/20 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Al Daraj Cargo Transport. All rights reserved. Serving the MENA region with
              excellence.
            </p>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(249, 115, 22, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(249, 115, 22, 0.8), 0 0 30px rgba(249, 115, 22, 0.6);
          }
        }

        @keyframes bounceSutble {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes scrollIndicator {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slide-up-delayed {
          animation: slideUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 2s;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite 1s;
        }

        .animate-slow-zoom {
          animation: slowZoom 20s ease-in-out infinite alternate;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSutble 2s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
