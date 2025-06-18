import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { EventCategories } from "@/components/EventCategoryCard"
import { LatestEvents } from "@/components/LatestEvents"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EventCategories />
      <LatestEvents />
      <FinalCTA />
      <Footer />
    </main>
  )
}
