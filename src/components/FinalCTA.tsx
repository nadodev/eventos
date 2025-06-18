import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para organizar seu evento?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 leading-relaxed">
            Junte-se a milhares de estudantes que já organizaram eventos incríveis 
            com a EventosUni. Comece hoje mesmo e transforme suas ideias em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100 dark:bg-white dark:text-blue-600 dark:hover:bg-gray-100">
                Criar conta grátis
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-blue-600">
                Falar com especialista
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-blue-100 dark:text-blue-200">
            <p className="text-sm">
              ✨ Sem cartão de crédito • ✨ Setup em 5 minutos • ✨ Suporte 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 