"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, DollarSign, TrendingUp, Plus, Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

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
    revenue: "R$ 18.000"
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
    revenue: "R$ 0"
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
    revenue: "R$ 0"
  }
]

const stats = [
  {
    title: "Total de Eventos",
    value: "12",
    change: "+2",
    changeType: "positive",
    icon: Calendar
  },
  {
    title: "Participantes Ativos",
    value: "1.247",
    change: "+15%",
    changeType: "positive",
    icon: Users
  },
  {
    title: "Receita Total",
    value: "R$ 45.230",
    change: "+8%",
    changeType: "positive",
    icon: DollarSign
  },
  {
    title: "Taxa de Conversão",
    value: "68%",
    change: "+3%",
    changeType: "positive",
    icon: TrendingUp
  }
]

export default function DashboardPage() {
  const [selectedStatus, setSelectedStatus] = useState("Todos")

  const filteredEvents = selectedStatus === "Todos" 
    ? mockEvents 
    : mockEvents.filter(event => event.status === selectedStatus)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">Gerencie seus eventos universitários</p>
            </div>
            <Link href="/dashboard/evento/novo">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Criar Evento
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} este mês
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eventos */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Meus Eventos</h2>
            <div className="flex space-x-2">
              {["Todos", "Ativo", "Rascunho", "Finalizado"].map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-xl">
                          {event.category === "Formatura" ? "🎓" : 
                           event.category === "Tecnologia" ? "💻" : "🎉"}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{event.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
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

                    <div className="flex items-center space-x-4">
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

          {filteredEvents.length === 0 && (
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum evento encontrado
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedStatus === "Todos" 
                    ? "Crie seu primeiro evento para começar"
                    : `Nenhum evento com status "${selectedStatus}" encontrado`
                  }
                </p>
                <Link href="/dashboard/evento/novo">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Criar Primeiro Evento
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
} 