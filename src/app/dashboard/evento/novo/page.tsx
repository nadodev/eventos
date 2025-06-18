"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Save, Eye, Calendar, MapPin, Users, DollarSign, Clock, X } from "lucide-react"
import Link from "next/link"

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

export default function NovoEventoPage() {
  const [formData, setFormData] = useState({
    // Informações básicas
    title: "",
    category: "",
    description: "",
    longDescription: "",
    
    // Data e local
    date: "",
    time: "",
    location: "",
    address: "",
    
    // Capacidade e preço
    maxAttendees: "",
    price: "",
    isFree: false,
    
    // Organizador
    organizerName: "",
    organizerEmail: "",
    organizerPhone: "",
    
    // Configurações
    status: "rascunho",
    allowWaitlist: true,
    requireApproval: false,
    
    // Programação
    schedule: [
      { time: "", activity: "" }
    ]
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

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

  const handlePreview = () => {
    setShowPreview(true)
  }

  const closePreview = () => {
    setShowPreview(false)
  }

  const steps = [
    { id: 1, title: "Informações Básicas", icon: "📝" },
    { id: 2, title: "Data e Local", icon: "📍" },
    { id: 3, title: "Preços e Capacidade", icon: "💰" },
    { id: 4, title: "Programação", icon: "📅" },
    { id: 5, title: "Revisão", icon: "✅" }
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
                <h1 className="text-3xl font-bold text-foreground">Criar Novo Evento</h1>
                <p className="text-muted-foreground">Preencha as informações do seu evento</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handlePreview}>
                <Eye className="w-4 h-4 mr-2" />
                Visualizar
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? "Salvando..." : "Salvar Evento"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Prévia */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-foreground">Prévia do Evento</h2>
              <Button variant="ghost" size="sm" onClick={closePreview}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6">
              {/* Card do Evento */}
              <Card className="mb-6">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {categories.find(cat => cat.id === formData.category)?.icon || "🎉"}
                    </div>
                    <p className="text-muted-foreground">Imagem do evento</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-foreground mb-2">
                        {formData.title || "Título do Evento"}
                      </h1>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <span className="text-sm">
                          {categories.find(cat => cat.id === formData.category)?.name || "Categoria"}
                        </span>
                        <span>•</span>
                        <span className="text-sm">Organizado por {formData.organizerName || "Organizador"}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {formData.isFree ? "Gratuito" : formData.price || "R$ 0,00"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formData.maxAttendees || "0"} vagas disponíveis
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground mb-6">
                    {formData.description || "Descrição do evento aparecerá aqui..."}
                  </p>

                  {/* Informações do Evento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">
                          {formData.date ? new Date(formData.date).toLocaleDateString('pt-BR') : "Data não definida"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formData.time || "Horário não definido"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">
                          {formData.location || "Local não definido"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formData.address || "Endereço não informado"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">
                          Capacidade máxima
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formData.maxAttendees || "0"} participantes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">
                          Preço
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formData.isFree ? "Evento gratuito" : formData.price || "Preço não definido"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Descrição Detalhada */}
                  {formData.longDescription && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-2">Sobre o Evento</h3>
                      <p className="text-foreground whitespace-pre-wrap">
                        {formData.longDescription}
                      </p>
                    </div>
                  )}

                  {/* Programação */}
                  {formData.schedule.length > 0 && formData.schedule[0].time && (
                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Programação
                      </h3>
                      <div className="space-y-3">
                        {formData.schedule.map((item, index) => (
                          <div key={index} className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                            <div className="font-medium text-primary min-w-[60px]">
                              {item.time}
                            </div>
                            <div className="text-foreground">
                              {item.activity}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botões de Ação */}
                  <div className="flex space-x-3">
                    <Button className="flex-1" size="lg">
                      Inscrever-se
                    </Button>
                    <Button variant="outline" size="lg">
                      Compartilhar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Informações Adicionais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Informações do Organizador</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Nome:</strong> {formData.organizerName || "Não informado"}</p>
                    <p><strong>Email:</strong> {formData.organizerEmail || "Não informado"}</p>
                    <p><strong>Telefone:</strong> {formData.organizerPhone || "Não informado"}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Configurações</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p><strong>Status:</strong> {formData.status}</p>
                    <p><strong>Lista de espera:</strong> {formData.allowWaitlist ? "Permitida" : "Não permitida"}</p>
                    <p><strong>Aprovação manual:</strong> {formData.requireApproval ? "Requerida" : "Automática"}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar com Steps */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-4">
              <CardHeader>
                <CardTitle className="text-foreground">Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        currentStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : currentStep > step.id
                          ? "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                      onClick={() => setCurrentStep(step.id)}
                    >
                      <span className="text-lg">{step.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{step.title}</p>
                        <p className="text-xs opacity-75">
                          {currentStep > step.id ? "Concluído" : "Pendente"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário Principal */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Informações Básicas */}
              {currentStep === 1 && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Informações Básicas</CardTitle>
                    <CardDescription>
                      Defina o nome, categoria e descrição do seu evento
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
                        placeholder="Ex: Formatura Engenharia 2024"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-foreground">Categoria *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione uma categoria" />
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
                        placeholder="Uma breve descrição do evento (aparece nos cards)"
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
                        placeholder="Descrição completa do evento com todos os detalhes"
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Data e Local */}
              {currentStep === 2 && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Data e Local</CardTitle>
                    <CardDescription>
                      Defina quando e onde acontecerá o evento
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
                          <SelectValue placeholder="Selecione um local" />
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
                        placeholder="Rua, número, bairro, cidade - UF"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Preços e Capacidade */}
              {currentStep === 3 && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Preços e Capacidade</CardTitle>
                    <CardDescription>
                      Defina o preço e número máximo de participantes
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
                          placeholder="R$ 50,00"
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
                        placeholder="200"
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

              {/* Step 4: Programação */}
              {currentStep === 4 && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Programação</CardTitle>
                    <CardDescription>
                      Defina a programação detalhada do evento
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
                              Remover
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

              {/* Step 5: Revisão */}
              {currentStep === 5 && (
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Revisão</CardTitle>
                    <CardDescription>
                      Revise todas as informações antes de salvar
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Informações Básicas</h3>
                        <div className="space-y-2">
                          <p><strong>Título:</strong> {formData.title}</p>
                          <p><strong>Categoria:</strong> {formData.category}</p>
                          <p><strong>Descrição:</strong> {formData.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Data e Local</h3>
                        <div className="space-y-2">
                          <p><strong>Data:</strong> {formData.date}</p>
                          <p><strong>Horário:</strong> {formData.time}</p>
                          <p><strong>Local:</strong> {formData.location}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Preços e Capacidade</h3>
                        <div className="space-y-2">
                          <p><strong>Preço:</strong> {formData.isFree ? "Gratuito" : formData.price}</p>
                          <p><strong>Capacidade:</strong> {formData.maxAttendees} pessoas</p>
                          <p><strong>Lista de espera:</strong> {formData.allowWaitlist ? "Sim" : "Não"}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Programação</h3>
                        <div className="space-y-2">
                          {formData.schedule.map((item, index) => (
                            <p key={index}>
                              <strong>{item.time}:</strong> {item.activity}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navegação */}
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Anterior
                </Button>
                
                <div className="flex space-x-2">
                  {currentStep < 5 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                    >
                      Próximo
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting}>
                      <Save className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Salvando..." : "Salvar Evento"}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 