import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Award, Globe, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const stats = [
    {
      number: "50.000+",
      label: "Estudantes atendidos",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      number: "2.000+",
      label: "Eventos realizados",
      icon: <Award className="w-8 h-8 text-green-600" />
    },
    {
      number: "500+",
      label: "Universidades parceiras",
      icon: <Globe className="w-8 h-8 text-purple-600" />
    },
    {
      number: "99.9%",
      label: "Uptime garantido",
      icon: <Shield className="w-8 h-8 text-orange-600" />
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Paixão pela Educação",
      description: "Acreditamos no poder transformador da educação e trabalhamos para facilitar a vida dos estudantes."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Inovação Constante",
      description: "Sempre buscamos novas formas de melhorar a experiência de organização de eventos."
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Comunidade Primeiro",
      description: "Nossa comunidade de usuários é o centro de todas as nossas decisões e melhorias."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Simplicidade",
      description: "Acreditamos que a melhor tecnologia é aquela que você nem percebe que está usando."
    }
  ]

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      avatar: "👩‍💼",
      bio: "Ex-estudante de Engenharia, apaixonada por resolver problemas reais da comunidade universitária."
    },
    {
      name: "Carlos Santos",
      role: "CTO",
      avatar: "👨‍💻",
      bio: "Especialista em desenvolvimento de software com 10+ anos de experiência em startups."
    },
    {
      name: "Mariana Costa",
      role: "Head de Produto",
      avatar: "👩‍🎨",
      bio: "Designer de experiência do usuário focada em criar interfaces intuitivas e acessíveis."
    },
    {
      name: "Pedro Lima",
      role: "Head de Marketing",
      avatar: "👨‍💼",
      bio: "Especialista em marketing digital e crescimento de startups educacionais."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre a EventosUni
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma startup brasileira dedicada a simplificar a organização de eventos universitários, 
            conectando estudantes e facilitando a vida acadêmica.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Transformar a forma como eventos universitários são organizados, proporcionando 
              uma experiência simples, eficiente e acessível para todos os estudantes. 
              Queremos que você foque no que realmente importa: criar momentos inesquecíveis.
            </p>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                "Organizar eventos universitários deve ser fácil, não um pesadelo"
              </h3>
              <p className="text-blue-700">
                — Ana Silva, CEO & Fundadora
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Números que nos orgulham
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <CardTitle className="text-3xl font-bold text-blue-600">
                      {stat.number}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base font-medium">
                      {stat.label}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {value.icon}
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Conheça nossa equipe
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Somos uma equipe apaixonada por educação e tecnologia, 
              trabalhando para tornar a vida universitária mais fácil.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{member.avatar}</div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {member.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Nossa História
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Tudo começou em 2022, quando Ana Silva, então estudante de Engenharia, 
                    enfrentou o desafio de organizar a formatura da sua turma. 
                    O processo era tão complicado e burocrático que ela decidiu criar uma solução.
                  </p>
                  <p>
                    Junto com amigos desenvolvedores, ela criou a primeira versão da EventosUni 
                    como um projeto universitário. O sucesso foi tão grande que decidiram 
                    transformar em uma empresa real.
                  </p>
                  <p>
                    Hoje, somos uma equipe de 15 pessoas apaixonadas, atendendo mais de 
                    50.000 estudantes em todo o Brasil.
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    4.9/5 avaliação dos usuários
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">EventosUni v1.0</h3>
                        <p className="text-sm text-muted-foreground">Primeira versão</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Eventos organizados</span>
                        <span className="font-medium">2.000+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Estudantes atendidos</span>
                        <span className="font-medium">50.000+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Universidades</span>
                        <span className="font-medium">500+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-100 p-3 rounded-full">
                  <span className="text-xl">🚀</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-100 p-3 rounded-full">
                  <span className="text-xl">💡</span>
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
            Faça parte da nossa história
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já transformaram a organização 
            de eventos universitários com nossa plataforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Começar agora
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
                Falar conosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 