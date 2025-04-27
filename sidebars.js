// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // Introducción general
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Inspección Básica',
      items: [
        'inspeccion/elementos',
        'inspeccion/atributos',
        'inspeccion/estilos',
      ],
    },
    {
      type: 'category',
      label: 'Herramientas Avanzadas',
      items: [
        'herramientas/consola',
        'herramientas/network',
        'herramientas/sources',
        'herramientas/performance',
      ],
    },
    {
      type: 'category',
      label: 'Tips y Trucos',
      items: [
        'tips/atajos',
        'tips/mejores-practicas',
      ],
    },
    {
      type: 'link',
      label: 'Documentación Oficial',
      href: 'https://developer.chrome.com/docs/devtools',
    },
  ],
};

export default sidebars;
