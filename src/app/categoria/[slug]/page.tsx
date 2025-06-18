// @ts-nocheck

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Calendar, MapPin, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { categoryData } from "@/data/mock"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// Simula um carregamento assíncrono dos dados
async function getCategoryData(slug: string) {
  // Em produção, aqui você faria uma chamada à API ou banco de dados
  return categoryData[slug as keyof typeof categoryData]
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = params
  const category = await getCategoryData(slug)

  if (!category) {
    notFound()
  }

  const statusColors = {
    ativo: "bg-green-100 text-green-800",
    finalizado: "bg-gray-100 text-gray-800",
    cancelado: "bg-red-100 text-red-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center text-3xl`}>
              {category.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar eventos..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtrar
            </Button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Eventos de {category.name}
          </h2>
          <p className="text-muted-foreground">
            {category.events.length} eventos encontrados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{event.image}</div>
                    <div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{category.name}</p>
                    </div>
                  </div>
                  <Badge className={statusColors[event.status]}>
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{event.participants}/{event.maxParticipants} participantes</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold text-lg">{event.price}</span>
                  <Link href={`/evento/${event.id}`}>
                    <Button size="sm" variant="outline">
                      Ver detalhes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {category.events.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum evento encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Não há eventos nesta categoria no momento.
            </p>
            <Link href="/">
              <Button>
                Ver todas as categorias
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Quer organizar um evento de {category.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Crie seu próprio evento e comece a receber inscrições em minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Criar evento
              </Button>
            </Link>
            <Link href="/como-funciona">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
                Como funciona
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Gera as páginas estaticamente no momento da build
export async function generateStaticParams() {
  const slugs = Object.keys(categoryData)
  return slugs.map((slug) => ({
    slug,
  }))
}

// Configurações de geração estática
export const dynamic = 'force-static'
export const dynamicParams = false // Não permite slugs que não foram pré-renderizados
export const revalidate = 3600 // Revalida a cada 1 hora