import React from "react";

// Textos multilíngue para o footer
const footerTexts = {
  "pt-br": {
    repositorios: "Repositórios: ",
    listaRepositorios: ["IMFAV", "Severino Remodelações", "Telefonia"],
    template: "Design moderno e limpo • Animações via tw-animate-css • Componentes UI via shadcn/ui"
  },
  "en": {
    repositorios: "Repositories: ",
    listaRepositorios: ["IMFAV", "Severino Remodelações", "Telefonia"],
    template: "Modern and clean design • Animations via tw-animate-css • UI components via shadcn/ui"
  },
  "es": {
    repositorios: "Repositorios: ",
    listaRepositorios: ["IMFAV", "Severino Remodelaciones", "Telefonia"],
    template: "Diseño moderno y limpio • Animaciones via tw-animate-css • Componentes UI via shadcn/ui"
  }
};

type FooterProps = {
  language: "pt-br" | "en" | "es";
};

export function FooterRepositorios({ language }: FooterProps) {
  const texts = footerTexts[language];
  return (
    <footer className="mt-4 text-sm text-gray-600">
      <p>
        {texts.repositorios}
        {texts.listaRepositorios.map((repo, idx) => (
          <span key={repo} className="font-medium">
            {repo}{idx < texts.listaRepositorios.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </footer>
  );
}

export function FooterTemplate({ language }: FooterProps) {
  const texts = footerTexts[language];
  return (
    <div className="mt-12 text-center text-xs text-gray-500">
      {texts.template}
    </div>
  );
}
