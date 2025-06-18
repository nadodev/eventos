import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
  title: string
  category: string
  date: string
  location: string
  status: "ativo" | "finalizado" | "cancelado"
  participants: number
  icon: string
  id: number
}

export function EventCard({ title, category, date, location, status, participants, icon, id }: EventCardProps) {
  const statusColors = {
    ativo: "bg-green-100 text-green-800",
    finalizado: "bg-gray-100 text-gray-800",
    cancelado: "bg-red-100 text-red-800"
  }

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{icon}</div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
          <Badge className={statusColors[status]}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>📅 {date}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>📍 {location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>👥 {participants} participantes</span>
        </div>
        <Link href={`/evento/${id}`}>
          <Button variant="outline" size="sm" className="w-full">
            Ver detalhes
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export function LatestEvents() {
  const events = [
    {
      title: "Formatura Eng. Software 2024",
      category: "Formatura",
      date: "15/12/2024",
      location: "Centro de Eventos",
      status: "ativo" as const,
      participants: 150,
      icon: "🎓",
      id: 1
    },
    {
      title: "Festa Junina da Computação",
      category: "Festa",
      date: "20/06/2024",
      location: "Campus Universitário",
      status: "ativo" as const,
      participants: 89,
      icon: "🎉",
      id: 2
    },
    {
      title: "Viagem para Ouro Preto",
      category: "Viagem",
      date: "10/05/2024",
      location: "Ouro Preto, MG",
      status: "finalizado" as const,
      participants: 45,
      icon: "🏖️",
      id: 3
    },
    {
      title: "Gincana Intercursos",
      category: "Gincana",
      date: "25/04/2024",
      location: "Quadra Esportiva",
      status: "finalizado" as const,
      participants: 200,
      icon: "🏆",
      id: 4
    },
    {
      title: "Workshop de React",
      category: "Acadêmico",
      date: "05/07/2024",
      location: "Auditório 3",
      status: "ativo" as const,
      participants: 67,
      icon: "📚",
      id: 5
    },
    {
      title: "Show de Talentos",
      category: "Cultural",
      date: "30/06/2024",
      location: "Teatro Universitário",
      status: "ativo" as const,
      participants: 120,
      icon: "🎭",
      id: 6
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Últimos Eventos</h2>
          <p className="text-muted-foreground">Veja alguns eventos que estão sendo organizados na plataforma</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/categoria/formatura">
            <Button variant="outline" size="lg">
              Ver mais eventos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 