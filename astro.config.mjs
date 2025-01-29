// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			defaultLocale: 'es',
			locales: {
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
				// Spanish docs in `src/content/docs/es/`
				es: {
					label: 'Español',
				}
			  },
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introducción',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Cómo Unirse y Soporte',
					items: [
						{ label: 'Guía de Primeros Pasos', slug: 'guia/primeros-pasos' },
						{ label: 'Normas para Nuevos Jugadores', slug: 'guia/normas' },
						{ label: 'Contacto con Administradores y Moderadores', slug: 'guia/contacto' },
					],
				},
				{
					label: 'Lore del Servidor',
					items: [
						{ label: 'El Brote: Origen del Virus', slug: 'lore/brote' },
						{ label: 'La Caída de la Civilización', slug: 'lore/civilizacion' },
						{ label: 'Línea de Tiempo del Apocalipsis', slug: 'lore/tiempo', },
					],
				},
				{
					label: 'Mecánicas del Juego',
					items: [
						{ label: 'Mecánicas del Juego', slug: 'guides/mecanicas-juego' },
					],
				},
				{
					label: 'Mecánicas de Roleplay',
					items: [
						{ label: 'Mecánicas de Roleplay', slug: 'guides/mecanicas-roleplay' },
					],
				},
				{
					label: 'Economía & Sistema de Loot',
					items: [
						{ label: 'Economía & Sistema de Loot', slug: 'guides/economia' },
					],
				},
				{
					label: 'Vehículos & Transporte',
					items: [
						{ label: 'Vehículos & Transporte', slug: 'guides/vehiculos' },
					],
				},
				{
					label: 'Crafteo & Construcción de Bases',
					items: [
						{ label: 'Crafteo & Construcción de Bases', slug: 'guides/crafteo' },
					],
				},
				{
					label: 'Facciones & Grupos',
					items: [
						{ label: 'Facciones & Grupos', slug: 'guides/facciones' },
					],
				},
				{
					label: 'Tipos de Zombis & Amenazas',
					items: [
						{ label: 'Tipos de Zombis & Amenazas', slug: 'guides/zombis' },
					],
				},
				{
					label: 'Eventos & Misiones',
					items: [
						{ label: 'Eventos & Misiones', slug: 'guides/eventos' },
					],
				},
				{
					label: 'Ley, Orden & Reglas del Servidor',
					items: [
						{ label: 'Ley, Orden & Reglas del Servidor', slug: 'guides/reglas' },
					],
				},
				{
					label: 'Configuración Técnica & Servidor',
					items: [
						{ label: 'Configuración Técnica & Servidor', slug: 'guides/configuracion' },
					],
				},
				{
					label: 'Administración & Gestión del Servidor',
					items: [
						{ label: 'Administración & Gestión del Servidor', slug: 'guides/administracion' },
					],
				},
				{
					label: 'Comunidad & Expansión del Roleplay',
					items: [
						{ label: 'Comunidad & Expansión del Roleplay', slug: 'guides/comunidad' },
					],
				},
				{
					label: 'Futuras Actualizaciones & Roadmap',
					items: [
						{ label: 'Futuras Actualizaciones & Roadmap', slug: 'guides/actualizaciones' },
					],
				},
				{
					label: 'Cómo Unirse & Soporte Técnico',
					items: [
						{ label: 'Cómo Unirse & Soporte Técnico', slug: 'guides/soporte' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
