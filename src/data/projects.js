import { portfolioImages, ilMioTatuImages, boolcomicsImages } from './images'


//OGGETTO CON I MIEI PROGETTI (id, title, description, year, features, completed, image, imageAlt, technologies, liveUrl, repoUrlFrontend, repoUrlBackend)

const porjects = [

    {
        id: 0,
        title: "Portfolio",
        subtitle: "Sito web personale",
        description: "Portfolio personale sviluppato interamente in React per presentare i miei progetti e le mie competenze nello sviluppo web. Interfaccia realizzata con Tailwind CSS e animazioni integrate tramite Framer Motion. Include un modulo di contatto per l’invio di messaggi via email.",
        year: "2026",
        features: ["Interfaccia responsive", "Pannello di controllo", "Animazioni Framer Motion"],
        completed: false,
        images: portfolioImages,
        imageAlt: "Project 1 image",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        liveUrl: null,
        repoUrlFrontend: "https://github.com/stefanosorrenti/portfolio",
        repoUrlBackend: null
    },

    {
        id: 1,
        title: "IL MIO TATU",
        subtitle: "Web Application dedicata alla scoperta di tatuaggi, artisti e stili",
        description: "Applicazione Full-Stack dedicata al mondo dei tatuaggi, pensata per esplorare tatuaggi, artisti e stili. Front-end sviluppato in React con Bootstrap per l’interfaccia grafica e Axios per le chiamate API. Back-end realizzato in Laravel con API REST e database MySQL per la gestione dei dati e delle relative relazioni. Realizzato anche un sezione backoffice per la gestione dei dati tramite Laravel Blade.",
        year: "2026",
        features: ["Esplorazione tatuaggi", "Condividi i tuoi preferiti", "Sezione backoffice"],
        completed: true,
        images: ilMioTatuImages,
        imageAlt: "Il mio tatu",
        technologies: ["React", "Laravel", "MySQL", "Bootstrap"],
        liveUrl: null,
        repoUrlFrontend: "https://github.com/stefanosorrenti/il-mio-taTU-front-office",
        repoUrlBackend: "https://github.com/stefanosorrenti/il_mio_tatTU"
    },

    {
        id: 2,
        title: "BOOLCOMICS",
        subtitle: "E-commerce Web Application per la vendità di fumetti",
        year: "2026",
        features: ["Filtri per genere", "Gestione carrello", "Pagina di checkout"],
        completed: true,
        description: "E-commerce realizzato in team per la vendita di manga. Back-end sviluppato in Node.js ed Express, con query SQL per la gestione e l’interazione con il database MySQL. Frontend realizzato in React, con Bootstrap per lo stile e l’impaginazione dell’interfaccia.",
        images: boolcomicsImages,
        imageAlt: "BoolComics",
        technologies: ["React", "Node.js", "MySQL", "Bootstrap"],
        liveUrl: null,
        repoUrlFrontend: "https://github.com/stefanosorrenti/boolcomics-fe",
        repoUrlBackend: "https://github.com/stefanosorrenti/boolcomics-be"
    }
]


export default porjects