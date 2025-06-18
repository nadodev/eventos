"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Clock, Users, Star, Share2, Heart, MessageCircle, MapPin as MapPinIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { MapModal } from "@/components/MapModal"
import { ContactModal } from "@/components/ContactModal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"

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

// Tipos para as funções de compartilhamento
type ShareMethod = 'clipboard' | 'whatsapp' | 'twitter' | 'facebook' | 'linkedin'

export default function EventoPage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  // Carregar estado dos favoritos do localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('eventFavorites') || '[]')
      setIsFavorited(favorites.includes(eventData.id))
    }
  }, [])

  // Função para alternar favorito
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('eventFavorites') || '[]')
    let newFavorites
    
    if (isFavorited) {
      newFavorites = favorites.filter((id: string) => id !== eventData.id)
      toast.success('Evento removido dos favoritos')
    } else {
      newFavorites = [...favorites, eventData.id]
      toast.success('Evento adicionado aos favoritos')
    }
    
    localStorage.setItem('eventFavorites', JSON.stringify(newFavorites))
    setIsFavorited(!isFavorited)
  }

  // Função para compartilhar
  const handleShare = async (method: ShareMethod) => {
    const eventUrl = `${window.location.origin}/evento/${eventData.id}`
    
    try {
      switch (method) {
        case 'clipboard':
          await navigator.clipboard.writeText(eventUrl)
          toast.success('Link copiado para a área de transferência!')
          break
        case 'whatsapp':
          window.open(`https://wa.me/?text=${encodeURIComponent(`Confira este evento: ${eventData.title} - ${eventUrl}`)}`, '_blank')
          break
        case 'twitter':
          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira este evento: ${eventData.title}`)}&url=${encodeURIComponent(eventUrl)}`, '_blank')
          break
        case 'facebook':
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`, '_blank')
          break
        case 'linkedin':
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`, '_blank')
          break
      }
    } catch (error) {
      toast.error('Erro ao compartilhar evento')
    }
    setIsShareOpen(false)
  }

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
                
                <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Compartilhar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Compartilhar Evento</DialogTitle>
                      <DialogDescription>
                        Escolha como você quer compartilhar este evento
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-3 mt-4">
                      <Button 
                        variant="outline" 
                        className="justify-start gap-2"
                        onClick={() => handleShare('clipboard')}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        Copiar Link
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start gap-2"
                        onClick={() => handleShare('whatsapp')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start gap-2"
                        onClick={() => handleShare('twitter')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        Twitter
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start gap-2"
                        onClick={() => handleShare('facebook')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                      <Button 
                        variant="outline" 
                        className="justify-start gap-2"
                        onClick={() => handleShare('linkedin')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  variant={isFavorited ? "default" : "outline"} 
                  size="sm"
                  onClick={toggleFavorite}
                  className={`transition-colors duration-200 ${
                    isFavorited ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' : ''
                  }`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                  {isFavorited ? 'Favoritado' : 'Favoritar'}
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