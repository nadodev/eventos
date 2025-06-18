"use client"

import { useState, useEffect, Suspense } from "react"
import { Search, Filter, MapPin, Calendar, Users, Clock, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/Header"
import { SearchSkeleton } from "@/components/SearchSkeleton"
import SearchResults from "./SearchResults"

// Dados mockados para demonstração
const mockEvents = [
  {
    id: "formatura-eng-2024",
    title: "Formatura Engenharia 2024",
    description: "Celebração da formatura da turma de Engenharia de Software com jantar e festa",
    date: "15 de Dezembro, 2024",
    time: "19:00",
    location: "Centro de Eventos da Universidade",
    attendees: 150,
    maxAttendees: 200,
    price: "R$ 120",
    category: "Formatura",
    image: "🎓",
    status: "Em andamento",
    rating: 4.8,
    reviews: 45,
    tags: ["Formatura", "Jantar", "Festa"]
  },
  {
    id: "hackathon-2024",
    title: "Hackathon de Inovação 2024",
    description: "48 horas de programação para criar soluções inovadoras para problemas reais",
    date: "20-22 de Novembro, 2024",
    time: "18:00",
    location: "Laboratório de Informática",
    attendees: 45,
    maxAttendees: 60,
    price: "Grátis",
    category: "Tecnologia",
    image: "💻",
    status: "Inscrições abertas",
    rating: 4.9,
    reviews: 32,
    tags: ["Hackathon", "Programação", "Inovação"]
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
    status: "Em breve",
    rating: 4.5,
    reviews: 78,
    tags: ["Calouros", "Integração", "Festa"]
  },
  {
    id: "palestra-carreira",
    title: "Palestra: Carreira em Tech",
    description: "Conversa com profissionais da área de tecnologia sobre mercado e oportunidades",
    date: "5 de Abril, 2024",
    time: "14:00",
    location: "Auditório Principal",
    attendees: 80,
    maxAttendees: 120,
    price: "R$ 15",
    category: "Palestra",
    image: "🎤",
    status: "Inscrições abertas",
    rating: 4.7,
    reviews: 56,
    tags: ["Carreira", "Tech", "Networking"]
  },
  {
    id: "workshop-react",
    title: "Workshop: React Avançado",
    description: "Aprenda técnicas avançadas de React com hands-on",
    date: "12 de Maio, 2024",
    time: "09:00",
    location: "Sala de Aula 301",
    attendees: 35,
    maxAttendees: 50,
    price: "R$ 50",
    category: "Workshop",
    image: "⚛️",
    status: "Inscrições abertas",
    rating: 4.6,
    reviews: 23,
    tags: ["React", "Workshop", "Programação"]
  },
  {
    id: "show-talentos",
    title: "Show de Talentos 2024",
    description: "Apresentações musicais, dança e performances artísticas",
    date: "25 de Junho, 2024",
    time: "19:30",
    location: "Teatro Universitário",
    attendees: 180,
    maxAttendees: 250,
    price: "R$ 20",
    category: "Cultural",
    image: "🎭",
    status: "Em breve",
    rating: 4.4,
    reviews: 89,
    tags: ["Talentos", "Música", "Arte"]
  }
]

const categories = [
  "Todos",
  "Formatura",
  "Festa",
  "Palestra",
  "Workshop",
  "Tecnologia",
  "Cultural",
  "Esportes"
]

const locations = [
  "Todos os locais",
  "Centro de Eventos",
  "Auditório Principal",
  "Laboratório de Informática",
  "Quadra da Universidade",
  "Teatro Universitário",
  "Sala de Aula 301"
]

export default function BuscaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resultados da Busca</h1>
        
        <Suspense fallback={<SearchSkeleton />}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  )
} 