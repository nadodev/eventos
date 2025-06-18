"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  organizer: {
    name: string
    email: string
    phone: string
  }
}

export function ContactModal({ isOpen, onClose, organizer }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      onClose()
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Entre em Contato</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Informações do Organizador</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">👤</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{organizer.name}</p>
                    <p className="text-sm text-muted-foreground">Organizador do evento</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Telefone</p>
                      <p className="text-sm text-muted-foreground">{organizer.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">E-mail</p>
                      <p className="text-sm text-muted-foreground">{organizer.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Horário de Atendimento</p>
                      <p className="text-sm text-muted-foreground">Segunda a Sexta: 9h às 17h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Rápido */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Perguntas Frequentes</h4>
              <div className="space-y-2">
                <div className="text-sm">
                  <p className="font-medium text-foreground">Como cancelar minha inscrição?</p>
                  <p className="text-muted-foreground">Entre em contato até 48h antes do evento.</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Posso transferir minha inscrição?</p>
                  <p className="text-muted-foreground">Sim, mediante solicitação por e-mail.</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Há estacionamento no local?</p>
                  <p className="text-muted-foreground">Sim, com vagas limitadas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Nome *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
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
              
              <div>
                <Label htmlFor="subject" className="text-foreground">Assunto *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="mt-1"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 