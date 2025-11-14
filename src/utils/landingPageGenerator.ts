import { BriefingData } from "@/components/BriefingForm";

export const generateLandingPage = (briefing: BriefingData): string => {
  const { service, targetAudience, toneOfVoice, cta, additionalInfo } = briefing;
  
  // Gerar paleta de cores baseada no serviço
  const getColorScheme = (service: string) => {
    const serviceLower = service.toLowerCase();
    if (serviceLower.includes("advogad") || serviceLower.includes("direito") || serviceLower.includes("jurídico")) {
      return {
        primary: "slate-900",
        secondary: "amber-600",
        accent: "slate-700",
        bg: "slate-50",
      };
    } else if (serviceLower.includes("pet") || serviceLower.includes("animal")) {
      return {
        primary: "blue-600",
        secondary: "yellow-400",
        accent: "blue-800",
        bg: "blue-50",
      };
    } else if (serviceLower.includes("yoga") || serviceLower.includes("meditação") || serviceLower.includes("wellness")) {
      return {
        primary: "purple-600",
        secondary: "pink-400",
        accent: "purple-800",
        bg: "purple-50",
      };
    } else if (serviceLower.includes("tecnologia") || serviceLower.includes("software") || serviceLower.includes("ti")) {
      return {
        primary: "indigo-600",
        secondary: "cyan-400",
        accent: "indigo-800",
        bg: "indigo-50",
      };
    } else if (serviceLower.includes("restaurante") || serviceLower.includes("food") || serviceLower.includes("gastronomia")) {
      return {
        primary: "red-600",
        secondary: "orange-400",
        accent: "red-800",
        bg: "orange-50",
      };
    }
    return {
      primary: "blue-700",
      secondary: "teal-500",
      accent: "blue-900",
      bg: "gray-50",
    };
  };

  const colors = getColorScheme(service);
  
  // Gerar termo de busca para imagens
  const getImageQuery = (service: string) => {
    const serviceLower = service.toLowerCase();
    if (serviceLower.includes("advogad")) return "lawyer+office";
    if (serviceLower.includes("pet")) return "happy+pets";
    if (serviceLower.includes("yoga")) return "meditation+wellness";
    if (serviceLower.includes("tecnologia")) return "technology+office";
    if (serviceLower.includes("restaurante")) return "restaurant+food";
    return "business+professional";
  };

  const imageQuery = getImageQuery(service);

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service} - Landing Page</title>
    <meta name="description" content="${service} - Especializado em atender ${targetAudience}">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
        .smooth-scroll {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body class="smooth-scroll">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-${colors.primary}">
                ${service.split(' ')[0]}
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#inicio" class="text-gray-700 hover:text-${colors.primary} transition">Início</a>
                <a href="#servicos" class="text-gray-700 hover:text-${colors.primary} transition">Serviços</a>
                <a href="#sobre" class="text-gray-700 hover:text-${colors.primary} transition">Sobre</a>
                <a href="#contato" class="text-gray-700 hover:text-${colors.primary} transition">Contato</a>
            </div>
            <button class="md:hidden text-${colors.primary}" onclick="toggleMenu()">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </nav>
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
            <a href="#inicio" class="block px-4 py-2 text-gray-700 hover:bg-${colors.bg}">Início</a>
            <a href="#servicos" class="block px-4 py-2 text-gray-700 hover:bg-${colors.bg}">Serviços</a>
            <a href="#sobre" class="block px-4 py-2 text-gray-700 hover:bg-${colors.bg}">Sobre</a>
            <a href="#contato" class="block px-4 py-2 text-gray-700 hover:bg-${colors.bg}">Contato</a>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="inicio" class="bg-gradient-to-br from-${colors.primary} to-${colors.accent} text-white py-20 md:py-32">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Transforme Seus Resultados com ${service}
                        </h1>
                        <p class="text-xl md:text-2xl text-white/90">
                            Soluções especializadas para ${targetAudience} que buscam excelência e resultados comprovados.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="#contato" class="bg-${colors.secondary} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition text-center">
                                ${cta}
                            </a>
                            <a href="#servicos" class="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition text-center">
                                Saiba Mais
                            </a>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <img src="https://source.unsplash.com/random/600x500?${imageQuery}" 
                             alt="${service}" 
                             class="rounded-2xl shadow-2xl object-cover w-full h-[500px]">
                    </div>
                </div>
            </div>
        </section>

        <!-- Features/Serviços -->
        <section id="servicos" class="py-20 bg-${colors.bg}">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-${colors.primary} mb-4">
                        Nossos Serviços
                    </h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                        Oferecemos soluções completas e personalizadas para atender suas necessidades específicas.
                    </p>
                </div>
                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                        <div class="w-16 h-16 bg-${colors.primary} rounded-lg flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-${colors.primary} mb-4">Qualidade Garantida</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Processos certificados e equipe altamente qualificada para garantir os melhores resultados.
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                        <div class="w-16 h-16 bg-${colors.primary} rounded-lg flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-${colors.primary} mb-4">Atendimento Ágil</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Resposta rápida e suporte dedicado em todas as etapas do processo.
                        </p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                        <div class="w-16 h-16 bg-${colors.primary} rounded-lg flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-${colors.primary} mb-4">Resultados Comprovados</h3>
                        <p class="text-gray-600 leading-relaxed">
                            Histórico de sucesso e satisfação de centenas de clientes atendidos.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sobre/Depoimento -->
        <section id="sobre" class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://source.unsplash.com/random/600x400?${imageQuery}+team" 
                             alt="Nossa Equipe" 
                             class="rounded-2xl shadow-lg object-cover w-full h-[400px]">
                    </div>
                    <div class="space-y-6">
                        <h2 class="text-3xl md:text-4xl font-bold text-${colors.primary}">
                            Por Que Escolher ${service.split(' ')[0]}?
                        </h2>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Com anos de experiência no mercado, nossa equipe é especializada em atender ${targetAudience} com excelência e dedicação.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            Nosso compromisso é entregar soluções personalizadas que realmente fazem a diferença nos seus resultados. ${toneOfVoice === "Profissional e confiável" ? "Trabalhamos com seriedade e transparência em cada projeto." : "Nossa abordagem amigável e próxima garante que você se sinta sempre acolhido."}
                        </p>
                        <div class="bg-${colors.bg} p-6 rounded-xl border-l-4 border-${colors.secondary}">
                            <p class="text-gray-700 italic mb-4">
                                "Excelente atendimento e resultados que superaram minhas expectativas. Recomendo fortemente!"
                            </p>
                            <p class="text-${colors.primary} font-semibold">- Cliente Satisfeito</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Final / Contato -->
        <section id="contato" class="py-20 bg-gradient-to-br from-${colors.primary} to-${colors.accent}">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center text-white mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Pronto Para Começar?
                    </h2>
                    <p class="text-xl text-white/90">
                        Entre em contato agora e descubra como podemos ajudar você a alcançar seus objetivos.
                    </p>
                </div>
                <form action="https://formspree.io/f/SEU-EMAIL-AQUI" method="POST" class="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <div class="space-y-6">
                        <div>
                            <label for="nome" class="block text-${colors.primary} font-semibold mb-2">Nome Completo *</label>
                            <input type="text" id="nome" name="nome" required 
                                   class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-${colors.primary} focus:outline-none">
                        </div>
                        <div>
                            <label for="email" class="block text-${colors.primary} font-semibold mb-2">E-mail *</label>
                            <input type="email" id="email" name="email" required 
                                   class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-${colors.primary} focus:outline-none">
                        </div>
                        <div>
                            <label for="telefone" class="block text-${colors.primary} font-semibold mb-2">Telefone/WhatsApp *</label>
                            <input type="tel" id="telefone" name="telefone" required 
                                   class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-${colors.primary} focus:outline-none">
                        </div>
                        <div>
                            <label for="mensagem" class="block text-${colors.primary} font-semibold mb-2">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows="4" 
                                      class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-${colors.primary} focus:outline-none resize-none"></textarea>
                        </div>
                        <button type="submit" 
                                class="w-full bg-${colors.primary} text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition">
                            ${cta}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-${colors.accent} text-white py-8">
        <div class="container mx-auto px-4 text-center">
            <p class="text-white/80">
                &copy; ${new Date().getFullYear()} ${service}. Todos os direitos reservados.
            </p>
            ${additionalInfo ? `<p class="text-white/60 mt-2 text-sm">${additionalInfo}</p>` : ''}
        </div>
    </footer>

    <script>
        function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }

        // Fechar menu mobile ao clicar em um link
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.add('hidden');
            });
        });
    </script>
</body>
</html>`;
};
