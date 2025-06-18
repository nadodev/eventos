import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Organize seu evento universitário com{" "}
              <span className="text-blue-600 dark:text-blue-400">facilidade</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Simplifique a organização de eventos acadêmicos. Desde formaturas até festas, 
              nossa plataforma oferece todas as ferramentas que você precisa para criar 
              eventos incríveis sem dor de cabeça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/registro">
                <Button size="lg" className="text-lg px-8 py-6">
                  Criar evento grátis
                </Button>
              </Link>
              <Link href="/como-funciona">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Ver como funciona
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% gratuito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Setup em 5 minutos</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold dark:text-white">Formatura 2024</h3>
                    <p className="text-sm text-muted-foreground">Engenharia de Software</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">150 inscritos</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-400">R$ 15.000 arrecadados</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-full">
              <span className="text-2xl">🎉</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-100 dark:bg-purple-900/20 p-4 rounded-full">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 