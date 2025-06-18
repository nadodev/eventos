"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, DollarSign, Edit, Trash2, Eye, Plus, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Pagination } from "@/components/pagination"

// Dados mockados
const mockEvents = [
  {
    id: "formatura-eng-2024",
    title: "Formatura Engenharia 2024",
    category: "Formatura",
    status: "Ativo",
    date: "15/12/2024",
    attendees: 150,
    maxAttendees: 200,
    price: "R$ 120",
    revenue: "R$ 18.000",
    description: "Cerimônia de formatura da turma de Engenharia 2024"
  },
  {
    id: "hackathon-2024",
    title: "Hackathon de Inovação 2024",
    category: "Tecnologia",
    status: "Ativo",
    date: "20-22/11/2024",
    attendees: 45,
    maxAttendees: 60,
    price: "Grátis",
    revenue: "R$ 0",
    description: "Competição de programação e inovação tecnológica"
  },
  {
    id: "festa-calouros-2024",
    title: "Festa de Calouros 2024",
    category: "Festa",
    status: "Rascunho",
    date: "10/03/2024",
    attendees: 0,
    maxAttendees: 300,
    price: "R$ 25",
    revenue: "R$ 0",
    description: "Festa de recepção aos novos alunos"
  },
  {
    id: "palestra-carreira",
    title: "Palestra: Carreira em TI",
    category: "Palestra",
    status: "Finalizado",
    date: "05/10/2024",
    attendees: 80,
    maxAttendees: 100,
    price: "R$ 15",
    revenue: "R$ 1.200",
    description: "Palestra sobre oportunidades de carreira na área de TI"
  },
  {
    id: "workshop-design",
    title: "Workshop de Design UX/UI",
    category: "Workshop",
    status: "Ativo",
    date: "25/11/2024",
    attendees: 25,
    maxAttendees: 30,
    price: "R$ 50",
    revenue: "R$ 1.250",
    description: "Workshop prático de design de interfaces"
  }
]

const categories = ["Todos", "Formatura", "Tecnologia", "Festa", "Palestra", "Workshop"]
const statuses = ["Todos", "Ativo", "Rascunho", "Finalizado"]

export default function EventosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedStatus, setSelectedStatus] = useState("Todos")
  const [sortBy, setSortBy] = useState("date")

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || event.category === selectedCategory
    const matchesStatus = selectedStatus === "Todos" || event.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "date":
        return new Date(a.date.split('/').reverse().join('-')).getTime() -
          new Date(b.date.split('/').reverse().join('-')).getTime()
      case "title":
        return a.title.localeCompare(b.title)
      case "attendees":
        return b.attendees - a.attendees
      case "revenue":
        return parseFloat(b.revenue.replace('R$ ', '').replace('.', '')) -
          parseFloat(a.revenue.replace('R$ ', '').replace('.', ''))
      default:
        return 0
    }
  })

  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 3

  // Paginação
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const endIndex = startIndex + eventsPerPage
  const currentEvents = filteredEvents.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Eventos</h1>
          <p className="text-muted-foreground">Gerencie todos os seus eventos</p>
        </div>
        <Link href="/dashboard/evento/novo">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Criar Evento
          </Button>
        </Link>
      </div>

      {/* Filtros */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Data</SelectItem>
                <SelectItem value="title">Título</SelectItem>
                <SelectItem value="attendees">Participantes</SelectItem>
                <SelectItem value="revenue">Receita</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Eventos */}
      <div className="grid gap-6">
        {currentEvents.map((event) => (
          <Card key={event.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">
                      {event.category === "Formatura" ? "🎓" :
                        event.category === "Tecnologia" ? "💻" :
                          event.category === "Festa" ? "🎉" :
                            event.category === "Palestra" ? "🎤" : "🔧"}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">{event.category}</Badge>
                      <Badge
                        variant={event.status === "Ativo" ? "default" :
                          event.status === "Rascunho" ? "secondary" : "outline"}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Data</p>
                    <p className="font-medium text-foreground">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Participantes</p>
                    <p className="font-medium text-foreground">
                      {event.attendees}/{event.maxAttendees}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Preço</p>
                    <p className="font-medium text-foreground">{event.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Receita</p>
                    <p className="font-medium text-foreground">{event.revenue}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link href={`/evento/${event.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/dashboard/evento/${event.id}/editar`}>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {sortedEvents.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum evento encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou criar um novo evento
            </p>
            <Link href="/dashboard/evento/novo">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Criar Evento
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      {/* Paginação */}
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Eventos</p>
                <p className="text-2xl font-bold text-foreground">{mockEvents.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Participantes</p>
                <p className="text-2xl font-bold text-foreground">
                  {mockEvents.reduce((sum, event) => sum + event.attendees, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold text-foreground">
                  R$ {mockEvents.reduce((sum, event) =>
                    sum + parseFloat(event.revenue.replace('R$ ', '').replace('.', '')), 0
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 