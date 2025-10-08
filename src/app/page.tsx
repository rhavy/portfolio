"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, DownloadCloud, Globe, Smartphone, Code, Home, PhoneForwarded } from "lucide-react";
import { CompetenciasComponente } from "@/components/competencias";
import { ExperienciaComponent } from "@/components/experiencias";
import { FooterRepositorios, FooterTemplate } from "@/components/template/Footer/footer";
import ReactCountryFlag from "react-country-flag";

// JSONs por idioma
import experiencesPT from "../lib/data/experiences_pt-br.json";
import experiencesEN from "../lib/data/experiences_en.json";
import experiencesES from "../lib/data/experiences_es.json";
import skillsPT from "../lib/data/skills_pt-br.json";
import skillsEN from "../lib/data/skills_en.json";
import skillsES from "../lib/data/skills_es.json";
import competenciasPT from "../lib/data/competencias_pt-br.json";
import competenciasEN from "../lib/data/competencias_en.json";
import competenciasES from "../lib/data/competencias_es.json";
import contactPT from "../lib/data/contact_pt-br.json";
import contactEN from "../lib/data/contact_en.json";
import contactES from "../lib/data/contact_es.json";

// Tipagem mais permissiva
interface Experience {
  company: string;
  date: string;
  description: string;
  icon?: string | React.ReactNode; // Aceita ícone como componente
  repository?: string | null;
  link?: string | null;
}

// Mapeamento de ícones
const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={16} />,
  Smartphone: <Smartphone size={16} />,
  Code: <Code size={16} />,
  Home: <Home size={16} />,
  PhoneForwarded: <PhoneForwarded size={16} />,
  Phone: <Phone size={16} />,
};

// Textos multilíngues
const texts = {
  "pt-br": {
    idade: "37 anos",
    contato: "Contato",
    descricaoContato: "Informações rápidas",
    formacao: "Formação",
    competencias: "Competências",
    resumo: "Resumo Profissional",
    experiencias: "Experiências",
    baixarPdf: "Baixar PDF",
    descricaoCargo:
      "Desenvolvedor Web & Mobile — Vule / Angular / Next / React / React Native / Flutter / Node.js / Wordpress",
    resumoDescricao: "Desenvolvedor autônomo com experiência em sites institucionais, apps e soluções web.",
    resumoDetalhe:
      "Profissional com sólida experiência prática em desenvolvimento full-stack, voltado para entrega de projetos para pequenas e médias empresas, igrejas e lojas locais. Hábil na migração e modernização de sites, desenvolvimento de aplicações móveis e integração com APIs.",
    ensinoMedio: "Ensino Médio Completo — 2005",
    ensinoSuperior: "Ensino Superior (em andamento) — Início: Abr/2021 • Previsão: Abr/2026",
    email: "rhavymoraes101@gmail.com",
  },
  en: {
    idade: "37 years",
    contato: "Contact",
    descricaoContato: "Quick info",
    formacao: "Education",
    competencias: "Skills",
    resumo: "Professional Summary",
    experiencias: "Experience",
    baixarPdf: "Download PDF",
    descricaoCargo:
      "Web & Mobile Developer — Vule / Angular / Next / React / React Native / Flutter / Node.js / Wordpress",
    resumoDescricao: "Freelance developer with experience in institutional websites, apps, and web solutions.",
    resumoDetalhe:
      "Professional with solid hands-on experience in full-stack development, delivering projects for small and medium companies, churches, and local stores. Skilled in site migration and modernization, mobile app development, and API integration.",
    ensinoMedio: "High School Diploma — 2005",
    ensinoSuperior: "Higher Education (ongoing) — Start: Apr/2021 • Expected: Apr/2026",
    email: "rhavymoraes101@gmail.com",
  },
  es: {
    idade: "37 años",
    contato: "Contacto",
    descricaoContato: "Información rápida",
    formacao: "Educación",
    competencias: "Habilidades",
    resumo: "Resumen Profesional",
    experiencias: "Experiencia",
    baixarPdf: "Descargar PDF",
    descricaoCargo:
      "Desarrollador Web & Mobile — Vule / Angular / Next / React / React Native / Flutter / Node.js / Wordpress",
    resumoDescricao: "Desarrollador freelance con experiencia en sitios institucionales, apps y soluciones web.",
    resumoDetalhe:
      "Profesional con sólida experiencia práctica en desarrollo full-stack, orientado a la entrega de proyectos para pequeñas y medianas empresas, iglesias y tiendas locales. Hábil en migración y modernización de sitios, desarrollo de aplicaciones móviles e integración con APIs.",
    ensinoMedio: "Bachillerato — 2005",
    ensinoSuperior: "Educación Superior (en curso) — Inicio: Abr/2021 • Fin previsto: Abr/2026",
    email: "rhavymoraes101@gmail.com",
  },
};

export default function CurriculoPage() {
  const [portugues, setPortugues] = React.useState<"pt-br" | "en" | "es">("pt-br");

  // Seleção de dados por idioma
  const experiencesData = portugues === "pt-br" ? experiencesPT : portugues === "en" ? experiencesEN : experiencesES;
  const skillsData = portugues === "pt-br" ? skillsPT : portugues === "en" ? skillsEN : skillsES;
  const competenciasData = portugues === "pt-br" ? competenciasPT : portugues === "en" ? competenciasEN : competenciasES;
  const contact = portugues === "pt-br" ? contactPT : portugues === "en" ? contactEN : contactES;

  // Mapear experiências com ícones
  const experiences: Experience[] = experiencesData.map((exp: any) => ({
    company: exp.company,
    date: exp.date,
    description: exp.description,
    icon: iconMap[exp.icon] || null,
    repository: exp.repository ?? null,
    link: exp.link ?? null,
  }));

  const skills = skillsData.map((skill: any) => ({
    ...skill,
    icon: iconMap[skill.icon] || null,
  }));

  const competencias = competenciasData;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 sm:px-8 lg:px-20">
      <section className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6 animate__animated animate__fadeInDown">
          <div className="flex items-center gap-4">
            <img
              src="https://github.com/rhavy.png"
              alt="Avatar Rhavy Moraes"
              className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-lg object-cover"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                Rhavy Moraes de Almeida{" "}
                <span className="text-gray-500 font-normal">— {texts[portugues].idade}</span>
              </h1>
              <p className="mt-1 text-sm text-gray-600">{texts[portugues].descricaoCargo}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill: any) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 transition-transform duration-200"
                  >
                    {skill.icon} {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas e botão PDF */}
          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPortugues("pt-br")}
                className={`p-1 rounded-md ${portugues === "pt-br" ? "ring-2 ring-blue-500" : ""}`}
              >
                <ReactCountryFlag countryCode="BR" svg style={{ width: "24px", height: "24px" }} />
              </button>
              <button
                onClick={() => setPortugues("en")}
                className={`p-1 rounded-md ${portugues === "en" ? "ring-2 ring-blue-500" : ""}`}
              >
                <ReactCountryFlag countryCode="US" svg style={{ width: "24px", height: "24px" }} />
              </button>
              <button
                onClick={() => setPortugues("es")}
                className={`p-1 rounded-md ${portugues === "es" ? "ring-2 ring-blue-500" : ""}`}
              >
                <ReactCountryFlag countryCode="ES" svg style={{ width: "24px", height: "24px" }} />
              </button>
            </div>

            <a
              href={
                portugues === "pt-br"
                  ? "/pdf/rhavy_moraes_pt-br.pdf"
                  : portugues === "en"
                  ? "/pdf/rhavy_moraes_en.pdf"
                  : "/pdf/rhavy_moraes_es.pdf"
              }
              download
            >
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition duration-200">
                <DownloadCloud size={16} /> {texts[portugues].baixarPdf}
              </Button>
            </a>
          </div>
        </header>

        {/* Corpo */}
        <article className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coluna Esquerda */}
          <aside className="md:col-span-1 space-y-6 animate__animated animate__fadeInLeft">
            {/* Contato */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>{texts[portugues].contato}</CardTitle>
                <CardDescription>{texts[portugues].descricaoContato}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin size={16} />
                  <span>{contact.endereco}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone size={16} />
                  <span>{contact.telefone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail size={16} />
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    {contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Formação */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>{texts[portugues].formacao}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <p>{texts[portugues].ensinoMedio}</p>
                <p className="mt-1">{texts[portugues].ensinoSuperior}</p>
              </CardContent>
            </Card>

            {/* Competências */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>{texts[portugues].competencias}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <ul className="list-disc pl-4 space-y-1">
                  {competencias.map((c: any) => (
                    <CompetenciasComponente key={c.name} name={c.name} title={c.title} />
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Coluna Direita */}
          <section className="md:col-span-2 space-y-6 animate__animated animate__fadeInRight">
            {/* Resumo Profissional */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-white to-gray-50">
              <CardHeader>
                <CardTitle>{texts[portugues].resumo}</CardTitle>
                <CardDescription>{texts[portugues].resumoDescricao}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                {texts[portugues].resumoDetalhe}
              </CardContent>
            </Card>

            {/* Experiências */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">{texts[portugues].experiencias}</h3>
              <div className="grid gap-3">
                {experiences.map((exp) => (
                  <ExperienciaComponent
                    key={exp.company + exp.date}
                    date={exp.date}
                    company={exp.company}
                    description={exp.description}
                    icon={exp.icon}
                    repository={exp.repository ?? ""}
                    link={exp.link ?? ""}
                  />
                ))}
              </div>
            </div>

            {/* Repositórios */}
            <FooterRepositorios language={portugues} />
          </section>
        </article>

        {/* Rodapé */}
        <FooterTemplate language={portugues} />
      </section>
    </main>
  );
}
