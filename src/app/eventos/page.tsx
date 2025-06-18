"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, DollarSign, Search, Filter, Star, Clock, Eye, ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Pagination } from "@/components/pagination"

const mockEvents = [
  {
    id: "formatura-eng-2024",
    title: "Formatura Engenharia 2024",
    description: "Cerimônia de formatura da turma de Engenharia 2024. Uma noite especial para celebrar a conquista dos nossos formandos.",
    category: "Formatura",
    image: "/images/formatura.jpg",
    date: "15/12/2024",
    time: "19:00",
    location: "Teatro Municipal",
    address: "Rua das Artes, 123 - Centro",
    price: "R$ 120,00",
    originalPrice: "R$ 150,00",
    attendees: 150,
    maxAttendees: 200,
    organizer: "USP - Universidade de São Paulo",
    organizerAvatar: "",
    rating: 4.8,
    reviews: 45,
    tags: ["Formatura", "Engenharia", "Celebração"],
    isFeatured: true,
    isFree: false
  },
  {
    id: "hackathon-2024",
    title: "Hackathon de Inovação 2024",
    description: "Competição de programação e inovação tecnológica. Desenvolva soluções inovadoras e concorra a prêmios incríveis.",
    category: "Tecnologia",
    image: "/images/hackathon.jpg",
    date: "20-22/11/2024",
    time: "09:00",
    location: "Centro de Inovação",
    address: "Av. Paulista, 1000 - Bela Vista",
    price: "Grátis",
    originalPrice: "",
    attendees: 45,
    maxAttendees: 60,
    organizer: "Tech Community SP",
    organizerAvatar: "",
    rating: 4.9,
    reviews: 32,
    tags: ["Tecnologia", "Programação", "Inovação"],
    isFeatured: true,
    isFree: true
  },
  {
    id: "festa-calouros-2024",
    title: "Festa de Calouros 2024",
    description: "Festa de recepção aos novos alunos. Uma noite de integração e diversão para começar a jornada universitária.",
    category: "Festa",
    image: "/images/festa.jpg",
    date: "10/03/2024",
    time: "21:00",
    location: "Espaço de Eventos",
    address: "Rua da Universidade, 500 - Campus",
    price: "R$ 25,00",
    originalPrice: "R$ 35,00",
    attendees: 0,
    maxAttendees: 300,
    organizer: "Centro Acadêmico",
    organizerAvatar: "",
    rating: 4.5,
    reviews: 28,
    tags: ["Festa", "Calouros", "Integração"],
    isFeatured: false,
    isFree: false
  },
  {
    id: "palestra-carreira",
    title: "Palestra: Carreira em TI",
    description: "Palestra sobre oportunidades de carreira na área de TI. Conheça as tendências e prepare-se para o mercado.",
    category: "Palestra",
    image: "/images/palestra.jpg",
    date: "05/10/2024",
    time: "14:00",
    location: "Auditório Principal",
    address: "Rua da Ciência, 200 - Campus",
    price: "R$ 15,00",
    originalPrice: "R$ 20,00",
    attendees: 80,
    maxAttendees: 100,
    organizer: "Departamento de Computação",
    organizerAvatar: "",
    rating: 4.7,
    reviews: 15,
    tags: ["Palestra", "Carreira", "TI"],
    isFeatured: false,
    isFree: false
  },
  {
    id: "workshop-design",
    title: "Workshop de Design UX/UI",
    description: "Workshop prático de design de interfaces. Aprenda as melhores práticas e ferramentas do mercado.",
    category: "Workshop",
    image: "/images/workshop.jpg",
    date: "25/11/2024",
    time: "10:00",
    location: "Laboratório de Design",
    address: "Av. das Artes, 300 - Centro",
    price: "R$ 50,00",
    originalPrice: "R$ 80,00",
    attendees: 25,
    maxAttendees: 30,
    organizer: "Design Studio",
    organizerAvatar: "",
    rating: 4.6,
    reviews: 8,
    tags: ["Workshop", "Design", "UX/UI"],
    isFeatured: false,
    isFree: false
  },
  {
    id: "show-musica",
    title: "Show de Música Universitária",
    description: "Show com bandas universitárias locais. Uma noite de música, arte e cultura.",
    category: "Música",
    image: "/images/show.jpg",
    date: "08/12/2024",
    time: "20:00",
    location: "Anfiteatro",
    address: "Parque da Universidade",
    price: "R$ 30,00",
    originalPrice: "",
    attendees: 120,
    maxAttendees: 200,
    organizer: "Diretório Acadêmico",
    organizerAvatar: "",
    rating: 4.4,
    reviews: 22,
    tags: ["Música", "Show", "Cultura"],
    isFeatured: false,
    isFree: false
  }
]

const categories = ["Todos", "Formatura", "Tecnologia", "Festa", "Palestra", "Workshop", "Música"]
const priceRanges = ["Todos", "Grátis", "Até R$ 50", "R$ 50 - R$ 100", "Acima de R$ 100"]
const dateRanges = ["Todos", "Esta semana", "Este mês", "Próximos 3 meses", "Próximos 6 meses"]
const estados = ["Todos", "SP", "RJ", "MG", "RS", "BA", "PR", "SC"]
const tiposEvento = ["Todos", "Presencial", "Online", "Híbrido"]

export default function EventosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedPriceRange, setSelectedPriceRange] = useState("Todos")
  const [selectedDateRange, setSelectedDateRange] = useState("Todos")
  const [sortBy, setSortBy] = useState("date")
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 2

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "Todos" || event.category === selectedCategory
    
    const matchesPriceRange = selectedPriceRange === "Todos" || 
      (selectedPriceRange === "Grátis" && event.isFree) ||
      (selectedPriceRange === "Até R$ 50" && !event.isFree && parseFloat(event.price.replace('R$ ', '').replace(',', '.')) <= 50) ||
      (selectedPriceRange === "R$ 50 - R$ 100" && !event.isFree && parseFloat(event.price.replace('R$ ', '').replace(',', '.')) > 50 && parseFloat(event.price.replace('R$ ', '').replace(',', '.')) <= 100) ||
      (selectedPriceRange === "Acima de R$ 100" && !event.isFree && parseFloat(event.price.replace('R$ ', '').replace(',', '.')) > 100)
    
    return matchesSearch && matchesCategory && matchesPriceRange
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(a.date.split('/').reverse().join('-')).getTime() - 
               new Date(b.date.split('/').reverse().join('-')).getTime()
      case "price":
        if (a.isFree && b.isFree) return 0
        if (a.isFree) return -1
        if (b.isFree) return 1
        return parseFloat(a.price.replace('R$ ', '').replace(',', '.')) - 
               parseFloat(b.price.replace('R$ ', '').replace(',', '.'))
      case "rating":
        return b.rating - a.rating
      case "attendees":
        return b.attendees - a.attendees
      default:
        return 0
    }
  })

  const featuredEvents = mockEvents.filter(event => event.isFeatured)

  // Paginação
  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const endIndex = startIndex + eventsPerPage
  const currentEvents = sortedEvents.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Descubra Eventos Incríveis
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre os melhores eventos universitários, desde festas e palestras até workshops e shows
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filtros em card/flutuante colorido */}
        <div className="mb-8">
          <div className="bg-primary rounded-3xl p-6 shadow-lg flex flex-col gap-4 items-center">
            <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Pesquisar eventos"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-full bg-white text-foreground placeholder:text-muted-foreground h-12 shadow-sm"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="rounded-full bg-white h-12 min-w-[180px] text-foreground">
                  <SelectValue placeholder="Escolha uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                <SelectTrigger className="rounded-full bg-white h-12 min-w-[140px] text-foreground">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  {dateRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="rounded-full bg-white h-12 min-w-[140px] text-foreground">
                  <SelectValue placeholder="Preço" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={"Todos"} onValueChange={() => {}}>
                <SelectTrigger className="rounded-full bg-white h-12 min-w-[120px] text-foreground">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  {estados.map((estado) => (
                    <SelectItem key={estado} value={estado}>
                      {estado}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={"Todos"} onValueChange={() => {}}>
                <SelectTrigger className="rounded-full bg-white h-12 min-w-[150px] text-foreground">
                  <SelectValue placeholder="Tipo de Evento" />
                </SelectTrigger>
                <SelectContent>
                  {tiposEvento.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Eventos em Destaque */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Eventos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} featured />
              ))}
            </div>
          </div>
        )}

        {/* Todos os Eventos */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Todos os Eventos
            </h2>
            <p className="text-muted-foreground">
              {sortedEvents.length} evento{sortedEvents.length !== 1 ? 's' : ''} encontrado{sortedEvents.length !== 1 ? 's' : ''}
            </p>
          </div>

          {currentEvents.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                {currentEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              {/* Paginação */}
              <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </>
          ) : (
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum evento encontrado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tente ajustar os filtros ou buscar por outros termos
                </p>
                <Button onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todos")
                  setSelectedPriceRange("Todos")
                  setSelectedDateRange("Todos")
                  setCurrentPage(1)
                }}>
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

// Componente do Card de Evento
function EventCard({ event, featured = false }: { event: any, featured?: boolean }) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  // Carregar estado dos favoritos do localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('eventFavorites') || '[]')
      setIsFavorited(favorites.includes(event.id))
    }
  }, [event.id])

  // Função para alternar favorito
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault() // Previne a navegação do Link
    e.stopPropagation() // Previne a propagação do evento
    
    const favorites = JSON.parse(localStorage.getItem('eventFavorites') || '[]')
    let newFavorites
    
    if (isFavorited) {
      newFavorites = favorites.filter((id: string) => id !== event.id)
      toast.success('Evento removido dos favoritos')
    } else {
      newFavorites = [...favorites, event.id]
      toast.success('Evento adicionado aos favoritos')
    }
    
    localStorage.setItem('eventFavorites', JSON.stringify(newFavorites))
    setIsFavorited(!isFavorited)
  }

  // Função para compartilhar
  const handleShare = async (method: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault() // Previne a navegação do Link
      e.stopPropagation() // Previne a propagação do evento
    }
    
    const eventUrl = `${window.location.origin}/evento/${event.id}`
    
    try {
      switch (method) {
        case 'clipboard':
          await navigator.clipboard.writeText(eventUrl)
          toast.success('Link copiado para a área de transferência!')
          break
        case 'whatsapp':
          window.open(`https://wa.me/?text=${encodeURIComponent(`Confira este evento: ${event.title} - ${eventUrl}`)}`, '_blank')
          break
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira este evento: ${event.title}`)}&url=${encodeURIComponent(eventUrl)}`, '_blank')
          break
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`, '_blank')
          break
        case 'linkedin':
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`, '_blank')
          break
      }
    } catch (error) {
      toast.error('Erro ao compartilhar evento')
    }
    setIsShareOpen(false)
  }

  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${
      featured 
        ? 'bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/20 hover:border-primary/30' 
        : 'bg-gradient-to-br from-background via-background/80 to-background hover:bg-gradient-to-br hover:from-primary/5 hover:to-background'
    }`}>
      <div className="relative">
        {/* Imagem/Banner do Evento */}
        <div className={`relative h-32 overflow-hidden ${
          featured 
            ? 'bg-gradient-to-br from-primary/30 to-secondary/30' 
            : 'bg-gradient-to-br from-primary/10 to-secondary/10'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-300">
            {event.category === "Formatura" ? "🎓" : 
             event.category === "Tecnologia" ? "💻" : 
             event.category === "Festa" ? "🎉" :
             event.category === "Palestra" ? "🎤" : 
             event.category === "Workshop" ? "🔧" : "🎵"}
          </div>
          
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />

          {/* Botões de ação */}
          <div className="absolute top-2 right-2 flex items-center gap-2 z-10">
            <button
              onClick={toggleFavorite}
              className={`rounded-full p-1.5 backdrop-blur-sm transition-all duration-300 ${
                isFavorited 
                  ? 'bg-red-500/90 text-white hover:bg-red-600/90' 
                  : 'bg-black/30 text-white hover:bg-black/40'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            
            <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
              <DialogTrigger asChild>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  className="rounded-full p-1.5 backdrop-blur-sm bg-black/30 text-white hover:bg-black/40 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Compartilhar Evento</DialogTitle>
                  <DialogDescription>
                    Escolha como você quer compartilhar este evento
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3 mt-4">
                  <Button 
                    variant="outline" 
                    className="justify-start gap-2"
                    onClick={(e) => handleShare('clipboard', e)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copiar Link
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start gap-2"
                    onClick={(e) => handleShare('whatsapp', e)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start gap-2"
                    onClick={(e) => handleShare('twitter', e)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start gap-2"
                    onClick={(e) => handleShare('facebook', e)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start gap-2"
                    onClick={(e) => handleShare('linkedin', e)}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1">
          {featured && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white border-none text-[10px] px-2 py-0.5 font-medium">
              DESTAQUE
            </Badge>
          )}
          {event.isFree && (
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none text-[10px] px-2 py-0.5 font-medium">
              GRÁTIS
            </Badge>
          )}
        </div>

        {/* Categoria como chip flutuante */}
        <div className="absolute -bottom-3 right-2">
          <Badge variant={featured ? "default" : "secondary"} className="text-[10px] shadow-lg">
            {event.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-3 pt-4">
        {/* Título e Rating */}
        <div className="mb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-medium text-sm line-clamp-2 leading-tight ${
              featured ? 'text-primary' : 'text-foreground'
            }`}>
              {event.title}
            </h3>
            <div className="flex items-center gap-0.5 bg-yellow-500/10 rounded-full px-1.5 py-0.5">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <span className="text-[10px] font-medium text-yellow-500">{event.rating}</span>
            </div>
          </div>
        </div>

        {/* Data e Preço */}
        <div className="flex items-center justify-between text-[10px] mb-3">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`font-semibold ${featured ? 'text-primary' : 'text-foreground'}`}>
              {event.isFree ? "Grátis" : event.price}
            </span>
          </div>
        </div>

        {/* Botão e Métricas */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{event.attendees}/{event.maxAttendees}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[100px]">{event.location}</span>
            </div>
          </div>
          
          <Link href={`/evento/${event.id}`} className="block">
            <Button 
              variant={featured ? "default" : "secondary"}
              size="sm" 
              className={`w-full h-7 text-[11px] ${
                featured 
                  ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md' 
                  : ''
              }`}
            >
              Ver Detalhes
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 