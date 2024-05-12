type Ui = {
  [key in "en" | "es"]: {
    greeting: string;
    cta: string;
    projects: string;
    skills: string;
    comingSoon: string;
    nextUp: string;
    interestedIn: string;
    about: string;
    now: string;
    contact: string;
  };
};

export const ui: Ui = {
  en: {
    contact: "Contact",
    greeting: "Hi! My name is",
    cta: "Get in touch! --->",
    projects: "Projects",
    skills: "Skills",
    comingSoon: "Coming soon",
    nextUp: "Next up",
    interestedIn: "Interested in",
    about: "About me",
    now: "now",
  },
  es: {
    contact: "Contacto",
    greeting: "Hola! Mi nombre es",
    cta: "Contactame! --->",
    about: "Sobre mi",
    projects: "Proyectos",
    skills: "Habilidades",
    comingSoon: "Proximamente",
    nextUp: "Siguiente",
    interestedIn: "Interesado en",
    now: "ahora",
  },
};
