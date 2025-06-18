"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  Mail, 
  Send, 
  X, 
  Users, 
  FileText,
  Clock,
  CheckCircle,
  AlertCircle
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

interface EmailModalProps {
  participants: Participant[]
  isOpen: boolean
  onClose: () => void
  onSend: (emailData: EmailData) => void
}

interface EmailData {
  subject: string
  message: string
  template: string
  recipients: string[]
  includeAttachments: boolean
}

const emailTemplates = [
  { value: "custom", label: "Email Personalizado" },
  { value: "welcome", label: "Boas-vindas" },
  { value: "reminder", label: "Lembrete de Evento" },
  { value: "confirmation", label: "Confirmação de Inscrição" },
  { value: "payment", label: "Lembrete de Pagamento" },
  { value: "cancellation", label: "Cancelamento" }
]

export default function EmailModal({
  participants,
  isOpen,
  onClose,
  onSend
}: EmailModalProps) {
  const [emailData, setEmailData] = useState<EmailData>({
    subject: "",
    message: "",
    template: "custom",
    recipients: participants.map(p => p.id),
    includeAttachments: false
  })

  const [isSending, setIsSending] = useState(false)

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setEmailData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleTemplateChange = (template: string) => {
    setEmailData(prev => ({
      ...prev,
      template
    }))

    // Preencher com template
    switch (template) {
      case "welcome":
        setEmailData(prev => ({
          ...prev,
          subject: "Bem-vindo ao nosso evento!",
          message: `Olá {nome},\n\nSeja bem-vindo ao nosso evento! Estamos muito felizes em tê-lo conosco.\n\nAguardamos sua presença!\n\nAtenciosamente,\nEquipe EventosUni`
        }))
        break
      case "reminder":
        setEmailData(prev => ({
          ...prev,
          subject: "Lembrete: Seu evento está chegando!",
          message: `Olá {nome},\n\nEste é um lembrete de que seu evento está chegando!\n\nNão se esqueça de comparecer.\n\nAtenciosamente,\nEquipe EventosUni`
        }))
        break
      case "confirmation":
        setEmailData(prev => ({
          ...prev,
          subject: "Confirmação de Inscrição",
          message: `Olá {nome},\n\nSua inscrição foi confirmada com sucesso!\n\nDetalhes do evento:\n- Evento: {evento}\n- Data: {data}\n- Local: {local}\n\nAtenciosamente,\nEquipe EventosUni`
        }))
        break
      case "payment":
        setEmailData(prev => ({
          ...prev,
          subject: "Lembrete de Pagamento",
          message: `Olá {nome},\n\nLembramos que o pagamento do evento ainda está pendente.\n\nValor: {valor}\n\nAtenciosamente,\nEquipe EventosUni`
        }))
        break
      case "cancellation":
        setEmailData(prev => ({
          ...prev,
          subject: "Cancelamento de Inscrição",
          message: `Olá {nome},\n\nSua inscrição foi cancelada conforme solicitado.\n\nAtenciosamente,\nEquipe EventosUni`
        }))
        break
      default:
        setEmailData(prev => ({
          ...prev,
          subject: "",
          message: ""
        }))
    }
  }

  const handleSend = async () => {
    setIsSending(true)
    try {
      await onSend(emailData)
      onClose()
    } catch (error) {
      console.error("Erro ao enviar email:", error)
    } finally {
      setIsSending(false)
    }
  }

  const selectedParticipants = participants.filter(p => emailData.recipients.includes(p.id))
  const totalRecipients = selectedParticipants.length

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl">Enviar Email</DialogTitle>
              <DialogDescription>
                Envie emails para {totalRecipients} participante{totalRecipients !== 1 ? 's' : ''}
              </DialogDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Formulário de Email */}
          <div className="lg:col-span-2 space-y-6">
            {/* Template */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Label>Template de Email</Label>
                  <Select value={emailData.template} onValueChange={handleTemplateChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um template" />
                    </SelectTrigger>
                    <SelectContent>
                      {emailTemplates.map((template) => (
                        <SelectItem key={template.value} value={template.value}>
                          {template.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Assunto */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    value={emailData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Digite o assunto do email"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Mensagem */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={emailData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Digite sua mensagem..."
                    rows={8}
                  />
                  <p className="text-xs text-muted-foreground">
                    Use {"{nome}"}, {"{evento}"}, {"{data}"}, {"{local}"}, {"{valor}"} para personalizar a mensagem
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Opções */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="attachments"
                      checked={emailData.includeAttachments}
                      onCheckedChange={(checked: boolean) => handleInputChange("includeAttachments", checked)}
                    />
                    <Label htmlFor="attachments">Incluir anexos padrão</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Destinatários */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Destinatários</CardTitle>
                <CardDescription>
                  {totalRecipients} participante{totalRecipients !== 1 ? 's' : ''} selecionado{totalRecipients !== 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {selectedParticipants.map((participant) => (
                  <div key={participant.id} className="flex items-center space-x-3 p-2 border rounded-lg">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={participant.avatar} />
                      <AvatarFallback className="text-xs">
                        {participant.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {participant.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {participant.email}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {participant.event}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium text-foreground">Assunto:</p>
                  <p className="text-sm text-muted-foreground">{emailData.subject || "Sem assunto"}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium text-foreground">Mensagem:</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {emailData.message || "Sem mensagem"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ações */}
        <div className="flex space-x-2 pt-4">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancelar
          </Button>
          <Button 
            onClick={handleSend} 
            disabled={!emailData.subject || !emailData.message || isSending}
            className="flex-1"
          >
            {isSending ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Email
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 