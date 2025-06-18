"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Save, Eye, Tag, Palette, Settings } from "lucide-react"
import Link from "next/link"

const colorOptions = [
  { value: "blue", label: "Azul", icon: "🔵" },
  { value: "green", label: "Verde", icon: "🟢" },
  { value: "purple", label: "Roxo", icon: "🟣" },
  { value: "orange", label: "Laranja", icon: "🟠" },
  { value: "red", label: "Vermelho", icon: "🔴" },
  { value: "yellow", label: "Amarelo", icon: "🟡" },
  { value: "pink", label: "Rosa", icon: "🩷" },
  { value: "indigo", label: "Índigo", icon: "🟦" }
]

const iconOptions = [
  { value: "🎓", label: "Formatura" },
  { value: "💻", label: "Tecnologia" },
  { value: "🎉", label: "Festa" },
  { value: "🎤", label: "Palestra" },
  { value: "🔧", label: "Workshop" },
  { value: "⚽", label: "Esporte" },
  { value: "🎨", label: "Arte" },
  { value: "📚", label: "Educação" },
  { value: "🎵", label: "Música" },
  { value: "🍕", label: "Gastronomia" },
  { value: "🌍", label: "Internacional" },
  { value: "💡", label: "Inovação" }
]

export default function NovaCategoriaPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "🎓",
    color: "blue",
    isActive: true
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para salvar a categoria
    console.log("Salvando categoria:", formData)
    alert("Categoria criada com sucesso!")
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600",
      green: "bg-green-100 dark:bg-green-900/20 text-green-600",
      purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600",
      orange: "bg-orange-100 dark:bg-orange-900/20 text-orange-600",
      red: "bg-red-100 dark:bg-red-900/20 text-red-600",
      yellow: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600",
      pink: "bg-pink-100 dark:bg-pink-900/20 text-pink-600",
      indigo: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/categorias">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Nova Categoria</h1>
            <p className="text-muted-foreground">Crie uma nova categoria de eventos</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Visualizar
          </Button>
          <Button onClick={handleSubmit}>
            <Save className="w-4 h-4 mr-2" />
            Salvar Categoria
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulário Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informações Básicas */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Tag className="w-5 h-5" />
                <span>Informações Básicas</span>
              </CardTitle>
              <CardDescription>
                Configure as informações principais da categoria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome da Categoria *</Label>
                <Input
                  id="name"
                  placeholder="Ex: Formatura, Tecnologia, Festa..."
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  placeholder="Descreva o tipo de eventos que pertencem a esta categoria..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Aparência */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-5 h-5" />
                <span>Aparência</span>
              </CardTitle>
              <CardDescription>
                Personalize a aparência da categoria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Ícone</Label>
                <div className="grid grid-cols-6 gap-2">
                  {iconOptions.map((icon) => (
                    <button
                      key={icon.value}
                      type="button"
                      onClick={() => handleInputChange("icon", icon.value)}
                      className={`p-3 rounded-lg border-2 text-2xl transition-all ${
                        formData.icon === icon.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      title={icon.label}
                    >
                      {icon.value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Cor</Label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => handleInputChange("color", color.value)}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.color === color.value
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      title={color.label}
                    >
                      <div className={`w-6 h-6 rounded-full ${getColorClasses(color.value)}`}></div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configurações */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5" />
                <span>Configurações</span>
              </CardTitle>
              <CardDescription>
                Configure as opções da categoria
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Status Ativo</Label>
                  <p className="text-sm text-muted-foreground">
                    Categorias ativas aparecem nas listagens
                  </p>
                </div>
                <Switch
                  checked={formData.isActive}
                  onCheckedChange={(checked: boolean) => handleInputChange("isActive", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <Card className="bg-card border-border sticky top-6">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Como a categoria aparecerá
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getColorClasses(formData.color)}`}>
                  <span className="text-lg">{formData.icon}</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    {formData.name || "Nome da Categoria"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {formData.description || "Descrição da categoria"}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Detalhes</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nome:</span>
                    <span className="text-foreground">{formData.name || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ícone:</span>
                    <span className="text-foreground">{formData.icon}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cor:</span>
                    <span className="text-foreground capitalize">{formData.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-foreground">
                      {formData.isActive ? "Ativo" : "Inativo"}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 