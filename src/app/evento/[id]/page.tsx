import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Phone, 
  Mail, 
  Share2, 
  Heart, 
  ArrowLeft,
  CheckCircle,
  Star,
  User,
  MessageSquare
} from "lucide-react"
import Link from "next/link"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  // Dados mockados do evento
  const event = {
    id: 1,
    title: "Formatura Eng. Software 2024",
    category: "Formatura",
    categoryIcon: "🎓",
    date: "15 de Dezembro, 2024",
    time: "19:00",
    location: "Centro de Eventos",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    description: "Uma noite inesquecível para celebrar a conclusão de mais uma turma de Engenharia de Software.",
    longDescription: `A formatura da turma de Engenharia de Software 2024 será um momento único de celebração e reconhecimento. Após anos de dedicação e estudo, chegou a hora de comemorar essa conquista tão importante.

    O evento contará com:
    • Cerimônia de colação de grau
    • Jantar de gala
    • Show de entretenimento
    • Fotografias profissionais
    • Brindes especiais para os formandos`,
    price: "R$ 150,00",
    originalPrice: "R$ 180,00",
    status: "ativo" as const,
    participants: 150,
    maxParticipants: 200,
    organizer: {
      name: "Comissão de Formatura 2024",
      email: "formatura2024@email.com",
      phone: "(11) 99999-9999"
    },
    features: [
      "Cerimônia de colação de grau",
      "Jantar de gala",
      "Show de entretenimento",
      "Fotografias profissionais",
      "Brindes especiais",
      "Certificado de participação"
    ],
    schedule: [
      { time: "18:00", activity: "Credenciamento e recepção" },
      { time: "19:00", activity: "Cerimônia de abertura" },
      { time: "20:00", activity: "Colação de grau" },
      { time: "21:00", activity: "Jantar de gala" },
      { time: "22:30", activity: "Show de entretenimento" },
      { time: "00:00", activity: "Encerramento" }
    ],
    reviews: [
      {
        id: 1,
        user: "Maria Silva",
        rating: 5,
        comment: "Evento incrível! Tudo muito bem organizado."
      },
      {
        id: 2,
        user: "João Santos",
        rating: 5,
        comment: "Superou todas as expectativas!"
      }
    ]
  }

  const statusColors = {
    ativo: "bg-green-100 text-green-800",
    finalizado: "bg-gray-100 text-gray-800",
    cancelado: "bg-red-100 text-red-800"
  }

  const progressPercentage = (event.participants / event.maxParticipants) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="text-2xl">{event.categoryIcon}</div>
            <div>
              <Badge variant="secondary">{event.category}</Badge>
            </div>
          </div>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{event.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date} às {event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{event.participants}/{event.maxParticipants} participantes</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Favoritar
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>Sobre o evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {event.longDescription}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>O que está incluído</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card>
              <CardHeader>
                <CardTitle>Programação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-16 text-sm font-medium text-blue-600">
                        {item.time}
                      </div>
                      <div className="flex-1 text-sm">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Avaliações</CardTitle>
                <CardDescription>
                  {event.reviews.length} avaliações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {event.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{review.user}</span>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Card */}
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Inscrição</CardTitle>
                <CardDescription>
                  Garanta sua vaga neste evento incrível
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {event.price}
                  </div>
                  {event.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">
                      {event.originalPrice}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Vagas disponíveis</span>
                    <span className="font-medium">
                      {event.maxParticipants - event.participants}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    {event.participants} de {event.maxParticipants} vagas preenchidas
                  </div>
                </div>

                <Badge className={statusColors[event.status]}>
                  {event.status === "ativo" ? "Inscrições abertas" : event.status}
                </Badge>

                <Button className="w-full" size="lg">
                  Inscrever-se agora
                </Button>

                <div className="text-xs text-muted-foreground text-center">
                  Cancelamento gratuito até 7 dias antes do evento
                </div>
              </CardContent>
            </Card>

            {/* Organizer Info */}
            <Card>
              <CardHeader>
                <CardTitle>Organizador</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">{event.organizer.name}</h4>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{event.organizer.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{event.organizer.phone}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Entrar em contato
                </Button>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle>Local</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">{event.location}</h4>
                  <p className="text-sm text-muted-foreground">{event.address}</p>
                </div>
                
                <div className="bg-gray-200 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Mapa do local</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  Ver no mapa
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Related Events */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Eventos similares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Related events would go here */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">Formatura Medicina 2024</CardTitle>
                <CardDescription>Teatro Municipal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">R$ 200,00</span>
                  <Button size="sm" variant="outline">
                    Ver detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 