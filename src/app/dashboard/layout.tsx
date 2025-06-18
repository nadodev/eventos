"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Tag, Settings, BarChart3, Users, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  {
    id: "overview",
    name: "Visão Geral",
    icon: BarChart3,
    href: "/dashboard"
  },
  {
    id: "events",
    name: "Eventos",
    icon: Calendar,
    href: "/dashboard/eventos",
    subItems: [
      { name: "Todos os Eventos", href: "/dashboard/eventos" },
      { name: "Criar Evento", href: "/dashboard/evento/novo" }
    ]
  },
  {
    id: "categories",
    name: "Categorias",
    icon: Tag,
    href: "/dashboard/categorias",
    subItems: [
      { name: "Todas as Categorias", href: "/dashboard/categorias" },
      { name: "Criar Categoria", href: "/dashboard/categoria/novo" }
    ]
  },
  {
    id: "participants",
    name: "Participantes",
    icon: Users,
    href: "/dashboard/participantes"
  },
  {
    id: "settings",
    name: "Configurações",
    icon: Settings,
    href: "/dashboard/configuracoes"
  }
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎓</span>
              <h1 className="text-xl font-bold text-foreground">EventosUni</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.id}>
                <Link href={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={`w-full justify-start ${isActive(item.href) ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                </Link>
                
                {/* Sub-items */}
                {item.subItems && isActive(item.href) && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.subItems.map((subItem, index) => (
                      <Link key={index} href={subItem.href}>
                        <Button
                          variant={pathname === subItem.href ? "secondary" : "ghost"}
                          size="sm"
                          className="w-full justify-start text-sm"
                        >
                          {subItem.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Link href="/">
              <Button variant="outline" className="w-full">
                Voltar ao Site
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-200 ease-in-out ${
        isSidebarOpen ? 'lg:ml-64' : ''
      }`}>
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-background border-b">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <h2 className="text-lg font-semibold text-foreground">
                  {menuItems.find(item => isActive(item.href))?.name || "Dashboard"}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  )
} 