"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  CreditCard, 
  Clock, 
  Building,
  User,
  X,
  Edit,
  Trash2
} from "lucide-react"

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

interface ParticipantModalProps {
  participant: Participant | null
  isOpen: boolean
  onClose: () => void
  onEdit?: (participant: Participant) => void
  onDelete?: (participantId: string) => void
  onSendEmail?: (participant: Participant) => void
}

export default function ParticipantModal({
  participant,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onSendEmail
}: ParticipantModalProps) {
  if (!participant) return null

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl">Detalhes do Participante</DialogTitle>
              <DialogDescription>
                Informações completas sobre {participant.name}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header com Avatar e Info Básica */}
          <div className="flex items-start space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={participant.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                {participant.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{participant.name}</h2>
              <p className="text-muted-foreground">{participant.university}</p>
              <div className="flex items-center space-x-2 mt-2">
                <Badge className={getStatusColor(participant.status)}>
                  {participant.status}
                </Badge>
                <Badge className={getPaymentStatusColor(participant.paymentStatus)}>
                  {participant.paymentStatus}
                </Badge>
              </div>
            </div>
            <div className="flex space-x-2">
              {onSendEmail && (
                <Button variant="outline" size="sm" onClick={() => onSendEmail(participant)}>
                  <Mail className="w-4 h-4" />
                </Button>
              )}
              {onEdit && (
                <Button variant="outline" size="sm" onClick={() => onEdit(participant)}>
                  <Edit className="w-4 h-4" />
                </Button>
              )}
              {onDelete && (
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => onDelete(participant.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          <Separator />

          {/* Informações de Contato */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Informações de Contato
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">{participant.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="text-foreground">{participant.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Cidade</p>
                    <p className="text-foreground">{participant.city}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Universidade</p>
                    <p className="text-foreground">{participant.university}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Evento */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Informações do Evento
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Evento</p>
                    <p className="text-foreground">{participant.event}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Data de Registro</p>
                    <p className="text-foreground">{participant.registrationDate}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações de Pagamento */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <CreditCard className="w-4 h-4 mr-2" />
                Informações de Pagamento
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status do Pagamento</span>
                  <Badge className={getPaymentStatusColor(participant.paymentStatus)}>
                    {participant.paymentStatus}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Valor</span>
                  <span className="font-medium text-foreground">{participant.amount}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ações */}
          <div className="flex space-x-2 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Fechar
            </Button>
            {onSendEmail && (
              <Button onClick={() => onSendEmail(participant)} className="flex-1">
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 