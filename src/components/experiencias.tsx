import React from 'react';
type Experience = {
    company?: string;
    date?: string;
    description: string;
    repository?: string; // Adicionando um campo para repositório
    icon?: React.ReactNode; // Adicionando um campo para ícone
    link?: string; // Adicionando um campo para link
};
export function ExperienciaComponent({ company, date, description, repository, icon, link }: Experience) {
    return (
        <article
            className="p-4 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                {icon && <span>{icon}</span>}
                <h4 className="text-sm font-semibold text-gray-900">{company || "Projeto"}</h4>
            </div>
            {date && <time className="text-xs text-gray-500">{date}</time>}
            </div>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
            {repository && (
            <a
                className="mt-2 text-xs text-blue-600 inline-block"
                href={link || repository}
                target="_blank"
                rel="noopener noreferrer"
            >
                Repositório: <span className="font-medium">{repository}</span>
            </a>
            )}
        </article>
    );
}