// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

 /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual del Inspector Web', // Título del sitio
  tagline: 'Aprende a dominar las herramientas de desarrollo del navegador', // Tagline
  favicon: 'img/inspector-favicon.ico', // Ruta del favicon

  // Configuración de la URL de producción
  url: 'https://elysium1617.github.io', // Asegúrate de que coincida con la URL de tu repositorio
  baseUrl: '/Docusaurus/', // Base URL (usualmente '/<nombre-repo>/')

  // Configuración de GitHub Pages
  organizationName: 'ElysiuM1617', // Nombre de la organización en GitHub
  projectName: 'Docusaurus', // Nombre del repositorio en GitHub

  trailingSlash: false, // Configura para no usar barra diagonal final

  onBrokenLinks: 'ignore', // Ignorar enlaces rotos
  onBrokenMarkdownLinks: 'warn', // Advertir sobre enlaces rotos en Markdown

  i18n: {
    defaultLocale: 'en', // Idioma predeterminado
    locales: ['en'], // Idiomas disponibles
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', // Ruta al archivo de la barra lateral
          editUrl: 'https://github.com/ElysiuM1617/Docusaurus/tree/main/', // URL de edición en GitHub
        },
        blog: {
          showReadingTime: true, // Mostrar tiempo estimado de lectura en el blog
          feedOptions: {
            type: ['rss', 'atom'], // Tipos de feed
            xslt: true, // Usar XSLT para formatear el feed
          },
          editUrl: 'https://github.com/ElysiuM1617/Docusaurus/tree/main/', // URL de edición en GitHub para el blog
        },
        theme: {
          customCss: './src/css/custom.css', // Archivo CSS personalizado
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', // Imagen social de Docusaurus
      navbar: {
        title: 'Mi Sitio',
        logo: {
          alt: 'Logo de Mi Sitio',
          src: 'img/logo.svg',
        },
        items: [
          // {to: '/docs/intro', label: 'Tutorial', position: 'left'},
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tu-usuario/tu-repo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Secciones',
            items: [
              {label: 'Introducción', to: '/docs/intro'}, // Enlace a la página de introducción
              {label: 'Consola', to: '/docs/consola'}, // Enlace a la página de consola
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Repositorio',
                href: 'https://github.com/ElysiuM1617/Docusaurus', // Enlace al repositorio de GitHub
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Manual del Inspector. Hecho con Docusaurus.`,
      },
    }),
};

export default config;
