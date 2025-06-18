"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { 
  User, 
  Save, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Bell,
  Edit,
  Eye,
  EyeOff,
  Lock,
  Key,
  Trash2
} from "lucide-react"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("perfil")
  const [showPassword, setShowPassword] = useState(false)
  
  const [profileData, setProfileData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    bio: "Organizador de eventos universitários apaixonado por criar experiências memoráveis.",
    location: "São Paulo, SP",
    website: "https://joaosilva.com",
    birthday: "1995-03-15",
    avatar: ""
  })

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
    emailNotifications: true,
    marketingEmails: false
  })

  const [preferencesData, setPreferencesData] = useState({
    language: "pt-BR",
    timezone: "America/Sao_Paulo",
    currency: "BRL",
    theme: "system"
  })

  const handleInputChange = (section: string, field: string, value: string | boolean) => {
    switch (section) {
      case "profile":
        setProfileData(prev => ({ ...prev, [field]: value }))
        break
      case "security":
        setSecurityData(prev => ({ ...prev, [field]: value }))
        break
      case "preferences":
        setPreferencesData(prev => ({ ...prev, [field]: value }))
        break
    }
  }

  const handleSave = (section: string) => {
    console.log(`Salvando dados de ${section}`)
    alert(`Dados de ${section} salvos com sucesso!`)
  }

  const tabs = [
    { id: "perfil", name: "Perfil", icon: User },
    { id: "seguranca", name: "Segurança", icon: Shield },
    { id: "preferencias", name: "Preferências", icon: Bell }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Meu Perfil</h1>
            <p className="text-muted-foreground">Gerencie suas informações pessoais e configurações</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "perfil" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Avatar e Info Básica */}
              <Card className="bg-card border-border">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={profileData.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                          {profileData.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle>{profileData.name}</CardTitle>
                  <CardDescription>Organizador de Eventos</CardDescription>
                  <div className="flex justify-center space-x-2 mt-2">
                    <Badge variant="outline">Pro</Badge>
                    <Badge variant="secondary">Verificado</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Membro desde 2023</span>
                  </div>
                </CardContent>
              </Card>

              {/* Formulário de Perfil */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>
                      Atualize suas informações pessoais
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => handleInputChange("profile", "name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => handleInputChange("profile", "email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => handleInputChange("profile", "phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthday">Data de Nascimento</Label>
                        <Input
                          id="birthday"
                          type="date"
                          value={profileData.birthday}
                          onChange={(e) => handleInputChange("profile", "birthday", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Localização</Label>
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) => handleInputChange("profile", "location", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={profileData.website}
                        onChange={(e) => handleInputChange("profile", "website", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografia</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => handleInputChange("profile", "bio", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button onClick={() => handleSave("perfil")} className="w-full">
                      <Save className="w-4 h-4 mr-2" />
                      Salvar Alterações
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "seguranca" && (
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Alterar Senha</CardTitle>
                  <CardDescription>
                    Mantenha sua conta segura com uma senha forte
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        value={securityData.currentPassword}
                        onChange={(e) => handleInputChange("security", "currentPassword", e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={securityData.newPassword}
                      onChange={(e) => handleInputChange("security", "newPassword", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={securityData.confirmPassword}
                      onChange={(e) => handleInputChange("security", "confirmPassword", e.target.value)}
                    />
                  </div>

                  <Button onClick={() => handleSave("senha")} className="w-full">
                    <Lock className="w-4 h-4 mr-2" />
                    Alterar Senha
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Autenticação em Duas Etapas</CardTitle>
                  <CardDescription>
                    Adicione uma camada extra de segurança à sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Autenticação em Duas Etapas</Label>
                      <p className="text-sm text-muted-foreground">
                        Use um app autenticador para proteger sua conta
                      </p>
                    </div>
                    <Switch
                      checked={securityData.twoFactorAuth}
                      onCheckedChange={(checked: boolean) => handleInputChange("security", "twoFactorAuth", checked)}
                    />
                  </div>

                  {securityData.twoFactorAuth && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Configure um app autenticador como Google Authenticator ou Authy para gerar códigos de verificação.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Notificações de Segurança</CardTitle>
                  <CardDescription>
                    Configure alertas de segurança para sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por Email</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber alertas de segurança por email
                      </p>
                    </div>
                    <Switch
                      checked={securityData.emailNotifications}
                      onCheckedChange={(checked: boolean) => handleInputChange("security", "emailNotifications", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Emails de Marketing</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber emails promocionais e novidades
                      </p>
                    </div>
                    <Switch
                      checked={securityData.marketingEmails}
                      onCheckedChange={(checked: boolean) => handleInputChange("security", "marketingEmails", checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "preferencias" && (
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Preferências Gerais</CardTitle>
                  <CardDescription>
                    Configure suas preferências de uso da plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Idioma</Label>
                      <select 
                        className="w-full p-2 border rounded-md bg-background"
                        value={preferencesData.language}
                        onChange={(e) => handleInputChange("preferences", "language", e.target.value)}
                      >
                        <option value="pt-BR">Português (Brasil)</option>
                        <option value="en-US">English (US)</option>
                        <option value="es-ES">Español</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Fuso Horário</Label>
                      <select 
                        className="w-full p-2 border rounded-md bg-background"
                        value={preferencesData.timezone}
                        onChange={(e) => handleInputChange("preferences", "timezone", e.target.value)}
                      >
                        <option value="America/Sao_Paulo">São Paulo (GMT-3)</option>
                        <option value="America/Manaus">Manaus (GMT-4)</option>
                        <option value="America/Belem">Belém (GMT-3)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Moeda</Label>
                      <select 
                        className="w-full p-2 border rounded-md bg-background"
                        value={preferencesData.currency}
                        onChange={(e) => handleInputChange("preferences", "currency", e.target.value)}
                      >
                        <option value="BRL">Real (R$)</option>
                        <option value="USD">Dólar ($)</option>
                        <option value="EUR">Euro (€)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>Tema</Label>
                      <select 
                        className="w-full p-2 border rounded-md bg-background"
                        value={preferencesData.theme}
                        onChange={(e) => handleInputChange("preferences", "theme", e.target.value)}
                      >
                        <option value="system">Sistema</option>
                        <option value="light">Claro</option>
                        <option value="dark">Escuro</option>
                      </select>
                    </div>
                  </div>

                  <Button onClick={() => handleSave("preferências")} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Preferências
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-red-600">Zona de Perigo</CardTitle>
                  <CardDescription>
                    Ações irreversíveis para sua conta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg">
                    <h4 className="font-medium text-red-600 mb-2">Excluir Conta</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Esta ação é irreversível. Todos os seus dados serão permanentemente excluídos.
                    </p>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Excluir Conta
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 