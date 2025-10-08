import React from "react";
import Link from "next/link";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// lucide icons
import { Mail, Phone, MapPin, DownloadCloud } from "lucide-react";

type Experience = {
  company?: string;
  date?: string;
  description: string;
};

const experiences: Experience[] = [
  { company: "Oficina do Mineiro", date: "Fev/2001", description: "Desenvolvimento de site institucional em HTML" },
  { company: "Point Açaí", date: "Abr/2021", description: "Aplicativo de loja desenvolvido em Flutter" },
  { company: "IMFAV – Igreja", date: "Jun/2021", description: "Site institucional em WordPress; reformulado em React/Angular; app em React Native" },
  { company: "Severino Remodelações", date: "", description: "Projeto de site para empresa de reformas" },
  { company: "Telefonia", date: "", description: "Sistema voltado para gestão de serviços de telefonia" },
];

const skills = ["React", "React Native", "Node.js", "Flutter"];

export default function CurriculoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12 px-6 sm:px-8 lg:px-20">
      <section className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6 animate__animated animate__fadeInDown">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <img
              src="https://github.com/rhavy.png"
              alt="Avatar Rhavy Moraes"
              className="w-24 h-24 rounded-full border-2 border-slate-200 shadow-md object-cover"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Rhavy Moraes de Almeida <span className="text-slate-500 font-normal">— 37 anos</span>
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                Desenvolvedor Web & Mobile — React / React Native / Flutter / Node.js
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3 sm:mt-0">
            <Link href="/Curriculo_Rhavy_Moraes_Atualizado.pdf" target="_blank">
              <Button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white animate__animated animate__pulse animate__infinite animate__slow">
                <DownloadCloud size={16} /> Baixar PDF
              </Button>
            </Link>
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
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <MapPin size={16} />
                  <span>Rua Olaria, 193 — Jaburuna, Vila Velha - ES</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <Phone size={16} />
                  <span>+55 (27) 9 9661-9140</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
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
              <CardContent className="text-sm text-slate-700">
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
              <CardContent className="text-sm text-slate-700">
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Linguagens:</strong> Delphi, Python, C/C++, C#, Java, Dart</li>
                  <li><strong>Web/Mobile:</strong> HTML5, CSS, JS, React, React Native, Angular, Vue, Flutter, Node.js</li>
                  <li><strong>Bancos:</strong> SQL, MySQL, MongoDB, Firebase</li>
                  <li><strong>Design:</strong> Adobe Muse, 3ds Max, Unreal Engine</li>
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Right Column */}
          <section className="md:col-span-2 space-y-6 animate__animated animate__fadeInRight">
            {/* Resumo Profissional */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-white to-slate-100">
              <CardHeader>
                <CardTitle>Resumo Profissional</CardTitle>
                <CardDescription>Desenvolvedor autônomo com experiência em sites institucionais, apps e soluções web.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-700">
                Profissional com sólida experiência prática em desenvolvimento full-stack, voltado para entrega de projetos para pequenas e médias empresas, igrejas e lojas locais. Hábil na migração e modernização de sites, desenvolvimento de aplicações móveis e integração com APIs.
              </CardContent>
            </Card>

            {/* Experiências */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-800">Experiências</h3>
              <div className="grid gap-3">
                {experiences.map((exp, idx) => (
                  <article
                    key={idx}
                    className="p-4 rounded-xl border border-slate-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-900">{exp.company || "Projeto"}</h4>
                      <time className="text-xs text-slate-500">{exp.date}</time>
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{exp.description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Repositórios */}
            <footer className="mt-4 text-sm text-slate-600">
              <p>Repositórios: <span className="font-medium">IMFAV</span>, <span className="font-medium">Severino Remodelações</span>, <span className="font-medium">Telefonia</span></p>
            </footer>
          </section>
        </article>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Design moderno e limpo • Animations via tw-animate-css • Componentes UI via shadcn/ui
        </div>
      </section>
    </main>
  );
}
