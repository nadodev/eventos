"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (term: string) => void
  category: string
  setCategory: (category: string) => void
  period: string
  setPeriod: (period: string) => void
  state: string
  setState: (state: string) => void
  eventType: string
  setEventType: (type: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("")
  const [period, setPeriod] = useState("")
  const [state, setState] = useState("")
  const [eventType, setEventType] = useState("")

  return (
    <SearchContext.Provider
      value={{
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
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
} 