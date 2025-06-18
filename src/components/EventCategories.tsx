import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const categories = [
  {
    id: "formaturas",
    name: "Formaturas",
    description: "Celebre a conquista do diploma com eventos inesquecíveis",
    icon: "🎓",
    color: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-700 dark:text-blue-400",
    count: "2.5k eventos"
  },
  {
    id: "festas",
    name: "Festa de Calouros",
    description: "Integração e diversão para os novos estudantes",
    icon: "🎉",
    color: "bg-purple-100 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-400",
    count: "1.8k eventos"
  },
  {
    id: "palestras",
    name: "Palestras e Workshops",
    description: "Eventos educacionais e de networking",
    icon: "🎤",
    color: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-700 dark:text-green-400",
    count: "3.2k eventos"
  },
  {
    id: "esportes",
    name: "Eventos Esportivos",
    description: "Competições e atividades físicas universitárias",
    icon: "⚽",
    color: "bg-orange-100 dark:bg-orange-900/20",
    textColor: "text-orange-700 dark:text-orange-400",
    count: "1.2k eventos"
  },
  {
    id: "culturais",
    name: "Eventos Culturais",
    description: "Teatro, música, arte e expressão cultural",
    icon: "🎭",
    color: "bg-pink-100 dark:bg-pink-900/20",
    textColor: "text-pink-700 dark:text-pink-400",
    count: "900 eventos"
  },
  {
    id: "tecnologia",
    name: "Hackathons e Tech",
    description: "Eventos de tecnologia e inovação",
    icon: "💻",
    color: "bg-gray-100 dark:bg-gray-800",
    textColor: "text-gray-700 dark:text-gray-300",
    count: "750 eventos"
  }
]

export function EventCategories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Explore por Categoria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre o tipo de evento perfeito para sua necessidade. 
            Desde formaturas até hackathons, temos tudo que você precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/categoria/${category.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{category.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm">
                    <span className={`font-medium ${category.textColor}`}>
                      Ver eventos →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/categorias">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200">
              Ver todas as categorias
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 