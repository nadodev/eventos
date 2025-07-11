"use client"

import { useState, useEffect } from "react"
import { Search, Filter, MapPin, Calendar, Users, Clock, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/Header"

// Dados mockados para demonstração
const mockEvents = [
  {
    id: 1,
    title: "Workshop de Programação",
    description: "Aprenda os fundamentos da programação com experts da área",
    date: "2024-03-15",
    time: "14:00 - 18:00",
    location: "Laboratório de Computação",
    category: "Tecnologia",
    price: "R$ 50",
    status: "Inscrições abertas",
    image: "💻",
    rating: 4.8,
    reviews: 124,
    attendees: 45,
    maxAttendees: 50,
    tags: ["programação", "tecnologia", "workshop"]
  },
  // ... outros eventos
]

const categories = ["Todos", "Tecnologia", "Saúde", "Educação", "Cultura", "Esportes"]
const locations = ["Todos os locais", "Laboratório de Computação", "Auditório Principal", "Quadra Poliesportiva"]

export default function SearchResults() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedLocation, setSelectedLocation] = useState("Todos os locais")
  const [priceRange, setPriceRange] = useState("Todos")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("relevancia")

  // Capturar parâmetro de busca da URL
  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      setSearchTerm(query)
    }
  }, [searchParams])

  // Filtros
  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "Todos" || event.category === selectedCategory
    const matchesLocation = selectedLocation === "Todos os locais" || event.location === selectedLocation
    
    let matchesPrice = true
    if (priceRange === "Gratuitos") {
      matchesPrice = event.price === "Grátis"
    } else if (priceRange === "Até R$ 50") {
      matchesPrice = event.price === "Grátis" || parseInt(event.price.replace("R$ ", "")) <= 50
    } else if (priceRange === "R$ 50 - R$ 100") {
      const price = parseInt(event.price.replace("R$ ", ""))
      matchesPrice = price >= 50 && price <= 100
    } else if (priceRange === "Acima de R$ 100") {
      const price = parseInt(event.price.replace("R$ ", ""))
      matchesPrice = price > 100
    }

    return matchesSearch && matchesCategory && matchesLocation && matchesPrice
  })

  // Ordenação
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "data":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case "preco":
        const priceA = a.price === "Grátis" ? 0 : parseInt(a.price.replace("R$ ", ""))
        const priceB = b.price === "Grátis" ? 0 : parseInt(b.price.replace("R$ ", ""))
        return priceA - priceB
      case "avaliacao":
        return b.rating - a.rating
      case "participantes":
        return b.attendees - a.attendees
      default:
        return 0
    }
  })

  return (
    <>
      <Header />
      {/* Header da Busca */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Buscar Eventos
          </h1>
          <p className="text-muted-foreground mb-6">
            Encontre os eventos universitários perfeitos para você
          </p>
          
          {/* Barra de Busca Principal */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Buscar por nome, descrição ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros */}
          <div className="lg:w-1/4">
            <div className="sticky top-4">
              <div className="bg-card border rounded-lg p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Filtros</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {showFilters ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>

                <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  {/* Categoria */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Categoria
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Localização */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Localização
                    </label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Faixa de Preço */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Faixa de Preço
                    </label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Todos">Todos os preços</SelectItem>
                        <SelectItem value="Gratuitos">Gratuitos</SelectItem>
                        <SelectItem value="Até R$ 50">Até R$ 50</SelectItem>
                        <SelectItem value="R$ 50 - R$ 100">R$ 50 - R$ 100</SelectItem>
                        <SelectItem value="Acima de R$ 100">Acima de R$ 100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  {/* Limpar Filtros */}
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("Todos")
                      setSelectedLocation("Todos os locais")
                      setPriceRange("Todos")
                    }}
                    className="w-full"
                  >
                    Limpar Filtros
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="lg:w-3/4">
            {/* Controles dos Resultados */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-muted-foreground">
                {sortedEvents.length} evento{sortedEvents.length !== 1 ? 's' : ''} encontrado{sortedEvents.length !== 1 ? 's' : ''}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Ordenar por:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevancia">Relevância</SelectItem>
                    <SelectItem value="data">Data</SelectItem>
                    <SelectItem value="preco">Preço</SelectItem>
                    <SelectItem value="avaliacao">Avaliação</SelectItem>
                    <SelectItem value="participantes">Participantes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Lista de Eventos */}
            <div className="space-y-6">
              {sortedEvents.length > 0 ? (
                sortedEvents.map((event) => (
                  <Link key={event.id} href={`/evento/${event.id}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                              <span className="text-2xl">{event.image}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <CardTitle className="text-xl text-foreground">
                                  {event.title}
                                </CardTitle>
                                <Badge 
                                  variant={event.status === "Em andamento" ? "default" : 
                                          event.status === "Inscrições abertas" ? "secondary" : "outline"}
                                >
                                  {event.status}
                                </Badge>
                              </div>
                              <CardDescription className="text-muted-foreground mb-3">
                                {event.description}
                              </CardDescription>
                              
                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-3">
                                {event.tags.map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>

                              {/* Informações do Evento */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  <span className="truncate">{event.location}</span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Users className="w-4 h-4 mr-2" />
                                  <span>{event.attendees}/{event.maxAttendees}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-right space-y-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-foreground">
                                {event.rating}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                ({event.reviews})
                              </span>
                            </div>
                            <div className="text-lg font-bold text-green-600 dark:text-green-400">
                              {event.price}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Nenhum evento encontrado
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Tente ajustar os filtros ou usar termos de busca diferentes
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("Todos")
                      setSelectedLocation("Todos os locais")
                      setPriceRange("Todos")
                    }}
                  >
                    Limpar Filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 