import React from "react";
import Link from "next/link";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// lucide icons
import { Mail, Phone, MapPin, DownloadCloud, Globe, Smartphone, Code, Home, PhoneForwarded } from "lucide-react";
import { CompetenciasComponente } from "@/components/competencias";
import { ExperienciaComponent } from "@/components/experiencias";
import { FooterRepositorios, FooterTemplate } from "@/components/template/Footer/footer";

type Experience = {
  company?: string;
  date?: string;
  description: string;
  repository?: string; // Adicionando um campo para repositório
  icon?: React.ReactNode; // Adicionando um campo para ícone
  link?: string; // Adicionando um campo para link
};

const experiences: Experience[] = [
  { company: "Oficina do Mineiro", date: "Fev/2001", description: "Desenvolvimento de site institucional em HTML", icon: <Globe size={16} /> },
  { company: "Point Açaí", date: "Abr/2021", description: "Aplicativo de loja desenvolvido em Flutter", icon: <Smartphone size={16} /> },
  { company: "IMFAV – Igreja", date: "Jun/2021", description: "Site institucional em WordPress; reformulado em React/Angular; app em React Native", 
    repository: "IMFAV", icon: <Home size={16} />, link: "https://github.com/rhavy/IMFAV.git"},
  { company: "Severino Remodelações", date: "Out/2025", description: "Projeto de site para empresa de reformas", 
    repository: "Severino Remodelações", icon: <PhoneForwarded size={16} />, link: "https://github.com/rhavy/severino_remodelacoes.git" },
  { company: "Telefonia", date: "Ago/2025", description: "Sistema voltado para gestão de serviços de telefonia", 
    repository: "Telefonia", icon: <Phone size={16} />, link: "https://github.com/rhavy/Telefonia.git" },
];

const skills = [
  { name: "Vule", icon: <Code size={16} /> },
  { name: "Next", icon: <Code size={16} /> },
  { name: "Angular", icon: <Code size={16} /> },
  { name: "React", icon: <Code size={16} /> },
  { name: "React Native", icon: <Smartphone size={16} /> },
  { name: "Node.js", icon: <Code size={16} /> },
  { name: "Flutter", icon: <Smartphone size={16} /> },
];
const competencias = [
  { name: "Linguagens", title: "Delphi, C/C++, C#, Dart, Java, Python" },
  { name: "Web/Mobile", title: "HTML5, CSS, JS, TypeScript, React, React Native, Next, Angular, Vue, Flutter, Node.js" },
  { name: "Bancos", title: "SQL, MySQL, MongoDB, Firebase" },
  { name: "Design", title: "Figma, Adobe Muse, 3ds Max, Unreal Engine" },
];

export default function CurriculoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 sm:px-8 lg:px-20">
      <section className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6 animate__animated animate__fadeInDown">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <img
              src="https://github.com/rhavy.png"
              alt="Avatar Rhavy Moraes"
              className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-lg object-cover"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                Rhavy Moraes de Almeida <span className="text-gray-500 font-normal">— 37 anos</span>
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Desenvolvedor Web & Mobile — React / React Native / Flutter / Node.js
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill) => (
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

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <a href="/pdf/Rhavy_Moraes.pdf" download>
              <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition duration-200">
                <DownloadCloud size={16} /> Baixar PDF
              </Button>
            </a>
          </div>
        </header>

        {/* Main Content */}
        <article className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <aside className="md:col-span-1 space-y-6 animate__animated animate__fadeInLeft">
            {/* Contato */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Contato</CardTitle>
                <CardDescription>Informações rápidas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin size={16} />
                  <span>Rua Olaria, 193 — Jaburuna, Vila Velha - ES</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Phone size={16} />
                  <span>+55 (27) 9 9661-9140</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail size={16} />
                  <a
                    href="mailto:rhavymoraes101@gmail.com"
                    className="underline hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    rhavymoraes101@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Formação */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Formação</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <p>Ensino Médio Completo — 2005</p>
                <p className="mt-1">
                  Ensino Superior (em andamento) — Início: Abr/2021 • Previsão: Abr/2026
                </p>
              </CardContent>
            </Card>

            {/* Competências */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Competências</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <ul className="list-disc pl-4 space-y-1">
                  {competencias.map((compet) => (
                    <CompetenciasComponente key={compet.name} name={compet.name} title={compet.title}/>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Right Column */}
          <section className="md:col-span-2 space-y-6 animate__animated animate__fadeInRight">
            {/* Resumo Profissional */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-white to-gray-50">
              <CardHeader>
                <CardTitle>Resumo Profissional</CardTitle>
                <CardDescription>Desenvolvedor autônomo com experiência em sites institucionais, apps e soluções web.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                Profissional com sólida experiência prática em desenvolvimento full-stack, voltado para entrega de projetos para pequenas e médias empresas, igrejas e lojas locais. Hábil na migração e modernização de sites, desenvolvimento de aplicações móveis e integração com APIs.
              </CardContent>
            </Card>

            {/* Experiências */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Experiências</h3>
              <div className="grid gap-3">
                {experiences.map((exp, idx) => (
                  <ExperienciaComponent key={idx} date={exp.date} company={exp.company} description={exp.description} icon={exp.icon} repository={exp.repository} link={exp.link}/>
                ))}
              </div>
            </div>

            {/* Repositórios */}
            <FooterRepositorios/>
          </section>
        </article>

        {/* Footer */}
        <FooterTemplate/>
      </section>
    </main>
  );
}