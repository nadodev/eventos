import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users, CreditCard, CheckCircle, Zap, Shield, Headphones } from "lucide-react"
import Link from "next/link"

export default function ComoFuncionaPage() {
  const steps = [
    {
      number: "01",
      title: "Crie sua conta",
      description: "Registre-se gratuitamente em menos de 2 minutos",
      icon: "👤",
      details: [
        "Cadastro rápido com email",
        "Verificação instantânea",
        "Perfil personalizado"
      ]
    },
    {
      number: "02",
      title: "Configure seu evento",
      description: "Escolha um template e personalize conforme sua necessidade",
      icon: "⚙️",
      details: [
        "Templates prontos para usar",
        "Personalização completa",
        "Configuração em minutos"
      ]
    },
    {
      number: "03",
      title: "Divulgue e gerencie",
      description: "Compartilhe o link e acompanhe as inscrições em tempo real",
      icon: "📢",
      details: [
        "Link personalizado",
        "Redes sociais integradas",
        "Dashboard em tempo real"
      ]
    },
    {
      number: "04",
      title: "Realize seu evento",
      description: "Aproveite todas as ferramentas durante o evento",
      icon: "🎉",
      details: [
        "Check-in digital",
        "Certificados automáticos",
        "Relatórios completos"
      ]
    }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Rápido e Fácil",
      description: "Configure seu evento em menos de 5 minutos com nossos templates prontos"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Seguro",
      description: "Seus dados protegidos com criptografia de ponta a ponta"
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600" />,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre pronta para ajudar você"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Como funciona a EventosUni
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organizar eventos universitários nunca foi tão simples. 
            Em apenas 4 passos você terá seu evento pronto e funcionando.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {step.number}
                  </Badge>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Por que escolher a EventosUni?
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa plataforma foi desenvolvida especificamente para o ambiente universitário
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Veja como é fácil organizar seu evento
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nossa interface intuitiva permite que você configure tudo rapidamente, 
                  desde a criação do evento até o gerenciamento de inscrições.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Agendamento Inteligente</h3>
                      <p className="text-sm text-muted-foreground">
                        Escolha datas e horários automaticamente verificados
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Gestão de Participantes</h3>
                      <p className="text-sm text-muted-foreground">
                        Controle total sobre inscrições e presenças
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Pagamentos Integrados</h3>
                      <p className="text-sm text-muted-foreground">
                        Receba pagamentos online de forma segura
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/registro">
                    <Button size="lg" className="w-full sm:w-auto">
                      Começar agora
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Ver demonstração
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">Formatura 2024</h3>
                      <Badge variant="secondary">Ativo</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="text-sm">15 de Dezembro, 2024</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-green-500" />
                        <span className="text-sm">150 inscritos / 200 vagas</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-5 h-5 text-purple-500" />
                        <span className="text-sm">R$ 15.000 arrecadados</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progresso</span>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-100 p-3 rounded-full">
                  <span className="text-xl">🎉</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-100 p-3 rounded-full">
                  <span className="text-xl">✅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
                Ver planos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 