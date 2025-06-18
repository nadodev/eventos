"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Search, Filter, Mail, Phone, Calendar, MapPin, Eye, Download, Mail as MailIcon } from "lucide-react"
import Link from "next/link"
import ParticipantModal from "@/components/modals/ParticipantModal"
import EmailModal from "@/components/modals/EmailModal"

interface Participant {
  id: string
  name: string
  email: string
  phone: string
  avatar: string
  event: string
  eventId: string
  status: string
  registrationDate: string
  paymentStatus: string
  amount: string
  city: string
  university: string
}

// Dados mockados
const mockParticipants: Participant[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    avatar: "",
    event: "Formatura Engenharia 2024",
    eventId: "formatura-eng-2024",
    status: "Confirmado",
    registrationDate: "15/10/2024",
    paymentStatus: "Pago",
    amount: "R$ 120,00",
    city: "São Paulo",
    university: "USP"
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria.santos@email.com",
    phone: "(11) 88888-8888",
    avatar: "",
    event: "Hackathon de Inovação 2024",
    eventId: "hackathon-2024",
    status: "Confirmado",
    registrationDate: "10/11/2024",
    paymentStatus: "Grátis",
    amount: "R$ 0,00",
    city: "São Paulo",
    university: "UNICAMP"
  },
  {
    id: "3",
    name: "Pedro Costa",
    email: "pedro.costa@email.com",
    phone: "(11) 77777-7777",
    avatar: "",
    event: "Palestra: Carreira em TI",
    eventId: "palestra-carreira",
    status: "Pendente",
    registrationDate: "20/09/2024",
    paymentStatus: "Pendente",
    amount: "R$ 15,00",
    city: "Campinas",
    university: "UNICAMP"
  },
  {
    id: "4",
    name: "Ana Oliveira",
    email: "ana.oliveira@email.com",
    phone: "(11) 66666-6666",
    avatar: "",
    event: "Workshop de Design UX/UI",
    eventId: "workshop-design",
    status: "Confirmado",
    registrationDate: "18/11/2024",
    paymentStatus: "Pago",
    amount: "R$ 50,00",
    city: "São Paulo",
    university: "USP"
  },
  {
    id: "5",
    name: "Carlos Ferreira",
    email: "carlos.ferreira@email.com",
    phone: "(11) 55555-5555",
    avatar: "",
    event: "Formatura Engenharia 2024",
    eventId: "formatura-eng-2024",
    status: "Cancelado",
    registrationDate: "12/10/2024",
    paymentStatus: "Reembolsado",
    amount: "R$ 120,00",
    city: "São Paulo",
    university: "USP"
  }
]

const events = ["Todos", "Formatura Engenharia 2024", "Hackathon de Inovação 2024", "Palestra: Carreira em TI", "Workshop de Design UX/UI"]
const statuses = ["Todos", "Confirmado", "Pendente", "Cancelado"]
const paymentStatuses = ["Todos", "Pago", "Pendente", "Grátis", "Reembolsado"]

export default function ParticipantesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("Todos")
  const [selectedStatus, setSelectedStatus] = useState("Todos")
  const [selectedPaymentStatus, setSelectedPaymentStatus] = useState("Todos")
  const [sortBy, setSortBy] = useState("name")
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null)
  const [isParticipantModalOpen, setIsParticipantModalOpen] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)
  const [selectedParticipantsForEmail, setSelectedParticipantsForEmail] = useState<Participant[]>([])

  const filteredParticipants = mockParticipants.filter(participant => {
    const matchesSearch = participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         participant.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesEvent = selectedEvent === "Todos" || participant.event === selectedEvent
    const matchesStatus = selectedStatus === "Todos" || participant.status === selectedStatus
    const matchesPaymentStatus = selectedPaymentStatus === "Todos" || participant.paymentStatus === selectedPaymentStatus
    
    return matchesSearch && matchesEvent && matchesStatus && matchesPaymentStatus
  })

  const sortedParticipants = [...filteredParticipants].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "date":
        return new Date(a.registrationDate.split('/').reverse().join('-')).getTime() - 
               new Date(b.registrationDate.split('/').reverse().join('-')).getTime()
      case "amount":
        return parseFloat(b.amount.replace('R$ ', '').replace(',', '.')) - 
               parseFloat(a.amount.replace('R$ ', '').replace(',', '.'))
      default:
        return 0
    }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmado":
        return "bg-green-100 dark:bg-green-900/20 text-green-600"
      case "Pendente":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
      case "Cancelado":
        return "bg-red-100 dark:bg-red-900/20 text-red-600"
      default:
        return "bg-gray-100 dark:bg-gray-900/20 text-gray-600"
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Pago":
        return "bg-green-100 dark:bg-green-900/20 text-green-600"
      case "Pendente":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600"
      case "Grátis":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-600"
      case "Reembolsado":
        return "bg-red-100 dark:bg-red-900/20 text-red-600"
      default:
        return "bg-gray-100 dark:bg-gray-900/20 text-gray-600"
    }
  }

  const handleViewParticipant = (participant: Participant) => {
    setSelectedParticipant(participant)
    setIsParticipantModalOpen(true)
  }

  const handleSendEmailToParticipant = (participant: Participant) => {
    setSelectedParticipantsForEmail([participant])
    setIsEmailModalOpen(true)
  }

  const handleSendEmailToAll = () => {
    setSelectedParticipantsForEmail(filteredParticipants)
    setIsEmailModalOpen(true)
  }

  const handleSendEmail = async (emailData: any) => {
    console.log("Enviando email:", emailData)
    alert(`Email enviado para ${emailData.recipients.length} participante(s)!`)
  }

  const handleEditParticipant = (participant: Participant) => {
    console.log("Editando participante:", participant)
    alert("Funcionalidade de edição será implementada!")
  }

  const handleDeleteParticipant = (participantId: string) => {
    if (confirm("Tem certeza que deseja excluir este participante?")) {
      console.log("Excluindo participante:", participantId)
      alert("Participante excluído com sucesso!")
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Participantes</h1>
          <p className="text-muted-foreground">Gerencie os participantes dos seus eventos</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button variant="outline" onClick={handleSendEmailToAll}>
            <MailIcon className="w-4 h-4 mr-2" />
            Enviar Email
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card className="bg-card border-border">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar participantes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedEvent} onValueChange={setSelectedEvent}>
              <SelectTrigger>
                <SelectValue placeholder="Evento" />
              </SelectTrigger>
              <SelectContent>
                {events.map((event) => (
                  <SelectItem key={event} value={event}>
                    {event}
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

            <Select value={selectedPaymentStatus} onValueChange={setSelectedPaymentStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Pagamento" />
              </SelectTrigger>
              <SelectContent>
                {paymentStatuses.map((status) => (
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
                <SelectItem value="name">Nome</SelectItem>
                <SelectItem value="date">Data de Registro</SelectItem>
                <SelectItem value="amount">Valor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Participantes */}
      <div className="grid gap-6">
        {sortedParticipants.map((participant) => (
          <Card key={participant.id} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={participant.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {participant.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{participant.name}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Mail className="w-3 h-3" />
                        <span>{participant.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3" />
                        <span>{participant.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{participant.city}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">{participant.university}</Badge>
                      <Badge 
                        variant={participant.status === "Confirmado" ? "default" : 
                                participant.status === "Pendente" ? "secondary" : "outline"}
                      >
                        {participant.status}
                      </Badge>
                      <Badge 
                        variant={participant.paymentStatus === "Pago" ? "default" : 
                                participant.paymentStatus === "Pendente" ? "secondary" : "outline"}
                      >
                        {participant.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Evento</p>
                    <p className="font-medium text-foreground">{participant.event}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Data de Registro</p>
                    <p className="font-medium text-foreground">{participant.registrationDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Valor</p>
                    <p className="font-medium text-foreground">{participant.amount}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleViewParticipant(participant)}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleSendEmailToParticipant(participant)}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedParticipants.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="p-12 text-center">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum participante encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar os filtros ou aguarde novos registros
            </p>
          </CardContent>
        </Card>
      )}

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Participantes</p>
                <p className="text-2xl font-bold text-foreground">{mockParticipants.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Confirmados</p>
                <p className="text-2xl font-bold text-foreground">
                  {mockParticipants.filter(p => p.status === "Confirmado").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold text-foreground">
                  {mockParticipants.filter(p => p.status === "Pendente").length}
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
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold text-foreground">
                  R$ {mockParticipants
                    .filter(p => p.paymentStatus === "Pago")
                    .reduce((sum, p) => sum + parseFloat(p.amount.replace('R$ ', '').replace(',', '.')), 0)
                    .toFixed(2)
                    .replace('.', ',')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modais */}
      <ParticipantModal
        participant={selectedParticipant}
        isOpen={isParticipantModalOpen}
        onClose={() => setIsParticipantModalOpen(false)}
        onEdit={handleEditParticipant}
        onDelete={handleDeleteParticipant}
        onSendEmail={handleSendEmailToParticipant}
      />

      <EmailModal
        participants={selectedParticipantsForEmail}
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onSend={handleSendEmail}
      />
    </div>
  )
} 