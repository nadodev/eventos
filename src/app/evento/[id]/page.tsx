"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Clock, Users, Star, Share2, Heart, MessageCircle, MapPin as MapPinIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { MapModal } from "@/components/MapModal"
import { ContactModal } from "@/components/ContactModal"

// Dados mockados do evento
const eventData = {
  id: "formatura-eng-2024",
  title: "Formatura Engenharia 2024",
  description: "Celebração da formatura da turma de Engenharia de Software com jantar e festa. Uma noite especial para comemorar a conquista do diploma e criar memórias inesquecíveis com colegas e professores.",
  longDescription: `
    <p>Junte-se a nós para celebrar uma das conquistas mais importantes da vida acadêmica! A formatura da turma de Engenharia de Software 2024 será um evento inesquecível repleto de momentos especiais.</p>
    
    <h3>O que está incluído:</h3>
    <ul>
      <li>• Coquetel de boas-vindas</li>
      <li>• Jantar completo com opções vegetarianas</li>
      <li>• Bebidas à vontade (não alcoólicas)</li>
      <li>• Música ao vivo</li>
      <li>• Fotógrafo profissional</li>
      <li>• Certificado de participação</li>
      <li>• Lembrancinha personalizada</li>
    </ul>
    
    <h3>Programação:</h3>
    <ul>
      <li>• 19:00 - Credenciamento e coquetel</li>
      <li>• 20:00 - Abertura oficial</li>
      <li>• 20:30 - Jantar</li>
      <li>• 22:00 - Apresentações e homenagens</li>
      <li>• 23:00 - Festa e networking</li>
      <li>• 02:00 - Encerramento</li>
    </ul>
  `,
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
  reviewCount: 45,
  organizer: {
    name: "Comissão de Formatura 2024",
    email: "formatura2024@universidade.edu.br",
    phone: "(11) 99999-9999",
    avatar: "👥"
  },
  schedule: [
    { time: "19:00", activity: "Credenciamento e Coquetel" },
    { time: "20:00", activity: "Abertura Oficial" },
    { time: "20:30", activity: "Jantar" },
    { time: "22:00", activity: "Apresentações e Homenagens" },
    { time: "23:00", activity: "Festa e Networking" },
    { time: "02:00", activity: "Encerramento" }
  ],
  eventReviews: [
    {
      id: 1,
      user: "Maria Silva",
      rating: 5,
      comment: "Evento incrível! Superou todas as expectativas. A organização foi perfeita.",
      date: "2024-01-15"
    },
    {
      id: 2,
      user: "João Santos",
      rating: 4,
      comment: "Muito bem organizado. A comida estava ótima e o ambiente era agradável.",
      date: "2024-01-10"
    },
    {
      id: 3,
      user: "Ana Costa",
      rating: 5,
      comment: "Experiência inesquecível! Recomendo para todos os formandos.",
      date: "2024-01-08"
    }
  ]
}

export default function EventoPage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header do Evento */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações Principais */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline">{eventData.category}</Badge>
                <Badge variant={eventData.status === "Em andamento" ? "default" : "secondary"}>
                  {eventData.status}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {eventData.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {eventData.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
                  <span>{eventData.attendees}/{eventData.maxAttendees}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-foreground">
                    {eventData.rating}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({eventData.reviewCount} avaliações)
                  </span>
                </div>
                
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </Button>
                
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Favoritar
                </Button>
              </div>
            </div>

            {/* Card de Inscrição */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-border sticky top-4">
                <CardHeader>
                  <CardTitle className="text-foreground">Inscrever-se</CardTitle>
                  <CardDescription>
                    Garanta sua vaga neste evento incrível
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      {eventData.price}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      por pessoa
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Vagas disponíveis:</span>
                      <span className="text-foreground">{eventData.maxAttendees - eventData.attendees}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(eventData.attendees / eventData.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link href={`/evento/${eventData.id}/inscrever`}>
                      <Button className="w-full" size="lg">
                        Inscrever-se Agora
                      </Button>
                    </Link>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsMapModalOpen(true)}
                      >
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        Ver Mapa
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsContactModalOpen(true)}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contato
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground text-center">
                    Cancelamento gratuito até 48h antes do evento
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Descrição Detalhada */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Sobre o Evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: eventData.longDescription }}
                />
              </CardContent>
            </Card>

            {/* Programação */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Programação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventData.schedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 text-sm font-medium text-muted-foreground">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-foreground">
                        {item.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Avaliações */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Avaliações</CardTitle>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-foreground">
                    {eventData.rating} ({eventData.eventReviews.length} avaliações)
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventData.eventReviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{review.user[0]}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-foreground">{review.user}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                      <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Organizador */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Organizador</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>{eventData.organizer.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{eventData.organizer.name}</p>
                    <p className="text-sm text-muted-foreground">{eventData.organizer.email}</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>

            {/* Eventos Similares */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Eventos Similares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="/evento/hackathon-2024" className="block">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded flex items-center justify-center">
                        <span>💻</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Hackathon 2024</p>
                        <p className="text-xs text-muted-foreground">20-22 Nov</p>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/evento/festa-calouros-2024" className="block">
                    <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded flex items-center justify-center">
                        <span>🎉</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Festa de Calouros</p>
                        <p className="text-xs text-muted-foreground">10 Mar</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modais */}
      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        location={eventData.location}
        address={eventData.address}
        organizer={eventData.organizer}
      />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        organizer={eventData.organizer}
      />
    </div>
  )
} 