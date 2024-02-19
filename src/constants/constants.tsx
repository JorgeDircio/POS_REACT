import React from 'react';
import { v } from '../styles/variables';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';

interface DesplegableItem {
  text: string;
  icono: React.ReactNode;
  tipo: string;
}

export const DesplegableUser: DesplegableItem[] = [
  {
    text: 'Mi perfil',
    icono: <v.iconoUser />,
    tipo: 'miperfil',
  },
  {
    text: 'Configuracion',
    icono: <v.iconoSettings />,
    tipo: 'configuracion',
  },
  {
    text: 'Cerrar sesión',
    icono: <v.iconoCerrarSesion />,
    tipo: 'cerrarsesion',
  },
];

interface LinkItem {
  label: string;
  icon: React.ReactNode;
  to: string;
}

// data SIDEBAR
export const LinksArray: LinkItem[] = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/home',
  },
  {
    label: 'Kardex',
    icon: <v.iconocategorias />,
    to: '/kardex',
  },
  {
    label: 'Reportes',
    icon: <v.iconoreportes />,
    to: '/reportes',
  },
];

export const SecondarylinksArray: LinkItem[] = [
  {
    label: 'Configuración',
    icon: <AiOutlineSetting />,
    to: '/configurar',
  },
];

interface TemaData {
  icono: string;
  descripcion: string;
}

export const TemasData: TemaData[] = [
  {
    icono: '🌞',
    descripcion: 'light',
  },
  {
    icono: '🌚',
    descripcion: 'dark',
  },
];

interface ModuloConfiguracion {
  title: string;
  subtitle: string;
  icono: string;
  link: string;
}

export const DataModulosConfiguracion: ModuloConfiguracion[] = [
  {
    title: 'Productos',
    subtitle: 'registra tus productos',
    icono: 'https://i.ibb.co/85zJ6yG/caja-del-paquete.png',
    link: '/configurar/productos',
  },
  {
    title: 'Personal',
    subtitle: 'ten el control de tu personal',
    icono: 'https://i.ibb.co/5vgZ0fX/hombre.png',
    link: '/configurar/usuarios',
  },
];

interface TipoUserData {
  descripcion: string;
  icono: string;
}

export const TipouserData: TipoUserData[] = [
  {
    descripcion: 'empleado',
    icono: '🪖',
  },
  {
    descripcion: 'administrador',
    icono: '👑',
  },
];

export const TipoDocData: TipoUserData[] = [
  {
    descripcion: 'Dni',
    icono: '🪖',
  },
  {
    descripcion: 'Libreta electoral',
    icono: '👑',
  },
  {
    descripcion: 'Otros',
    icono: '👑',
  },
];
