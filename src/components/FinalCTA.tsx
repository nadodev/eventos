import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Comece agora sua organização sem dor de cabeça
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Junte-se a milhares de estudantes que já organizaram eventos incríveis 
            usando nossa plataforma. É rápido, fácil e 100% gratuito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Criar meu evento
              </Button>
            </Link>
            <Link href="/como-funciona">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                Ver demonstração
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Setup em 5 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 