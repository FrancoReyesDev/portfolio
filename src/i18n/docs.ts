type DocsFactory<t> = {
  [key in "en" | "es"]: t;
};

type Home = DocsFactory<{
  shortAbout: string;
  // projectsList: { title: string; shortResume: string }[];
}>;

type About = DocsFactory<{
  intro: string;
  location: string;
  cleanCode: string;
  hobbies: string;
  whatImDoing: string;
  keyContributions: string;
  keyContributionsList: string[];
}>;

export const home: Home = {
  en: {
    shortAbout:
      "Full stack developer and Computer Engineering student. Passionate about technology, problem-solving, and continuous learning. Based in Buenos Aires, Argentina.",
    // projectsList: [
    //   {
    //     title: "Gautama Prices",
    //     shortResume:
    //       "Price and inventory management tool, integrated with an ERP, streamlining the list update process and reducing infrastructure costs, bringing down several days' worth of work to just a few hours.",
    //   },
    //   {
    //     title: "Zpl Labels",
    //     shortResume:
    //       "Tool for automated generation and printing of ZPL labels from a local server, seamlessly integrated with CUPS, enhancing efficiency in product labeling processes.",
    //   },
    // ],
  },
  es: {
    shortAbout:
      "Desarrollador full stack y estudiante de Ingeniería informatica. Apasionado por la tecnología, la resolución de problemas y el aprendizaje continuo. De Buenos Aires, Argentina.",
    // projectsList: [
    //   {
    //     title: "Gautama Precios",
    //     shortResume:
    //       "Herramienta de gestión de precios e inventario, integrada con un ERP, que agiliza el proceso de actualización de listas y reduce costos de infraestructura, llevando el trabajo de varios días a solo unas pocas horas. ",
    //   },
    //   {
    //     title: "Etiquetas ZPL",
    //     shortResume:
    //       "Herramienta para la generación y impresión automatizada de etiquetas ZPL desde una aplicación en un servidor local, integrada con CUPS, para agilizar el proceso de etiquetado de productos.",
    //   },
    // ],
  },
};

export const about: About = {
  en: {
    intro: `Hi! I'm Franco Reyes, a full stack developer focused on frontend with over 2 years of experience in the field. Currently, I'm studying computer engineering at`,
    location: `, located in Buenos Aires, Argentina. Passionate about technology and a strong believer in clean code, self-taught, and always striving to improve and grow professionally.`,
    cleanCode: `Advocate for minimalism and efficiency in every line of code I write. Committed to maintaining a standard of quality through clean and well-structured code.`,
    hobbies: `Beyond work, I enjoy skiing in winter and doing acrobatics. I'm also a big fan of anime, especially animes like Berserk.`,
    keyContributions: "Key Contributions",
    keyContributionsList: [
      "Automated business logic to improve operational efficiency and save time in the companies where I worked.",
      "Developed innovative solutions that optimized business processes and contributed to the success of the projects.",
    ],
    whatImDoing: "Here's what I'm doing",
  },
  es: {
    intro: `¡Hola! Soy Franco Reyes, un desarrollador full stack enfocado en frontend con más de dos años de experiencia en el campo. Actualmente estoy estudiando ingeniería informática en el `,
    location: `, ubicado en Buenos Aires, Argentina. Apasionado por la tecnología y firme creyente del código limpio, autodidacta y siempre en busca de mejorar y crecer profesionalmente.`,
    cleanCode: `Defensor del minimalismo y la eficiencia en cada línea de código que escribo. Me comprometo a mantener un estándar de calidad mediante un código limpio y bien estructurado.`,
    hobbies: `Además del trabajo, me gusta esquiar en invierno y hacer acrobacias. También soy un gran fanático de los animes, especialmente animes como Berserk.`,
    keyContributions: "Logros clave",
    keyContributionsList: [
      "Automatización de la lógica empresarial para mejorar la eficiencia operativa y ahorrar tiempo en las empresas donde trabajé.",
      "Desarrollo de soluciones innovadoras que optimizaron los procesos de negocio y contribuyeron al éxito de los proyectos.",
    ],
    whatImDoing: "Lo que estoy haciendo",
  },
};
