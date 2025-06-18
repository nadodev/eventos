"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Save, Eye, Calendar, MapPin, Users, DollarSign, Clock, Trash2 } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Dados mockados do evento
const mockEvent = {
  id: "formatura-eng-2024",
  title: "Formatura Engenharia 2024",
  category: "formatura",
  description: "Celebração da formatura da turma de Engenharia de Software com jantar e festa",
  longDescription: "Uma noite especial para comemorar a conquista do diploma e criar memórias inesquecíveis com colegas e professores.",
  date: "2024-12-15",
  time: "19:00",
  location: "Centro de Eventos da Universidade",
  address: "Rua das Universidades, 123 - São Paulo, SP",
  maxAttendees: 200,
  price: "120",
  isFree: false,
  status: "ativo",
  allowWaitlist: true,
  requireApproval: false,
  attendees: 150,
  revenue: "R$ 18.000",
  schedule: [
    { time: "19:00", activity: "Credenciamento e Coquetel" },
    { time: "20:00", activity: "Abertura Oficial" },
    { time: "20:30", activity: "Jantar" },
    { time: "22:00", activity: "Apresentações e Homenagens" },
    { time: "23:00", activity: "Festa e Networking" },
    { time: "02:00", activity: "Encerramento" }
  ]
}

const categories = [
  { id: "formatura", name: "Formatura", icon: "🎓" },
  { id: "festa", name: "Festa", icon: "🎉" },
  { id: "palestra", name: "Palestra", icon: "🎤" },
  { id: "workshop", name: "Workshop", icon: "⚛️" },
  { id: "tecnologia", name: "Tecnologia", icon: "💻" },
  { id: "cultural", name: "Cultural", icon: "🎭" },
  { id: "esportes", name: "Esportes", icon: "⚽" },
  { id: "viagem", name: "Viagem", icon: "✈️" }
]

const locations = [
  "Centro de Eventos da Universidade",
  "Auditório Principal",
  "Laboratório de Informática",
  "Quadra da Universidade",
  "Teatro Universitário",
  "Sala de Aula 301",
  "Campus Universitário",
  "Outro"
]

export default function EditarEventoPage() {
  const params = useParams()
  const [formData, setFormData] = useState(mockEvent)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("geral")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const addScheduleItem = () => {
    setFormData(prev => ({
      ...prev,
      schedule: [...prev.schedule, { time: "", activity: "" }]
    }))
  }

  const removeScheduleItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      schedule: prev.schedule.filter((_, i) => i !== index)
    }))
  }

  const updateScheduleItem = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      schedule: prev.schedule.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirecionar para dashboard
      window.location.href = "/dashboard"
    }, 2000)
  }

  const tabs = [
    { id: "geral", name: "Geral", icon: "📝" },
    { id: "data-local", name: "Data e Local", icon: "📍" },
    { id: "precos", name: "Preços", icon: "💰" },
    { id: "programacao", name: "Programação", icon: "📅" },
    { id: "participantes", name: "Participantes", icon: "👥" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Editar Evento</h1>
                <p className="text-muted-foreground">{formData.title}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href={`/evento/${params.id}`}>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Visualizar
                </Button>
              </Link>
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? "Salvando..." : "Salvar Alterações"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com Tabs */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-4">
              <CardHeader>
                <CardTitle className="text-foreground">Configurações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Estatísticas Rápidas */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Estatísticas</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Participantes</span>
                      <span className="font-medium text-foreground">{formData.attendees}/{formData.maxAttendees}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Receita</span>
                      <span className="font-medium text-foreground">{formData.revenue}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge variant={formData.status === "ativo" ? "default" : "secondary"}>
                        {formData.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo Principal */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tab Geral */}
              {activeTab === "geral" && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Informações Gerais</CardTitle>
                    <CardDescription>
                      Edite as informações básicas do evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="title" className="text-foreground">Título do Evento *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-foreground">Categoria *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              <span className="flex items-center space-x-2">
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-foreground">Descrição Curta *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="longDescription" className="text-foreground">Descrição Detalhada</Label>
                      <Textarea
                        id="longDescription"
                        name="longDescription"
                        value={formData.longDescription}
                        onChange={handleInputChange}
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="status" className="text-foreground">Status</Label>
                      <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rascunho">Rascunho</SelectItem>
                          <SelectItem value="ativo">Ativo</SelectItem>
                          <SelectItem value="pausado">Pausado</SelectItem>
                          <SelectItem value="finalizado">Finalizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tab Data e Local */}
              {activeTab === "data-local" && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Data e Local</CardTitle>
                    <CardDescription>
                      Edite quando e onde acontecerá o evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-foreground">Data *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-foreground">Horário *</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-foreground">Local *</Label>
                      <Select value={formData.location} onValueChange={(value) => handleSelectChange("location", value)}>
                        <SelectTrigger className="mt-1">
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

                    <div>
                      <Label htmlFor="address" className="text-foreground">Endereço Completo</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tab Preços */}
              {activeTab === "precos" && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Preços e Capacidade</CardTitle>
                    <CardDescription>
                      Edite preços e configurações de capacidade
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="isFree"
                        checked={formData.isFree}
                        onCheckedChange={(checked) => handleCheckboxChange("isFree", checked as boolean)}
                      />
                      <Label htmlFor="isFree" className="text-foreground">Evento gratuito</Label>
                    </div>

                    {!formData.isFree && (
                      <div>
                        <Label htmlFor="price" className="text-foreground">Preço *</Label>
                        <Input
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="120"
                          required
                          className="mt-1"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="maxAttendees" className="text-foreground">Número Máximo de Participantes *</Label>
                      <Input
                        id="maxAttendees"
                        name="maxAttendees"
                        type="number"
                        value={formData.maxAttendees}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="allowWaitlist"
                        checked={formData.allowWaitlist}
                        onCheckedChange={(checked) => handleCheckboxChange("allowWaitlist", checked as boolean)}
                      />
                      <Label htmlFor="allowWaitlist" className="text-foreground">Permitir lista de espera</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="requireApproval"
                        checked={formData.requireApproval}
                        onCheckedChange={(checked) => handleCheckboxChange("requireApproval", checked as boolean)}
                      />
                      <Label htmlFor="requireApproval" className="text-foreground">Requer aprovação manual</Label>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Tab Programação */}
              {activeTab === "programacao" && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Programação</CardTitle>
                    <CardDescription>
                      Edite a programação detalhada do evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {formData.schedule.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="flex-1">
                            <Input
                              placeholder="19:00"
                              value={item.time}
                              onChange={(e) => updateScheduleItem(index, "time", e.target.value)}
                            />
                          </div>
                          <div className="flex-1">
                            <Input
                              placeholder="Credenciamento e coquetel"
                              value={item.activity}
                              onChange={(e) => updateScheduleItem(index, "activity", e.target.value)}
                            />
                          </div>
                          {formData.schedule.length > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeScheduleItem(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                    <Button type="button" variant="outline" onClick={addScheduleItem}>
                      Adicionar Item
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Tab Participantes */}
              {activeTab === "participantes" && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Participantes</CardTitle>
                    <CardDescription>
                      Visualize e gerencie os participantes do evento
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Users className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-2xl font-bold text-foreground">{formData.attendees}</p>
                        <p className="text-sm text-muted-foreground">Inscritos</p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <Calendar className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-2xl font-bold text-foreground">{formData.maxAttendees - formData.attendees}</p>
                        <p className="text-sm text-muted-foreground">Vagas Disponíveis</p>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <DollarSign className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-2xl font-bold text-foreground">{formData.revenue}</p>
                        <p className="text-sm text-muted-foreground">Receita Total</p>
                      </div>
                    </div>

                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">📊</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Lista de Participantes
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Aqui você poderá visualizar e gerenciar todos os participantes
                      </p>
                      <Button variant="outline">
                        Ver Lista Completa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 