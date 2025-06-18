"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

interface MapModalProps {
  isOpen: boolean
  onClose: () => void
  location: string
  address: string
  organizer: {
    name: string
    email: string
    phone: string
  }
}

export function MapModal({ isOpen, onClose, location, address, organizer }: MapModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Localização do Evento</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Mapa */}
          <div className="bg-muted rounded-lg p-4">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Mapa interativo</p>
                <p className="text-sm text-muted-foreground mt-1">{address}</p>
              </div>
            </div>
          </div>

          {/* Informações do Local */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informações do Local</h3>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{location}</p>
                  <p className="text-sm text-muted-foreground">{address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">Horário de Funcionamento</p>
                  <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato do Organizador */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato do Organizador</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">{organizer.name}</p>
                  <p className="text-sm text-muted-foreground">{organizer.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">{organizer.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instruções */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Como chegar
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Estação de metrô mais próxima: Universidade (Linha Azul)</li>
              <li>• Ônibus: Linhas 8000, 8001, 8002</li>
              <li>• Estacionamento disponível no local</li>
              <li>• Acesso para pessoas com deficiência</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 