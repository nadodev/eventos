"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Star, ArrowLeft, CreditCard, QrCode, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Dados mockados do evento
const eventData = {
  id: "formatura-eng-2024",
  title: "Formatura Engenharia 2024",
  description: "Celebração da formatura da turma de Engenharia de Software com jantar e festa",
  date: "15 de Dezembro, 2024",
  time: "19:00",
  location: "Centro de Eventos da Universidade",
  price: "R$ 120",
  category: "Formatura",
  image: "🎓"
}

export default function CheckoutPage() {
  const params = useParams()
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix")
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simular processamento de pagamento
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 3000)
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2">Pagamento Confirmado!</h1>
              <p className="text-muted-foreground">
                Sua inscrição foi realizada com sucesso. Você receberá um e-mail de confirmação em breve.
              </p>
            </div>
            
            <Card className="bg-card border-border mb-6">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-foreground">{eventData.title}</h3>
                  <p className="text-sm text-muted-foreground">{eventData.date} às {eventData.time}</p>
                  <p className="text-sm text-muted-foreground">{eventData.location}</p>
                  <Badge variant="outline" className="mt-2">Inscrição Confirmada</Badge>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Link href="/dashboard">
                <Button className="w-full">Ir para o Dashboard</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">Voltar ao Início</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/evento/${params.id}/inscrever`} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à inscrição
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Finalizar Pagamento</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Métodos de Pagamento */}
          <div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Método de Pagamento</CardTitle>
                <CardDescription>
                  Escolha como deseja pagar sua inscrição
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* PIX */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="pix"
                      name="paymentMethod"
                      checked={paymentMethod === "pix"}
                      onChange={() => setPaymentMethod("pix")}
                      className="text-primary"
                    />
                    <Label htmlFor="pix" className="flex items-center space-x-2 cursor-pointer">
                      <QrCode className="w-5 h-5" />
                      <span className="text-foreground">PIX</span>
                    </Label>
                  </div>
                  
                  {paymentMethod === "pix" && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-center space-y-4">
                        <div className="bg-white p-4 rounded-lg inline-block">
                          <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                            <QrCode className="w-16 h-16 text-gray-400" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Chave PIX:</p>
                          <p className="font-mono text-sm bg-background p-2 rounded border">
                            formatura2024@universidade.edu.br
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Escaneie o QR Code ou copie a chave PIX para pagar
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cartão de Crédito */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="text-primary"
                    />
                    <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer">
                      <CreditCard className="w-5 h-5" />
                      <span className="text-foreground">Cartão de Crédito</span>
                    </Label>
                  </div>
                  
                  {paymentMethod === "card" && (
                    <form onSubmit={handlePayment} className="space-y-4">
                      <div>
                        <Label htmlFor="number" className="text-foreground">Número do Cartão</Label>
                        <Input
                          id="number"
                          name="number"
                          value={cardData.number}
                          onChange={handleCardInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="name" className="text-foreground">Nome no Cartão</Label>
                        <Input
                          id="name"
                          name="name"
                          value={cardData.name}
                          onChange={handleCardInputChange}
                          placeholder="Nome como está no cartão"
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-foreground">Validade</Label>
                          <Input
                            id="expiry"
                            name="expiry"
                            value={cardData.expiry}
                            onChange={handleCardInputChange}
                            placeholder="MM/AA"
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv" className="text-foreground">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={cardData.cvv}
                            onChange={handleCardInputChange}
                            placeholder="123"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Pedido */}
          <div>
            <Card className="bg-card border-border sticky top-4">
              <CardHeader>
                <CardTitle className="text-foreground">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Evento */}
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">{eventData.image}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{eventData.title}</h3>
                    <p className="text-sm text-muted-foreground">{eventData.category}</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{eventData.date} às {eventData.time}</span>
                    </div>
                  </div>
                </div>

                {/* Valores */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Inscrição:</span>
                    <span className="text-foreground">{eventData.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxa de serviço:</span>
                    <span className="text-foreground">R$ 5,00</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-foreground">R$ 125,00</span>
                  </div>
                </div>

                {/* Botão de Pagamento */}
                <Button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processando...</span>
                    </div>
                  ) : (
                    `Pagar ${paymentMethod === "pix" ? "com PIX" : "com Cartão"}`
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Seu pagamento é processado de forma segura
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 