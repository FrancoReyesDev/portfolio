type DocsFactory<t> = {
  [key in "en" | "es"]: t;
};

type Home = DocsFactory<{
  shortAbout: string;
  projectsList: { title: string; shortResume: string }[];
}>;

type About = DocsFactory<{
  keyContributions: string;
  keyContributionsList: string[];
}>;

export const home: Home = {
  en: {
    shortAbout:
      "Full stack developer and Computer Engineering student. Passionate about technology, problem-solving, and continuous learning. Based in Buenos Aires, Argentina.",
    projectsList: [
      {
        title: "Gautama Prices",
        shortResume:
          "Price and inventory management tool, integrated with an ERP, streamlining the list update process and reducing infrastructure costs, bringing down several days' worth of work to just a few hours.",
      },
      {
        title: "Zpl Labels",
        shortResume:
          "Tool for automated generation and printing of ZPL labels from a local server, seamlessly integrated with CUPS, enhancing efficiency in product labeling processes.",
      },
    ],
  },
  es: {
    shortAbout:
      "Desarrollador full stack y estudiante de Ingeniería informatica. Apasionado por la tecnología, la resolución de problemas y el aprendizaje continuo. De Buenos Aires, Argentina.",
    projectsList: [
      {
        title: "Gautama Precios",
        shortResume:
          "Herramienta de gestión de precios e inventario, integrada con un ERP, que agiliza el proceso de actualización de listas y reduce costos de infraestructura, llevando el trabajo de varios días a solo unas pocas horas. ",
      },
      {
        title: "Etiquetas ZPL",
        shortResume:
          "Herramienta para la generación y impresión automatizada de etiquetas ZPL desde una aplicación en un servidor local, integrada con CUPS, para agilizar el proceso de etiquetado de productos.",
      },
    ],
  },
};

export const about: About = {
  en: {
    keyContributions: "Key Contributions",
    keyContributionsList: [
      "Automated business logic to improve operational efficiency and save time in the companies where I worked.",
      "Developed innovative solutions that optimized business processes and contributed to the success of the projects.",
    ],
  },
  es: {
    keyContributions: "Logros clave",
    keyContributionsList: [
      "Automatización de la lógica empresarial para mejorar la eficiencia operativa y ahorrar tiempo en las empresas donde trabajé.",
      "Desarrollo de soluciones innovadoras que optimizaron los procesos de negocio y contribuyeron al éxito de los proyectos.",
    ],
  },
};
