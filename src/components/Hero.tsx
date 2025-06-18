"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search } from "lucide-react"
import { useSearch } from "@/contexts/SearchContext"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()
  const {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    period,
    setPeriod,
    state,
    setState,
    eventType,
    setEventType,
  } = useSearch()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const searchParams = new URLSearchParams()
    
    if (searchTerm) searchParams.set("q", searchTerm)
    if (category) searchParams.set("category", category)
    if (period) searchParams.set("period", period)
    if (state) searchParams.set("state", state)
    if (eventType) searchParams.set("type", eventType)

    router.push(`/eventos?${searchParams.toString()}`)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-900 dark:to-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Encontre os principais eventos
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Descubra os melhores eventos universitários em um só lugar. 
            Desde formaturas até festas, encontre o evento perfeito para você.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Pesquisar eventos" 
                  className="pl-12 h-14 text-lg rounded-2xl border-2 focus-visible:ring-2 focus-visible:ring-offset-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="formatura">Formatura</SelectItem>
                    <SelectItem value="festa">Festa</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="palestra">Palestra</SelectItem>
                    <SelectItem value="seminario">Seminário</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hoje">Hoje</SelectItem>
                    <SelectItem value="amanha">Amanhã</SelectItem>
                    <SelectItem value="semana">Esta semana</SelectItem>
                    <SelectItem value="mes">Este mês</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={state} onValueChange={setState}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="mg">Minas Gerais</SelectItem>
                    <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                    <SelectItem value="pr">Paraná</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Tipo de Evento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="presencial">Presencial</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="hibrido">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="flex justify-center">
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-lg bg-gray-600 hover:bg-gray-700 text-white"
                >
                  Buscar Eventos
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Features */}
        <div className="mt-12 flex justify-center items-center space-x-6 text-sm text-white/80">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>100% gratuito</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Setup em 5 minutos</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex justify-center gap-4">
          <Link href="/registro">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Criar evento grátis
            </Button>
          </Link>
          <Link href="/como-funciona">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white/10">
              Ver como funciona
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 