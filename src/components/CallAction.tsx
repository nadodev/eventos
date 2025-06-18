import Link from "next/link";
import { Button } from "./ui/button";

export function CallAction() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já organizaram eventos incríveis 
            com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Criar conta grátis
              </Button>
            </Link>
            <Link href="/precos">
            <Button size="lg" variant="secondary" className="text-lg px-8">
                Ver planos
              </Button>
            </Link>
          </div>
        </div>
    </div>
  )
}