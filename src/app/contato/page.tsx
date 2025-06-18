"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "contato@eventosuni.com",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Telefone",
      value: "(11) 99999-9999",
      description: "Segunda a Sexta, 9h às 18h"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Endereço",
      value: "São Paulo, SP",
      description: "Escritório principal"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Horário",
      value: "9h às 18h",
      description: "Segunda a Sexta-feira"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem alguma dúvida, sugestão ou quer saber mais sobre a EventosUni? 
            Nossa equipe está pronta para ajudar você.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Envie sua mensagem
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entraremos em contato o mais rápido possível.
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Como podemos ajudar?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Conte-nos mais sobre sua dúvida ou solicitação..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Informações de contato
                </h2>
                <p className="text-muted-foreground">
                  Escolha a forma mais conveniente para entrar em contato conosco.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{info.title}</h3>
                          <p className="text-lg font-medium text-blue-600">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Perguntas Frequentes</span>
                  </CardTitle>
                  <CardDescription>
                    Respostas rápidas para as dúvidas mais comuns
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      • Como funciona a plataforma?
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      • Quais são os planos disponíveis?
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      • Como cancelar minha assinatura?
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      • Vocês oferecem suporte técnico?
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      • Posso personalizar meu evento?
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Onde nos encontrar
            </h2>
            <p className="text-muted-foreground mb-8">
              Nosso escritório está localizado no coração de São Paulo
            </p>
            
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Mapa interativo</p>
                <p className="text-sm text-gray-500">Av. Paulista, 1000 - São Paulo, SP</p>
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
            Não perca mais tempo com planilhas e processos complicados. 
            Comece a organizar seus eventos de forma profissional hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Criar conta grátis
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
              Agendar demonstração
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 