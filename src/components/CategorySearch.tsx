"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export function CategorySearch() {
  return (
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
  )
} 