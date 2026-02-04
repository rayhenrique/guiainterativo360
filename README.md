# Guia Interativo Brasil Saúde 360

![Version](https://img.shields.io/badge/version-1.0-blue)
![Status](https://img.shields.io/badge/status-production-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Uma Aplicação Web Progressiva (PWA) projetada para transformar os Manuais de Preenchimento do e-SUS APS em uma ferramenta de consulta rápida e interativa para profissionais de saúde do SUS.

## 🎯 Visão Geral

O **Guia Interativo Brasil Saúde 360** substitui a necessidade de consulta a PDFs longos e estáticos por uma experiência de "aprender fazendo". O sistema simula as telas do Prontuário Eletrônico do Cidadão (PEC) e Coleta de Dados Simplificada (CDS), oferecendo orientações contextuais, códigos SIGTAP/CBO e regras de validação instantaneamente.

## ⚠️ O Problema
Profissionais de saúde (ACS, médicos, enfermeiros, dentistas) frequentemente têm dúvidas durante atendimentos ou visitas domiciliares (ex: "Qual CBO usar?", "Como registrar visita compartilhada?"). A consulta a manuais tradicionais em dispositivos móveis é lenta e pouco prática.

## ✨ Funcionalidades Principais

- **📱 Mobile-First & PWA**: Design otimizado para celulares com navegação em aba inferior (Bottom Navigation) e capacidade de instalação na tela inicial.
- **⚡ Simulador de Formulário**: Interface que imita o e-SUS APS. Ao tocar em um campo, uma gaveta (Bottom Sheet) exibe explicações oficiais sem bloquear a tela.
- **🏥 Módulos Completos**:
  - **APS**: Mais Acesso, Consultas, Vacinação, Pré-Natal, Hipertensão, Diabetes, etc.
  - **eSB**: Indicadores de Saúde Bucal, exodontias, tratamentos e escovação supervisionada.
  - **eMulti**: Atendimentos individuais, coletivos e visitas compartilhadas com suporte a abas interativas (PEC vs App).
- **📂 Organização Inteligente**: Conteúdo dividido por cores e ícones para facilitar a identificação visual.

## 🛠️ Stack Tecnológica

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes**: [Shadcn/UI](https://ui.shadcn.com/) (Radix UI)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Interatividade**: [Vaul](https://vaul.emilkowal.ski/) (Drawer/Bottom Sheet)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado.

### Instalação

```bash
# Clone o repositório
git clone https://github.com/rayhenrique/guiainterativo360.git

# Acesse a pasta
cd manual360

# Instale as dependências
npm install
```

### Rodando Localmente

```bash
npm run dev
# Acesse http://localhost:3000
```

## 🏗️ Estrutura do Projeto

- `/src/app`: Rotas e páginas da aplicação (App Router).
- `/src/data`: Arquivos JSON contendo o conteúdo dos manuais e regras de negócio.
- `/src/components`: Componentes reutilizáveis (Header, BottomNav, FormSimulator).
- `/public/referencia`: Imagens oficiais dos manuais do Ministério da Saúde.

## 👥 Créditos

**Desenvolvido por:**
Ray Henrique
**KL Tecnologia**
[kltecnologia.com](https://kltecnologia.com)
+55 82 99630-4742
