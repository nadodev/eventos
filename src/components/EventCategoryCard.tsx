import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface EventCategoryCardProps {
  icon: string
  title: string
  description: string
  color: string
  slug: string
}

export function EventCategoryCard({ icon, title, description, color, slug }: EventCategoryCardProps) {
  return (
    <Link href={`/categoria/${slug}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="text-center">
          <div className={`text-4xl mb-2 ${color}`}>{icon}</div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}

export function EventCategories() {
  const categories = [
    {
      icon: "🎓",
      title: "Formatura",
      description: "Organize sua formatura com facilidade",
      color: "text-blue-600",
      slug: "formatura"
    },
    {
      icon: "🎉",
      title: "Festa",
      description: "Festas e comemorações universitárias",
      color: "text-purple-600",
      slug: "festa"
    },
    {
      icon: "🏖️",
      title: "Viagem",
      description: "Viagens e passeios acadêmicos",
      color: "text-green-600",
      slug: "viagem"
    },
    {
      icon: "🏆",
      title: "Gincana",
      description: "Competições e eventos esportivos",
      color: "text-orange-600",
      slug: "gincana"
    },
    {
      icon: "🎭",
      title: "Cultural",
      description: "Eventos culturais e artísticos",
      color: "text-pink-600",
      slug: "cultural"
    },
    {
      icon: "📚",
      title: "Acadêmico",
      description: "Seminários, palestras e workshops",
      color: "text-indigo-600",
      slug: "academico"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Categorias de Eventos</h2>
          <p className="text-muted-foreground">Escolha o tipo de evento que você quer organizar</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <EventCategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
} 