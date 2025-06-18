import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: "formatura-eng-2024",
    title: "Formatura Engenharia 2024",
    description: "Celebração da formatura da turma de Engenharia de Software",
    date: "15 de Dezembro, 2024",
    time: "19:00",
    location: "Centro de Eventos da Universidade",
    attendees: 150,
    maxAttendees: 200,
    price: "R$ 120",
    category: "Formatura",
    image: "🎓",
    status: "Em andamento"
  },
  {
    id: "hackathon-2024",
    title: "Hackathon de Inovação 2024",
    description: "48 horas de programação para criar soluções inovadoras",
    date: "20-22 de Novembro, 2024",
    time: "18:00",
    location: "Laboratório de Informática",
    attendees: 45,
    maxAttendees: 60,
    price: "Grátis",
    category: "Tecnologia",
    image: "💻",
    status: "Inscrições abertas"
  },
  {
    id: "festa-calouros-2024",
    title: "Festa de Calouros 2024",
    description: "Integração dos novos estudantes com a comunidade acadêmica",
    date: "10 de Março, 2024",
    time: "20:00",
    location: "Quadra da Universidade",
    attendees: 200,
    maxAttendees: 300,
    price: "R$ 25",
    category: "Festa",
    image: "🎉",
    status: "Em breve"
  },
  {
    id: "palestra-carreira",
    title: "Palestra: Carreira em Tech",
    description: "Conversa com profissionais da área de tecnologia",
    date: "5 de Abril, 2024",
    time: "14:00",
    location: "Auditório Principal",
    attendees: 80,
    maxAttendees: 120,
    price: "R$ 15",
    category: "Palestra",
    image: "🎤",
    status: "Inscrições abertas"
  }
]

export function LatestEvents() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Eventos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira os eventos mais populares e não perca as próximas oportunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Link key={event.id} href={`/evento/${event.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl">{event.image}</span>
                    </div>
                    <Badge 
                      variant={event.status === "Em andamento" ? "default" : 
                              event.status === "Inscrições abertas" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees}/{event.maxAttendees}</span>
                    </div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {event.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/eventos">
            <Button size="lg" variant="outline">
              Ver todos os eventos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 