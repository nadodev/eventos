"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  Save, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Building,
  CheckCircle
} from "lucide-react"

export default function ConfiguracoesPage() {
  const [generalSettings, setGeneralSettings] = useState({
    organizationName: "EventosUni",
    email: "contato@eventosuni.com",
    phone: "(11) 99999-9999",
    website: "https://eventosuni.com",
    address: "Rua das Universidades, 123 - São Paulo, SP",
    timezone: "America/Sao_Paulo",
    currency: "BRL"
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newRegistrationAlerts: true,
    paymentConfirmations: true,
    eventReminders: true,
    marketingEmails: false
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "8",
    passwordExpiry: "90",
    loginAlerts: true
  })

  const [paymentSettings, setPaymentSettings] = useState({
    pixEnabled: true,
    creditCardEnabled: true,
    bankTransferEnabled: false,
    autoRefund: true,
    taxRate: "0"
  })

  const handleInputChange = (section: string, field: string, value: string | boolean) => {
    switch (section) {
      case "general":
        setGeneralSettings(prev => ({ ...prev, [field]: value }))
        break
      case "notifications":
        setNotificationSettings(prev => ({ ...prev, [field]: value }))
        break
      case "security":
        setSecuritySettings(prev => ({ ...prev, [field]: value }))
        break
      case "payment":
        setPaymentSettings(prev => ({ ...prev, [field]: value }))
        break
    }
  }

  const handleSave = (section: string) => {
    console.log(`Salvando configurações de ${section}`)
    alert(`Configurações de ${section} salvas com sucesso!`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground">Gerencie as configurações da sua conta e plataforma</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Configurações Gerais */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building className="w-5 h-5" />
              <span>Informações da Organização</span>
            </CardTitle>
            <CardDescription>
              Configure as informações básicas da sua organização
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Nome da Organização</Label>
              <Input
                id="orgName"
                value={generalSettings.organizationName}
                onChange={(e) => handleInputChange("general", "organizationName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email de Contato</Label>
              <Input
                id="email"
                type="email"
                value={generalSettings.email}
                onChange={(e) => handleInputChange("general", "email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                value={generalSettings.phone}
                onChange={(e) => handleInputChange("general", "phone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={generalSettings.website}
                onChange={(e) => handleInputChange("general", "website", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Textarea
                id="address"
                value={generalSettings.address}
                onChange={(e) => handleInputChange("general", "address", e.target.value)}
                rows={2}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Fuso Horário</Label>
                <Select 
                  value={generalSettings.timezone} 
                  onValueChange={(value) => handleInputChange("general", "timezone", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="America/Sao_Paulo">São Paulo (GMT-3)</SelectItem>
                    <SelectItem value="America/Manaus">Manaus (GMT-4)</SelectItem>
                    <SelectItem value="America/Belem">Belém (GMT-3)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Moeda</Label>
                <Select 
                  value={generalSettings.currency} 
                  onValueChange={(value) => handleInputChange("general", "currency", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BRL">Real (R$)</SelectItem>
                    <SelectItem value="USD">Dólar ($)</SelectItem>
                    <SelectItem value="EUR">Euro (€)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={() => handleSave("gerais")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações Gerais
            </Button>
          </CardContent>
        </Card>

        {/* Configurações de Notificações */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notificações</span>
            </CardTitle>
            <CardDescription>
              Configure como você recebe notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificações por Email</Label>
                <p className="text-sm text-muted-foreground">
                  Receber notificações por email
                </p>
              </div>
              <Switch
                checked={notificationSettings.emailNotifications}
                onCheckedChange={(checked: boolean) => handleInputChange("notifications", "emailNotifications", checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas de Nova Inscrição</Label>
                <p className="text-sm text-muted-foreground">
                  Notificar quando alguém se inscrever
                </p>
              </div>
              <Switch
                checked={notificationSettings.newRegistrationAlerts}
                onCheckedChange={(checked: boolean) => handleInputChange("notifications", "newRegistrationAlerts", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Confirmações de Pagamento</Label>
                <p className="text-sm text-muted-foreground">
                  Notificar quando pagamentos forem confirmados
                </p>
              </div>
              <Switch
                checked={notificationSettings.paymentConfirmations}
                onCheckedChange={(checked: boolean) => handleInputChange("notifications", "paymentConfirmations", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Lembretes de Eventos</Label>
                <p className="text-sm text-muted-foreground">
                  Enviar lembretes antes dos eventos
                </p>
              </div>
              <Switch
                checked={notificationSettings.eventReminders}
                onCheckedChange={(checked: boolean) => handleInputChange("notifications", "eventReminders", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Emails de Marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Receber emails promocionais
                </p>
              </div>
              <Switch
                checked={notificationSettings.marketingEmails}
                onCheckedChange={(checked: boolean) => handleInputChange("notifications", "marketingEmails", checked)}
              />
            </div>

            <Button onClick={() => handleSave("notificações")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações de Notificações
            </Button>
          </CardContent>
        </Card>

        {/* Configurações de Segurança */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Segurança</span>
            </CardTitle>
            <CardDescription>
              Configure as opções de segurança da sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticação em Duas Etapas</Label>
                <p className="text-sm text-muted-foreground">
                  Adicionar uma camada extra de segurança
                </p>
              </div>
              <Switch
                checked={securitySettings.twoFactorAuth}
                onCheckedChange={(checked: boolean) => handleInputChange("security", "twoFactorAuth", checked)}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Tempo de Sessão (horas)</Label>
              <Select 
                value={securitySettings.sessionTimeout} 
                onValueChange={(value) => handleInputChange("security", "sessionTimeout", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 hora</SelectItem>
                  <SelectItem value="4">4 horas</SelectItem>
                  <SelectItem value="8">8 horas</SelectItem>
                  <SelectItem value="24">24 horas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Expiração de Senha (dias)</Label>
              <Select 
                value={securitySettings.passwordExpiry} 
                onValueChange={(value) => handleInputChange("security", "passwordExpiry", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 dias</SelectItem>
                  <SelectItem value="60">60 dias</SelectItem>
                  <SelectItem value="90">90 dias</SelectItem>
                  <SelectItem value="180">180 dias</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Alertas de Login</Label>
                <p className="text-sm text-muted-foreground">
                  Notificar sobre logins suspeitos
                </p>
              </div>
              <Switch
                checked={securitySettings.loginAlerts}
                onCheckedChange={(checked: boolean) => handleInputChange("security", "loginAlerts", checked)}
              />
            </div>

            <Button onClick={() => handleSave("segurança")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações de Segurança
            </Button>
          </CardContent>
        </Card>

        {/* Configurações de Pagamento */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Pagamentos</span>
            </CardTitle>
            <CardDescription>
              Configure as opções de pagamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>PIX</Label>
                <p className="text-sm text-muted-foreground">
                  Aceitar pagamentos via PIX
                </p>
              </div>
              <Switch
                checked={paymentSettings.pixEnabled}
                onCheckedChange={(checked: boolean) => handleInputChange("payment", "pixEnabled", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Cartão de Crédito</Label>
                <p className="text-sm text-muted-foreground">
                  Aceitar cartões de crédito
                </p>
              </div>
              <Switch
                checked={paymentSettings.creditCardEnabled}
                onCheckedChange={(checked: boolean) => handleInputChange("payment", "creditCardEnabled", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Transferência Bancária</Label>
                <p className="text-sm text-muted-foreground">
                  Aceitar transferências bancárias
                </p>
              </div>
              <Switch
                checked={paymentSettings.bankTransferEnabled}
                onCheckedChange={(checked: boolean) => handleInputChange("payment", "bankTransferEnabled", checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Reembolso Automático</Label>
                <p className="text-sm text-muted-foreground">
                  Processar reembolsos automaticamente
                </p>
              </div>
              <Switch
                checked={paymentSettings.autoRefund}
                onCheckedChange={(checked: boolean) => handleInputChange("payment", "autoRefund", checked)}
              />
            </div>

            <div className="space-y-2">
              <Label>Taxa de Serviço (%)</Label>
              <Input
                type="number"
                value={paymentSettings.taxRate}
                onChange={(e) => handleInputChange("payment", "taxRate", e.target.value)}
                placeholder="0"
              />
            </div>

            <Button onClick={() => handleSave("pagamentos")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Salvar Configurações de Pagamento
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Status do Sistema */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Status do Sistema</span>
          </CardTitle>
          <CardDescription>
            Verifique o status dos serviços da plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-foreground">API Principal</p>
                <p className="text-sm text-muted-foreground">Operacional</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-foreground">Pagamentos</p>
                <p className="text-sm text-muted-foreground">Operacional</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">Operacional</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 