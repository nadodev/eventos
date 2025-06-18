export const categoryData = {
    formatura: {
      name: "Formatura",
      icon: "🎓",
      description: "Organize sua formatura com facilidade e profissionalismo",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      events: [
        {
          id: 1,
          title: "Formatura Eng. Software 2024",
          date: "15/12/2024",
          location: "Centro de Eventos",
          status: "ativo" as const,
          participants: 150,
          maxParticipants: 200,
          price: "R$ 150,00",
          image: "🎓"
        },
        {
          id: 2,
          title: "Formatura Medicina 2024",
          date: "20/12/2024",
          location: "Teatro Municipal",
          status: "ativo" as const,
          participants: 89,
          maxParticipants: 120,
          price: "R$ 200,00",
          image: "🎓"
        },
        {
          id: 3,
          title: "Formatura Direito 2024",
          date: "18/12/2024",
          location: "Auditório Principal",
          status: "finalizado" as const,
          participants: 200,
          maxParticipants: 200,
          price: "R$ 180,00",
          image: "🎓"
        }
      ]
    },
    festa: {
      name: "Festa",
      icon: "🎉",
      description: "Festas e comemorações universitárias inesquecíveis",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      events: [
        {
          id: 4,
          title: "Festa Junina da Computação",
          date: "20/06/2024",
          location: "Campus Universitário",
          status: "ativo" as const,
          participants: 89,
          maxParticipants: 150,
          price: "R$ 25,00",
          image: "🎉"
        },
        {
          id: 5,
          title: "Halloween da Engenharia",
          date: "31/10/2024",
          location: "Quadra Esportiva",
          status: "ativo" as const,
          participants: 120,
          maxParticipants: 200,
          price: "R$ 30,00",
          image: "🎉"
        }
      ]
    },
    viagem: {
      name: "Viagem",
      icon: "🏖️",
      description: "Viagens e passeios acadêmicos organizados",
      color: "text-green-600",
      bgColor: "bg-green-50",
      events: [
        {
          id: 6,
          title: "Viagem para Ouro Preto",
          date: "10/05/2024",
          location: "Ouro Preto, MG",
          status: "finalizado" as const,
          participants: 45,
          maxParticipants: 50,
          price: "R$ 350,00",
          image: "🏖️"
        },
        {
          id: 7,
          title: "Passeio para Campos do Jordão",
          date: "15/07/2024",
          location: "Campos do Jordão, SP",
          status: "ativo" as const,
          participants: 67,
          maxParticipants: 80,
          price: "R$ 280,00",
          image: "🏖️"
        }
      ]
    },
    gincana: {
      name: "Gincana",
      icon: "🏆",
      description: "Competições e eventos esportivos universitários",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      events: [
        {
          id: 8,
          title: "Gincana Intercursos",
          date: "25/04/2024",
          location: "Quadra Esportiva",
          status: "finalizado" as const,
          participants: 200,
          maxParticipants: 200,
          price: "R$ 15,00",
          image: "🏆"
        },
        {
          id: 9,
          title: "Olimpíadas Universitárias",
          date: "05/09/2024",
          location: "Complexo Esportivo",
          status: "ativo" as const,
          participants: 150,
          maxParticipants: 300,
          price: "R$ 20,00",
          image: "🏆"
        }
      ]
    }
  }