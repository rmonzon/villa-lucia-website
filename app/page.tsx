"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Wifi, Car, Waves, Coffee, Users, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function VillaLuciaLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 8

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-playfair text-2xl font-bold text-foreground">Villa Lucia Vacation Rental</div>
            <div className="hidden md:flex space-x-8">
              <a href="#overview" className="text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </a>
              <a href="#amenities" className="text-muted-foreground hover:text-foreground transition-colors">
                Amenities
              </a>
              <a href="#location" className="text-muted-foreground hover:text-foreground transition-colors">
                Location
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-florida-villa-with-pool-and-palm-trees-at-s.jpg"
            alt="Villa Lucia exterior view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
            Premium Vacation Home in Florida
          </Badge>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-balance">Villa Lucia</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            {
              "Experience luxury living in the heart of Cape Coral, FL with premium amenities, and unforgettable memories"
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calendar className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-muted-foreground">Guest Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Bedrooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">Max Guests</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Bathrooms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Luxury Experience</Badge>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">
                {"Your Perfect Florida Escape"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {
                  "Villa Lucia offers an unparalleled vacation experience in the heart of Florida. This stunning 3-bedroom property combines modern luxury with tropical charm, featuring a private pool, hot tub, grill and outdoor area that will make your stay unforgettable."
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{"Private heated pool and spa"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{"Fully stocked kitchen with premium appliances"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{"Minutes from restaurants, bars, shops and grocery stores"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{"Private parking and garage"}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-luxury-villa-interior-with-pool-view.jpg"
                alt="Villa Lucia interior"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Premium Amenities</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">{"Everything You Need"}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Villa Lucia is equipped with luxury amenities to ensure your stay is comfortable and memorable"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Private Pool & Spa",
                description: "Heated salt water pool with spa and toys",
              },
              {
                icon: Wifi,
                title: "High-Speed WiFi",
                description: "Complimentary high-speed internet throughout the villa",
              },
              { icon: Car, title: "Private Parking", description: "Secure parking for up to 4 vehicles" },
              { icon: Coffee, title: "Gourmet Kitchen", description: "Fully equipped kitchen with premium appliances" },
              { icon: Users, title: "Entertainment Area", description: "Ping pong table, grill, and outdoor dining" },
              {
                icon: MapPin,
                title: "Prime Location",
                description: "Short drive to beaches, dining, and attractions",
              },
            ].map((amenity, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <amenity.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Photo Gallery</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">{"See Villa Lucia"}</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/1.jpg"
                    alt="Villa Lucia dining room"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/2.jpg"
                    alt="Villa Lucia master bedroom"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/3.jpg"
                    alt="Villa Lucia second guest bedroom"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/4.jpg"
                    alt="Villa Lucia third guest bedroom"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/5.jpg"
                    alt="Villa Lucia living room"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/6.jpg"
                    alt="Villa Lucia kitchen"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/7.jpg"
                    alt="Villa Lucia ping pong table"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <Image
                    src="/carousel/8.jpg"
                    alt="Villa Lucia outdoor area"
                    width={1200}
                    height={800}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-accent" : "bg-muted-foreground/30 hover:bg-accent"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">Prime Location</Badge>
              <h2 className="font-playfair text-4xl font-bold mb-6 text-balance md:text-4xl">
                {"The Heart of Cape Coral, FL"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {
                  "Villa Lucia is perfectly positioned to give you access to the best of Florida. From pristine beaches to world-class dining and entertainment, everything is within reach."
                }
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>{"2 minutes to pristine beaches"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>{"5 minutes to fine dining restaurants"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>{"10 minutes to shopping and entertainment"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>{"15 minutes to major attractions"}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/florida-beach-with-palm-trees-and-clear-blue-water.jpg"
                alt="Florida beach near Villa Lucia"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Ready for Your Florida Escape?"}
          </h2>
          <p className="text-xl mb-8 text-pretty leading-relaxed">
            {
              "Book Villa Lucia today and experience the ultimate in luxury vacation rentals. Your perfect Florida getaway awaits."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Contact Host
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-playfair text-2xl font-bold text-foreground mb-4">Villa Lucia</div>
              <p className="text-muted-foreground mb-4">
                {"Experience luxury living in the heart of Cape Coral, FL with stunning views and premium amenities."}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.airbnb.com/rooms/49791238"
                  target="_blank"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                  title="Book on Airbnb"
                >
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7.9 16.9c-.4 1.3-1.6 2.2-3 2.2-1.1 0-2.1-.6-2.6-1.6l-2.3-4.4-2.3 4.4c-.5 1-1.5 1.6-2.6 1.6-1.4 0-2.6-.9-3-2.2-.2-.6-.1-1.3.3-1.8l5.6-10.7c.5-1 1.5-1.6 2.6-1.6s2.1.6 2.6 1.6l5.6 10.7c.4.5.5 1.2.3 1.8z" />
                  </svg>
                </a>
                <a
                  href="https://www.vrbo.com/3011534"
                  target="_blank"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                  title="Book on VRBO"
                >
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </a>
                <a
                  href="https://www.booking.com/hotel/us/no-extra-fees-3-br-heated-saltwater-pool-amp-spa.html?aid=2123489"
                  target="_blank"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                  title="Book on Booking.com"
                >
                  <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#overview" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Overview
                </a>
                <a href="#amenities" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Amenities
                </a>
                <a href="#location" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Location
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>{"Email: info@villaluciafl.com"}</p>

                <p>{"Cape Coral, Florida, United States"}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>{"© 2025 Villa Lucia. All rights reserved."}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
