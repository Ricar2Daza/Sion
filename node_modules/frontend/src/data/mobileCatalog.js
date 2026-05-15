/** Catálogo y assets para la app móvil cliente (Sion Avanzada). */
export const INITIAL_REVIEW_FEE = 80000;

export const MOBILE_SERVICES = [
  {
    id: 'cocinas',
    name: 'Cocinas integrales',
    shortDesc: 'Diseño 3D, fabricación e instalación a medida.',
    fullDesc:
      'Cocinas funcionales y elegantes con acabados premium. Acompañamiento desde el levantamiento hasta la entrega y garantía.',
    image: 'https://images.unsplash.com/photo-1556912170-3b899be8c63e?w=900&q=80',
    included: [
      'Levantamiento y diseño 3D',
      'Materiales de primera calidad',
      'Instalación certificada',
      'Garantía escrita',
    ],
    category: 'Cocinas',
  },
  {
    id: 'closets',
    name: 'Clósets a tu medida',
    shortDesc: 'Optimiza cada metro con soluciones modulares.',
    fullDesc:
      'Clósets y vestidores con herrajes de calidad, iluminación opcional y acabados en melamina, MDF o laca.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf00?w=900&q=80',
    included: ['Diseño personalizado', 'Fabricación local', 'Montaje incluido', 'Ajustes finos'],
    category: 'Clósets',
  },
  {
    id: 'muebles-tv',
    name: 'Muebles de TV',
    shortDesc: 'Centros de entretenimiento modernos.',
    fullDesc: 'Muebles flotantes o de piso, pasacables, iluminación LED y acabados resistentes al uso diario.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=80',
    included: ['Medidas exactas', 'Cable management', 'Instalación en obra', 'Asesoría de color'],
    category: 'Muebles',
  },
  {
    id: 'remodelaciones',
    name: 'Remodelaciones',
    shortDesc: 'Transformación integral de espacios.',
    fullDesc: 'Remodelación de baños, cocinas y zonas sociales con cronograma claro y supervisión permanente.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    included: ['Cronograma', 'Supervisión', 'Proveedores aliados', 'Entrega por fases'],
    category: 'Remodelaciones',
  },
  {
    id: 'construccion',
    name: 'Obra nueva y ampliaciones',
    shortDesc: 'Construcción desde cero o ampliación de vivienda.',
    fullDesc: 'Estructura, albañilería, acabados y coordinación de oficios con enfoque en seguridad y normativa.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    included: ['Estudios previos', 'Ingeniería básica', 'Control de calidad', 'Actas de avance'],
    category: 'Construcción',
  },
  {
    id: 'plomeria',
    name: 'Plomería',
    shortDesc: 'Instalación, mantenimiento y reparaciones.',
    fullDesc: 'Redes hidráulicas, sanitarios, calentadores y soluciones de filtraciones con materiales certificados.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca19394?w=900&q=80',
    included: ['Diagnóstico', 'Repuestos homologados', 'Pruebas de estanqueidad', 'Garantía del servicio'],
    category: 'Plomería',
  },
  {
    id: 'electricidad',
    name: 'Electricidad',
    shortDesc: 'Redes residenciales e iluminación.',
    fullDesc: 'Canalización, tableros, puntos de red e iluminación decorativa con cumplimiento RETIE básico.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80',
    included: ['Planos unifilares', 'Certificación de materiales', 'Pruebas', 'Capacitación de uso'],
    category: 'Electricidad',
  },
  {
    id: 'pintura',
    name: 'Pintura y acabados',
    shortDesc: 'Interior, exterior y texturas.',
    fullDesc: 'Preparación de superficies, pintura vinílica o látex y acabados especiales para alto tráfico.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d782a?w=900&q=80',
    included: ['Impermeabilización básica', 'Masillas', 'Manos de pintura', 'Limpieza final'],
    category: 'Pintura',
  },
];

export const HOME_GRID_SERVICES = [
  ...MOBILE_SERVICES.slice(0, 8),
  { id: 'mas', name: 'Más servicios', shortDesc: 'Ver catálogo completo', image: null, isMore: true },
];

export const PROJECT_GALLERY = [
  { id: 1, category: 'Cocinas', image: 'https://images.unsplash.com/photo-1556912170-3b899be8c63e?w=600&q=80', title: 'Cocina integral Valledupar' },
  { id: 2, category: 'Clósets', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf00?w=600&q=80', title: 'Vestidor principal' },
  { id: 3, category: 'Cocinas', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', title: 'Cocina abierta' },
  { id: 4, category: 'Remodelaciones', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80', title: 'Remodelación social' },
  { id: 5, category: 'Clósets', image: 'https://images.unsplash.com/photo-1631889993951-f7a2a9b8c0c6?w=600&q=80', title: 'Clóset corredizo' },
  { id: 6, category: 'Construcción', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80', title: 'Ampliación segundo piso' },
  { id: 7, category: 'Electricidad', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80', title: 'Iluminación LED' },
  { id: 8, category: 'Pintura', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d782a?w=600&q=80', title: 'Acabados interior' },
];

export const GALLERY_FILTERS = ['Todos', 'Cocinas', 'Clósets', 'Remodelaciones', 'Construcción', 'Electricidad', 'Pintura'];

export function getServiceById(id) {
  return MOBILE_SERVICES.find((s) => s.id === id) || null;
}
