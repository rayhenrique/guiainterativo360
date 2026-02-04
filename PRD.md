PRD - Documento de Requisitos do Produto
Nome do Projeto: Manual Interativo Saúde 360 Versão: 1.0 (MVP Mobile-First)

1. Visão Geral
Uma Aplicação Web Progressiva (PWA) projetada para dispositivos móveis, que transforma os Manuais de Preenchimento do e-SUS APS (Cadastros, APS, eSB, eMulti) em uma ferramenta de consulta rápida e interativa. O sistema visa substituir a leitura de PDFs longos por uma experiência de "aprender fazendo" (simulação).

2. O Problema
Profissionais de saúde (ACS, médicos, enfermeiros) frequentemente têm dúvidas sobre o preenchimento correto de fichas e dados (ex: "Qual CBO usar?", "Como registrar visita compartilhada?") enquanto estão em atendimento ou visitas domiciliares. Consultar PDFs estáticos no celular é lento e pouco prático.

3. Público-Alvo
Agentes Comunitários de Saúde (ACS).

Equipes de Saúde da Família (eSF/eAP).

Equipes de Saúde Bucal (eSB).

Equipes Multiprofissionais (eMulti).

4. Funcionalidades Principais (Core Features)
Navegação "App-Like": Menu fixo no rodapé (Bottom Navigation) para alternar entre os módulos principais sem recarregar a página completamente.

Simulador de Formulário (Mockup Interativo):

Interface que imita as telas do e-SUS APS (PEC ou CDS).

Interação de Toque: Ao tocar em um campo (input), o teclado NÃO abre. Em vez disso, sobe uma Gaveta (Bottom Sheet) com a explicação oficial, regras de validação e códigos (SIGTAP/CIAP) relacionados àquele campo.

Busca Contextual: Barra de busca global para localizar rapidamente termos como "Gestante", "Vacinação", "Procedimento".

Suporte Offline (PWA): Capacidade de instalar o app na tela inicial do celular e acessar o conteúdo básico mesmo sem internet (cache via Service Workers).

5. Diretrizes de UX/UI (Mobile-First)
Zona do Polegar: Botões e navegação principal posicionados na parte inferior da tela.

Touch Targets: Altura mínima de 44px para todos os elementos clicáveis.

Clareza Visual: Uso de Accordions (listas expansíveis) para não sobrecarregar a tela com texto. Cores institucionais do SUS (Azul, Branco), com alto contraste para leitura em campo.

6. Stack Tecnológica
Frontend: Next.js (App Router) + TypeScript.

Estilização: Tailwind CSS (Classes utilitárias mobile-first).

Componentes UI: Shadcn/UI (Componentes acessíveis: Drawer, Sheet, Accordion).

Ícones: Lucide React.