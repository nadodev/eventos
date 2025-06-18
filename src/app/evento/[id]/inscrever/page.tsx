"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Dados mockados do evento
const eventData = {
  id: "formatura-eng-2024",
  title: "Formatura Engenharia 2024",
  description: "Celebração da formatura da turma de Engenharia de Software com jantar e festa",
  date: "15 de Dezembro, 2024",
  time: "19:00",
  location: "Centro de Eventos da Universidade",
  address: "Rua das Universidades, 123 - São Paulo, SP",
  attendees: 150,
  maxAttendees: 200,
  price: "R$ 120",
  category: "Formatura",
  image: "🎓",
  status: "Em andamento",
  rating: 4.8,
  reviews: 45,
  organizer: {
    name: "Comissão de Formatura 2024",
    email: "formatura2024@universidade.edu.br",
    phone: "(11) 99999-9999"
  }
}

export default function InscreverPage() {
  const params = useParams()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    curso: "",
    matricula: "",
    observacoes: "",
    aceiteTermos: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      aceiteTermos: e.target.checked
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirecionar para checkout
    window.location.href = `/evento/${params.id}/checkout`
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/evento/${params.id}`} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao evento
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Inscrever-se no Evento</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Inscrição */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Dados da Inscrição</CardTitle>
                <CardDescription>
                  Preencha seus dados para se inscrever no evento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informações Pessoais */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Informações Pessoais</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome" className="text-foreground">Nome Completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-foreground">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telefone" className="text-foreground">Telefone *</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cpf" className="text-foreground">CPF *</Label>
                        <Input
                          id="cpf"
                          name="cpf"
                          value={formData.cpf}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Informações Acadêmicas */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Informações Acadêmicas</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="curso" className="text-foreground">Curso *</Label>
                        <Input
                          id="curso"
                          name="curso"
                          value={formData.curso}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="matricula" className="text-foreground">Matrícula *</Label>
                        <Input
                          id="matricula"
                          name="matricula"
                          value={formData.matricula}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Observações */}
                  <div>
                    <Label htmlFor="observacoes" className="text-foreground">Observações</Label>
                    <Textarea
                      id="observacoes"
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleInputChange}
                      placeholder="Alguma observação especial ou restrição alimentar..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  {/* Termos */}
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="aceiteTermos"
                      checked={formData.aceiteTermos}
                      onChange={handleCheckboxChange}
                      required
                      className="mt-1"
                    />
                    <Label htmlFor="aceiteTermos" className="text-sm text-muted-foreground">
                      Li e aceito os <Link href="/termos" className="text-primary hover:underline">termos de uso</Link> e 
                      <Link href="/privacidade" className="text-primary hover:underline"> política de privacidade</Link> *
                    </Label>
                  </div>

                  {/* Botão de Inscrição */}
                  <Button type="submit" size="lg" className="w-full">
                    Continuar para Pagamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Evento */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-4">
              <CardHeader>
                <CardTitle className="text-foreground">Resumo do Evento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Informações do Evento */}
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{eventData.image}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{eventData.title}</h3>
                    <p className="text-sm text-muted-foreground">{eventData.category}</p>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{eventData.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{eventData.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="truncate">{eventData.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{eventData.attendees}/{eventData.maxAttendees} inscritos</span>
                  </div>
                </div>

                {/* Avaliação */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-foreground ml-1">
                      {eventData.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({eventData.reviews} avaliações)
                  </span>
                </div>

                {/* Preço */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Valor da inscrição:</span>
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                      {eventData.price}
                    </span>
                  </div>
                </div>

                {/* Organizador */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Organizador</h4>
                  <p className="text-sm text-muted-foreground">{eventData.organizer.name}</p>
                  <p className="text-sm text-muted-foreground">{eventData.organizer.email}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 