import React from 'react';
type Competencia = {
    name: string;
    title: string;
};
export function CompetenciasComponente({ name, title }: Competencia) {
    return (
        <li><strong>{name}:</strong> {title}</li>
    );
}