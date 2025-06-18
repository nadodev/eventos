import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"
import { CallAction } from "@/components/CallAction"

export default function PrecosPage() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para começar a organizar seus primeiros eventos",
      features: [
        "Até 3 eventos simultâneos",
        "100 inscrições por evento",
        "Templates básicos",
        "Suporte por email",
        "Relatórios básicos"
      ],
      popular: false,
      buttonText: "Começar grátis",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      price: "R$ 29",
      period: "/mês",
      description: "Ideal para comissões e organizadores ativos",
      features: [
        "Eventos ilimitados",
        "500 inscrições por evento",
        "Templates premium",
        "Suporte prioritário",
        "Relatórios avançados",
        "Integração com pagamentos",
        "Personalização de marca",
        "Analytics detalhados"
      ],
      popular: true,
      buttonText: "Começar Pro",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "R$ 99",
      period: "/mês",
      description: "Para universidades e grandes organizações",
      features: [
        "Tudo do plano Pro",
        "Inscrições ilimitadas",
        "Múltiplos organizadores",
        "API personalizada",
        "Suporte 24/7",
        "Treinamento da equipe",
        "White-label",
        "SLA garantido"
      ],
      popular: false,
      buttonText: "Falar com vendas",
      buttonVariant: "outline" as const
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Planos que cabem no seu bolso
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades. Todos os planos incluem 
            atualizações gratuitas e suporte especializado.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={plan.name === "Enterprise" ? "/contato" : "/registro"} className="block">
                  <Button 
                    variant={plan.buttonVariant} 
                    className="w-full mt-6"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Há limite de usuários?</h3>
                  <p className="text-muted-foreground text-sm">
                    O plano Gratuito permite 1 usuário, Pro até 5 usuários, e Enterprise usuários ilimitados.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Oferecem desconto para estudantes?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sim! Estudantes têm 50% de desconto em todos os planos pagos.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Os dados são seguros?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutamente! Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Posso mudar de plano?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sim, você pode fazer upgrade ou downgrade a qualquer momento.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Há período de teste?</h3>
                  <p className="text-muted-foreground text-sm">
                    Todos os planos pagos têm 14 dias de teste gratuito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* CTA Section */}
       <CallAction />
    </div>
  )
} 