"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tag, Edit, Trash2, Plus, Search, Calendar, Users } from "lucide-react"
import Link from "next/link"

// Dados mockados
const mockCategories = [
  {
    id: "formatura",
    name: "Formatura",
    description: "Eventos de formatura e colação de grau",
    icon: "🎓",
    color: "blue",
    eventsCount: 8,
    totalAttendees: 1200,
    isActive: true
  },
  {
    id: "tecnologia",
    name: "Tecnologia",
    description: "Eventos relacionados à tecnologia e inovação",
    icon: "💻",
    color: "green",
    eventsCount: 15,
    totalAttendees: 850,
    isActive: true
  },
  {
    id: "festa",
    name: "Festa",
    description: "Festas e eventos sociais universitários",
    icon: "🎉",
    color: "purple",
    eventsCount: 12,
    totalAttendees: 1800,
    isActive: true
  },
  {
    id: "palestra",
    name: "Palestra",
    description: "Palestras e seminários acadêmicos",
    icon: "🎤",
    color: "orange",
    eventsCount: 25,
    totalAttendees: 2100,
    isActive: true
  },
  {
    id: "workshop",
    name: "Workshop",
    description: "Workshops e cursos práticos",
    icon: "🔧",
    color: "red",
    eventsCount: 18,
    totalAttendees: 950,
    isActive: true
  },
  {
    id: "esporte",
    name: "Esporte",
    description: "Eventos esportivos e competições",
    icon: "⚽",
    color: "yellow",
    eventsCount: 6,
    totalAttendees: 450,
    isActive: false
  }
]

const colors = ["Todos", "blue", "green", "purple", "orange", "red", "yellow"]

export default function CategoriasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedColor, setSelectedColor] = useState("Todos")
  const [selectedStatus, setSelectedStatus] = useState("Todos")
  const [sortBy, setSortBy] = useState("name")

  const filteredCategories = mockCategories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesColor = selectedColor === "Todos" || category.color === selectedColor
    const matchesStatus = selectedStatus === "Todos" || 
                         (selectedStatus === "Ativo" && category.isActive) ||
                         (selectedStatus === "Inativo" && !category.isActive)
    
    return matchesSearch && matchesColor && matchesStatus
  })

  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "events":
        return b.eventsCount - a.eventsCount
      case "attendees":
        return b.totalAttendees - a.totalAttendees
      default:
        return 0
    }
  })

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600",
      green: "bg-green-100 dark:bg-green-900/20 text-green-600",
      purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600",
      orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600",
      red: "bg-red-100 dark:bg-red-900/20 text-red-600",
      yellow: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Categorias</h1>
          <p className="text-muted-foreground">Gerencie as categorias de eventos</p>
        </div>
        <Link href="/dashboard/categoria/novo">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Criar Categoria
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
                placeholder="Buscar categorias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger>
                <SelectValue placeholder="Cor" />
              </SelectTrigger>
              <SelectContent>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color === "Todos" ? "Todas as Cores" : color.charAt(0).toUpperCase() + color.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Ativo">Ativo</SelectItem>
                <SelectItem value="Inativo">Inativo</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nome</SelectItem>
                <SelectItem value="events">Número de Eventos</SelectItem>
                <SelectItem value="attendees">Participantes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Categorias */}
      <div className="grid gap-6">
        {sortedCategories.map((category) => (
          <Card key={category.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge 
                        variant={category.isActive ? "default" : "secondary"}
                      >
                        {category.isActive ? "Ativo" : "Inativo"}
                      </Badge>
                      <Badge variant="outline" className="capitalize">
                        {category.color}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Eventos</p>
                    <p className="font-medium text-foreground">{category.eventsCount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Participantes</p>
                    <p className="font-medium text-foreground">{category.totalAttendees}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link href={`/dashboard/categoria/${category.id}/editar`}>
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

      {sortedCategories.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">🏷️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhuma categoria encontrada
            </h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou criar uma nova categoria
            </p>
            <Link href="/dashboard/categoria/novo">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Criar Categoria
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Categorias</p>
                <p className="text-2xl font-bold text-foreground">{mockCategories.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Eventos</p>
                <p className="text-2xl font-bold text-foreground">
                  {mockCategories.reduce((sum, category) => sum + category.eventsCount, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Participantes</p>
                <p className="text-2xl font-bold text-foreground">
                  {mockCategories.reduce((sum, category) => sum + category.totalAttendees, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 