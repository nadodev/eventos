import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎓</span>
              <h3 className="text-xl font-bold">EventosUni</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Simplificando a organização de eventos universitários. 
              Conectamos estudantes, facilitamos a logística e tornamos 
              cada evento uma experiência inesquecível.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/precos" className="text-gray-300 hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-300 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categoria/formaturas" className="text-gray-300 hover:text-white transition-colors">
                  Formaturas
                </Link>
              </li>
              <li>
                <Link href="/categoria/festas" className="text-gray-300 hover:text-white transition-colors">
                  Festas de Calouros
                </Link>
              </li>
              <li>
                <Link href="/categoria/palestras" className="text-gray-300 hover:text-white transition-colors">
                  Palestras e Workshops
                </Link>
              </li>
              <li>
                <Link href="/categoria/esportes" className="text-gray-300 hover:text-white transition-colors">
                  Eventos Esportivos
                </Link>
              </li>
              <li>
                <Link href="/categoria/culturais" className="text-gray-300 hover:text-white transition-colors">
                  Eventos Culturais
                </Link>
              </li>
              <li>
                <Link href="/categoria/tecnologia" className="text-gray-300 hover:text-white transition-colors">
                  Hackathons e Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">contato@eventosuni.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 EventosUni. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 