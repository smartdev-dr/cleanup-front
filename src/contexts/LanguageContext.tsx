import React, { createContext, useContext, useState, type ReactNode, } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Professional Cleaning & Installation Services',
    'hero.subtitle': 'We do it for you',
    'hero.cta': 'Contact Us',

    // About
    'about.title': 'About Cleanup',
    'about.subtitle': 'Your Trusted Cleaning Partner',
    'about.text1': 'At Cleanup, we pride ourselves on delivering exceptional cleaning and installation services to homes and businesses across the Dominican Republic. With years of experience and a commitment to excellence, we transform spaces into pristine environments.',
    'about.text2': 'Our team of skilled professionals uses state-of-the-art equipment and eco-friendly products to ensure the highest quality results. We understand that your space is important to you, and we treat it with the care and respect it deserves.',
    'about.value1': 'Quality Service',
    'about.value1.desc': 'We never compromise on the quality of our work',
    'about.value2': 'Professional Team',
    'about.value2.desc': 'Trained experts with years of experience',
    'about.value3': 'Trust & Reliability',
    'about.value3.desc': 'Your satisfaction is our priority',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Solutions for All Your Needs',
    'service.upholstery': 'Upholstery Cleaning',
    'service.upholstery.desc': 'Deep cleaning for sofas, chairs, and furniture',
    'service.ac': 'Air Conditioner Maintenance',
    'service.ac.desc': 'Professional AC cleaning and maintenance',
    'service.wallpaper': 'Wallpaper Installation',
    'service.wallpaper.desc': 'Expert wallpaper installation and design',
    'service.space': 'Space Cleaning',
    'service.space.desc': 'Complete cleaning solutions for any space',
    'service.painting': 'Interior Painting',
    'service.painting.desc': 'Professional painting services',
    'service.window': 'Window Film Application',
    'service.window.desc': 'Tinting and UV protection film installation',
    'service.contracting': 'Contracting Services',
    'service.contracting.desc': 'General contracting and renovation',
    'service.fumigation': 'Fumigation',
    'service.fumigation.desc': 'Professional pest control services',
    'service.carpet': 'Carpet Cleaning',
    'service.carpet.desc': 'Deep carpet cleaning and stain removal',
    'service.floor': 'Floor Polishing',
    'service.floor.desc': 'Professional floor polishing and restoration',
    'service.pool': 'Pool Maintenance',
    'service.pool.desc': 'Complete pool cleaning and maintenance',

    // Gallery
    'gallery.title': 'Our Work',
    'gallery.subtitle': 'See the Cleanup Difference',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Trusted by Hundreds of Satisfied Customers',
    'testimonial1.text': 'Cleanup transformed our office space! The team was professional, efficient, and the results were outstanding. Highly recommended!',
    'testimonial1.author': 'Maria Rodriguez',
    'testimonial1.role': 'Business Owner',
    'testimonial2.text': 'I have used their services multiple times for different needs. They always exceed expectations with quality work and great customer service.',
    'testimonial2.author': 'Carlos Mendez',
    'testimonial2.role': 'Homeowner',
    'testimonial3.text': 'The upholstery cleaning service was amazing! My furniture looks brand new. Professional and affordable service.',
    'testimonial3.author': 'Ana Martinez',
    'testimonial3.role': 'Residential Client',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We\'re Here to Help',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully! We\'ll get back to you soon.',
    'contact.error': 'There was an error sending your message. Please try again.',

    // Footer
    'footer.tagline': 'Professional cleaning and installation services',
    'footer.rights': 'All rights reserved.',
    'footer.follow': 'Follow Us',

    // WhatsApp
    'whatsapp.chat': 'Chat on WhatsApp',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.gallery': 'Galería',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Servicios Profesionales de Limpieza e Instalación',
    'hero.subtitle': 'Lo hacemos por tí',
    'hero.cta': 'Contáctanos',

    // About
    'about.title': 'Sobre Cleanup',
    'about.subtitle': 'Tu Socio de Confianza en Limpieza',
    'about.text1': 'En Cleanup, nos enorgullecemos de ofrecer servicios excepcionales de limpieza e instalación para hogares y empresas en toda la República Dominicana. Con años de experiencia y un compromiso con la excelencia, transformamos espacios en ambientes impecables.',
    'about.text2': 'Nuestro equipo de profesionales capacitados utiliza equipos de última generación y productos ecológicos para garantizar resultados de la más alta calidad. Entendemos que tu espacio es importante para ti, y lo tratamos con el cuidado y respeto que merece.',
    'about.value1': 'Servicio de Calidad',
    'about.value1.desc': 'Nunca comprometemos la calidad de nuestro trabajo',
    'about.value2': 'Equipo Profesional',
    'about.value2.desc': 'Expertos capacitados con años de experiencia',
    'about.value3': 'Confianza y Fiabilidad',
    'about.value3.desc': 'Tu satisfacción es nuestra prioridad',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones Integrales para Todas tus Necesidades',
    'service.upholstery': 'Limpieza de Tapicería',
    'service.upholstery.desc': 'Limpieza profunda de sofás, sillas y muebles',
    'service.ac': 'Mantenimiento de Aire Acondicionado',
    'service.ac.desc': 'Limpieza y mantenimiento profesional de AC',
    'service.wallpaper': 'Instalación de Papel Tapiz',
    'service.wallpaper.desc': 'Instalación experta de papel tapiz y diseño',
    'service.space': 'Limpieza de Espacios',
    'service.space.desc': 'Soluciones completas de limpieza para cualquier espacio',
    'service.painting': 'Pintura Interior',
    'service.painting.desc': 'Servicios profesionales de pintura',
    'service.window': 'Aplicación de Film para Ventanas',
    'service.window.desc': 'Instalación de film protector UV y tintado',
    'service.contracting': 'Servicios de Contratación',
    'service.contracting.desc': 'Contratación general y renovación',
    'service.fumigation': 'Fumigación',
    'service.fumigation.desc': 'Servicios profesionales de control de plagas',
    'service.carpet': 'Limpieza de Alfombras',
    'service.carpet.desc': 'Limpieza profunda y eliminación de manchas',
    'service.floor': 'Pulido de Pisos',
    'service.floor.desc': 'Pulido y restauración profesional de pisos',
    'service.pool': 'Mantenimiento de Piscinas',
    'service.pool.desc': 'Limpieza y mantenimiento completo de piscinas',

    // Gallery
    'gallery.title': 'Nuestro Trabajo',
    'gallery.subtitle': 'Mira la Diferencia de Cleanup',

    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.subtitle': 'Confiado por Cientos de Clientes Satisfechos',
    'testimonial1.text': '¡Cleanup transformó nuestro espacio de oficina! El equipo fue profesional, eficiente y los resultados fueron excelentes. ¡Muy recomendado!',
    'testimonial1.author': 'María Rodríguez',
    'testimonial1.role': 'Dueña de Negocio',
    'testimonial2.text': 'He usado sus servicios múltiples veces para diferentes necesidades. Siempre superan las expectativas con trabajo de calidad y excelente servicio al cliente.',
    'testimonial2.author': 'Carlos Méndez',
    'testimonial2.role': 'Propietario',
    'testimonial3.text': '¡El servicio de limpieza de tapicería fue increíble! Mis muebles lucen como nuevos. Servicio profesional y asequible.',
    'testimonial3.author': 'Ana Martínez',
    'testimonial3.role': 'Cliente Residencial',

    // Contact
    'contact.title': 'Contáctanos',
    'contact.subtitle': 'Estamos Aquí para Ayudarte',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Teléfono',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',
    'contact.error': 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.',

    // Footer
    'footer.tagline': 'Servicios profesionales de limpieza e instalación',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.follow': 'Síguenos',

    // WhatsApp
    'whatsapp.chat': 'Chatea en WhatsApp',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
