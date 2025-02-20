// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			defaultLocale: 'es',
			redirects: {
			    '/': '/es',
			  },
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
						{ label: 'Explicación del Concepto del Servidor', slug: 'guias/concepto' },
					],
				},
				{
					label: 'Cómo Unirse y Soporte',
					items: [
						{ label: 'Guía de Primeros Pasos', slug: 'soporte/primeros-pasos' },
						{ label: 'Normas para Nuevos Jugadores', slug: 'soporte/normas' },
						{ label: 'Contacto con Administradores y Moderadores', slug: 'soporte/contacto' },
					],
				},
				{
					label: 'Lore del Servidor',
					items: [
						{ label: 'Línea de Tiempo del Apocalipsis', slug: 'lore/tiempo', },
						{ label: 'El Brote: Origen del Virus', slug: 'lore/brote' },
						{ label: 'Humane Labs & Merryweather ', slug: 'lore/humane-merry' },
						{ label: 'El Secreto de las Fuerzas Militares  ', slug: 'lore/militares' },
						{ label: 'Estado Actual del Mundo   ', slug: 'lore/mundo' },
					],
				},
				{
					label: 'Mecánicas del Juego',
					items: [
						{ label: 'Supervivencia y Estados del Personaje ', slug: 'mecanicas/supervivencia' },
						{ label: 'Proceso de Infección y Desinfección ', slug: 'mecanicas/infeccion' },
						{ label: 'Condiciones del Entorno  ', slug: 'mecanicas/entorno' },
						{ label: 'Caza & Pesca', slug: 'mecanicas/caza-pesca' },
						{ label: 'Zonas de Peligro', slug: 'mecanicas/zonas' },
					],
				},
				{
					label: 'Economía & Sistema de Loot',
					items: [
						{ label: 'Sistema de Monedas', slug: 'economia/monedas' },
						{ label: 'Comerciante Nómada', slug: 'economia/comerciante' },
						{ label: 'Obtención de Suministros y Comercio', slug: 'economia/suministros' },
						{ label: 'Saqueo de Edificios y Exploración', slug: 'economia/saqueo' },
						{ label: 'Refinerías, Combustible y Transporte', slug: 'economia/refineria' },
						{ label: 'Intercambio y Comercio', slug: 'economia/intercambio' }
					],
				},
				{
					label: 'Vehículos & Transporte',
					items: [
						{ label: 'Vehículos & Transporte', slug: 'transporte/creacion' },
						{ label: 'Tipos de Vehículos', slug: 'transporte/tipos-vehiculos' },
					],
				},
				{
					label: 'Crafteo & Construcción de Bases',
					items: [
						{ label: 'Mecánicas de Crafteo', slug: 'crafteo/mecanica' },
						{ label: 'Crafteo & Construcción de Bases', slug: 'crafteo/bases' },
						{ label: 'Recetas de Crafteo', slug: 'crafteo/recetas' },
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
