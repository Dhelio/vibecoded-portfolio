const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_role: "VR Developer specialized in Unity",
        hero_desc: "7+ years experience across multiple sectors (amusement, industrial, research, educational, experiential).",
        hero_cta: "View Work",
        about_title: "About Me",
        about_text: "Presents himself as proactive and passionate about videogames and interactive development.",
        projects_title: "Highlighted Projects",
        skills_title: "Skills",
        skill_unity: "Complex VR/AR development in Unity",
        skill_networking: "Multiplayer networking",
        skill_crossplatform: "Cross-platform deployment",
        skill_ai: "AI integration and immersive interaction design",
        contact_title: "Get In Touch",
        lbl_what_is: "What is this project?",
        lbl_what_demo: "What does this project demonstrate?",
        other_projects_title: "Other Projects",
        other_projects_desc: "I have worked on a lot of projects through the years: from games to VR simulations, from educational games to industrial applications. Here's a small sample of other things I've worked on.",
        projects: [
            {
                title: "Fincons Metaverse",
                subtitle: "Multiplayer, multi-platform application for Fincons Group",
                what_is: "Fincons Metaverse is a multiplayer, multiplatform application developed for Fincons Group.\n\nIt was meant to be an internal application for meetings in both VR and PC, but with time it gradually grew in something much more complex.\n\nIt features:\n• Multiplatform Support (Windows, Android, Meta Quest and Linux Server builds)\n• Full multiplayer support through Netcode for GameObjects using an AWS hosted Linux headless build (and later on an on-premise build).\n• Physics based object manipulation, including complex objects such as bows, guns and more.\n• Physics based locomotion\n• A ridable vehicle system (elevators, trains, ....)\n• An AI assistant trained on company data (powered by OpenAI's ChatGPT).\n• Realtime day-night cycle.\n• Spatial voice chat with realistic object occlusion.",
                what_demonstrates: "It shows that I can work on complex projects, covering a wide range of functionalities: from architecting the solution, to writing the client-server scripts, from shader work to 3D modeling work, all while being mindful of the platform's specific limitations when it comes to performance and interactivity.",
                tags: ["Unity", "Multiplayer", "VR", "AI", "Netcode", "Physics"],
                media: [
                    { type: 'video', src: 'https://www.youtube-nocookie.com/embed/N-pNHmufCpk' },
                    { type: 'image', src: '_assets/metaverse/Animazione.gif' },
                    { type: 'image', src: '_assets/metaverse/hub.png' },
                    { type: 'image', src: '_assets/metaverse/lab.png' },
                    { type: 'image', src: '_assets/metaverse/meetingrooms.png' },
                    { type: 'image', src: '_assets/metaverse/Screenshot2025-12-04121624.png' },
                    { type: 'image', src: '_assets/metaverse/world_transition_shader.png' }
                ]
            },
            {
                title: "Fincons Art Exhibit",
                subtitle: "Multiplatform (WebGL, Windows, Meta Quest 3)",
                what_is: "Fincons Art Exhibit is a multiplatform application developed for Fincons Group.\n\nIt was developed under tight time constraint for the company's photographic contest; part of the project time was budgeted toward the requirements gathering, and there in fast prototype iterations, driving towards the last release.\n\nIt features:\n• Multiplatform support (WebGL, Windows and Meta Quest 3)\n• Realistic lighting\n• High definition photos\n• Spatial and contextual audio",
                what_demonstrates: "It demonstrates that I can work under pressure, delivering an MVP under tight deadlines, providing only the core functionalities required by the client while cutting off the fat.",
                tags: ["WebGL", "VR", "Lighting", "Audio", "MVP"]
            },
            {
                title: "Castello Ursino AR",
                subtitle: "AR gamified museum visit (PNRR funded)",
                what_is: "This is a PNRR funded project developed in collaboration with Epic Cube for the Castello Ursino in Catania.\n\nCastello Ursino AR is meant to be an XR experience for visitors, helping users to better enjoy the museum exhibit through custom minigames for each of the most important paintings in the exhibition.\n\nI personally collaborated on the storyboard drafting, the ideation and implementation of the minigames, user UI realization starting from graphic artists' mockups, testing and bugfixing. Features include:\n• Mobile support (Android & iOS)\n• An AI assistant trained on data related to the museum's paintings, which can be asked for information in natural language about the history of the paintings, the museum and related contexts.\n• Several minigames using scans we made of the museum's paintings",
                what_demonstrates: "It demonstrates that I can work in a multidisciplinary team, actively contributing to various aspects of the development cycle; from mockups to implementation, from storyboarding to prototyping, up to final approval by the client.",
                tags: ["AR", "Mobile", "AI", "Gamification", "Teamwork"],
                media: [
                    { type: 'video', src: 'https://www.youtube-nocookie.com/embed/8kJB4s4xOj4' }, // Updated with ID from youtube_link.txt
                    { type: 'image', src: '_assets/photogallery/1.png' },
                    { type: 'image', src: '_assets/photogallery/2.png' },
                    { type: 'image', src: '_assets/photogallery/3.png' },
                    { type: 'image', src: '_assets/photogallery/4.png' }
                ]
            },
            {
                title: "hOLDer",
                subtitle: "Cognitive disability treatment application",
                what_is: "hOLDer is an application developed in collaboration with Epic Cube for the treatment of cognitive disabilities, especially in the elderly.\n\nThe application contains several minigames designed together with a team of psychologists for the treatment of different types of cognitive abilities: from memory exercises, to spelling, pattern and word recognition, association exercises and much more. I personally developed several minigames for this project, all subject to very precise planning and storyboarding and expected application behavior (e.g. no text animation to not distract patients with ADHD, etc). Features include:\n• Mobile support (Android & iOS)\n• Several minigames, available in rotation or depending on the license, for the treatment of different types of skills.\n• Administrator (caretaker) and patient management system.\n• Exercise difficulty management system based on the patient's real capabilities\n• Available on PlayStore and Appstore",
                what_demonstrates: "It demonstrates that I can work efficiently by task, respecting restrictions or limitations imposed by requirements.",
                tags: ["Mobile", "Serious Game", "Healthcare", "Accessibility"],
                media: [
                    { type: 'image', src: '_assets/holder/1.png' },
                    { type: 'image', src: '_assets/holder/2.png' },
                    { type: 'image', src: '_assets/holder/3.png' },
                    { type: 'image', src: '_assets/holder/4.png' }
                ]
            },
            {
                title: "EGP – Sicurezza in Cantiere",
                subtitle: "VR training app",
                what_is: "I've developed several VR training applications; EGP is one such example. Through multiplayer with Photon Fusion and interactions through the Meta SDK it allows two soon-to-be workers to train on the procedures of cable laying and site excavation, along with a fully featured excavator vehicle.\n\nThe application has several steps that have to be completed, that are commanded through a state machine, guiding the players through cooperative scenarios such as attaching the spool to the crane of the excavator, guiding the spool towards the laying point, etc. etc.\n\nThis was a team project, with 2 dedicated Unity developers and a 3D Designer, and I was tasked with working on the excavatorist portion of the application.",
                what_demonstrates: "This project demonstrates that I can work in team, respecting workflows and design decision as well as storyboards, finding the best solutions possible with the tools available in the allotted time-frame.",
                tags: ["VR", "Training", "Photon Fusion", "Simulation", "Meta SDK"]
            },
            {
                title: "Cerbone – Visio+",
                subtitle: "AR model viewer",
                what_is: "Visio+ is essentially an AR model viewer, focusing on letting the client make a first test to see if the new window will fit the standard sizes the company produces (shown in gray on the slider bars) or if it needs to be a custom fit window.\n\nThe application was originally made by another company, but wasn't precise enough in the AR measurements, with huge errors that went way beyond the KPI of <10% error. I fixed the AR measurements making an ex-novo system and requested the proper fixes to the model's blendshapes to make it happen.",
                what_demonstrates: "It shows that I can work on already existing projects regardless of complexity and achieve targets otherwise considered unreachable in the given time frame by other devs.",
                tags: ["AR", "Utility", "Precision", "Optimization"]
            }
        ]
    },
    it: {
        nav_about: "Chi Sono",
        nav_projects: "Progetti",
        nav_skills: "Competenze",
        nav_contact: "Contatti",
        hero_role: "Sviluppatore VR specializzato in Unity",
        hero_desc: "7+ anni di esperienza in diversi settori (amusement, industriale, ricerca, educativo, esperienziale).",
        hero_cta: "Vedi Lavori",
        about_title: "Chi Sono",
        about_text: "Si presenta come proattivo e appassionato di videogiochi e sviluppo interattivo.",
        projects_title: "Progetti in Evidenza",
        skills_title: "Competenze",
        skill_unity: "Sviluppo VR/AR complesso in Unity",
        skill_networking: "Networking multiplayer",
        skill_crossplatform: "Deployment multipiattaforma",
        skill_ai: "Integrazione AI e design di interazioni immersive",
        contact_title: "Contattami",
        lbl_what_is: "Cos'è questo progetto?",
        lbl_what_demo: "Cosa dimostra questo progetto?",
        other_projects_title: "Altri Progetti",
        other_projects_desc: "Ho lavorato su molti progetti nel corso degli anni: dai giochi alle simulazioni VR, dai giochi educativi alle applicazioni industriali. Ecco un piccolo esempio di altre cose su cui ho lavorato.",
        projects: [
            {
                title: "Fincons Metaverse",
                subtitle: "Applicazione multiplayer e multi-piattaforma per Fincons Group",
                what_is: "Fincons Metaverse è un'applicazione multiplayer e multipiattaforma sviluppata per Fincons Group.\n\nEra intesa come applicazione interna per meeting sia in VR che su PC, ma col tempo è cresciuta in qualcosa di molto più complesso.\n\nInclude:\n• Supporto Multipiattaforma (Windows, Android, Meta Quest e build Linux Server)\n• Supporto multiplayer completo tramite Netcode for GameObjects usando una build headless Linux ospitata su AWS (e successivamente on-premise).\n• Manipolazione oggetti basata sulla fisica, inclusi oggetti complessi come archi, pistole e altro.\n• Locomozione basata sulla fisica\n• Sistema di veicoli guidabili (ascensori, treni, ...)\n• Assistente AI addestrato sui dati aziendali (basato su ChatGPT di OpenAI).\n• Ciclo giorno-notte in tempo reale.\n• Chat vocale spaziale con occlusione realistica degli oggetti.",
                what_demonstrates: "Dimostra che posso lavorare su progetti complessi, coprendo un'ampia gamma di funzionalità: dall'architettura della soluzione, alla scrittura degli script client-server, dal lavoro sugli shader alla modellazione 3D, il tutto tenendo conto delle limitazioni specifiche della piattaforma in termini di prestazioni e interattività.",
                tags: ["Unity", "Multiplayer", "VR", "AI", "Netcode", "Physics"],
                media: [
                    { type: 'video', src: 'https://www.youtube-nocookie.com/embed/N-pNHmufCpk' },
                    { type: 'image', src: '_assets/metaverse/Animazione.gif' },
                    { type: 'image', src: '_assets/metaverse/hub.png' },
                    { type: 'image', src: '_assets/metaverse/lab.png' },
                    { type: 'image', src: '_assets/metaverse/meetingrooms.png' },
                    { type: 'image', src: '_assets/metaverse/Screenshot2025-12-04121624.png' },
                    { type: 'image', src: '_assets/metaverse/world_transition_shader.png' }
                ]
            },
            {
                title: "Fincons Art Exhibit",
                subtitle: "Multipiattaforma (WebGL, Windows, Meta Quest 3)",
                what_is: "Fincons Art Exhibit è un'applicazione multipiattaforma sviluppata per Fincons Group.\n\nÈ stata sviluppata con scadenze strette per il concorso fotografico dell'azienda; parte del tempo del progetto è stato dedicato alla raccolta dei requisiti, e poi in iterazioni veloci di prototipazione, guidando verso l'ultima release.\n\nInclude:\n• Supporto multipiattaforma (WebGL, Windows e Meta Quest 3)\n• Illuminazione realistica\n• Foto ad alta definizione\n• Audio spaziale e contestuale",
                what_demonstrates: "Dimostra che posso lavorare sotto pressione, consegnando un MVP con scadenze strette, fornendo solo le funzionalità principali richieste dal cliente eliminando il superfluo.",
                tags: ["WebGL", "VR", "Lighting", "Audio", "MVP"]
            },
            {
                title: "Castello Ursino AR",
                subtitle: "Visita museale gamificata in AR (finanziata PNRR)",
                what_is: "Questo è un progetto sviluppato in collaborazione con Epic Cube per il Castello Ursino di Catania.\n\nCastello Ursino AR si propone d'essere una esperienza XR per i visitatori, aiutando gli utenti ad usufruire meglio della mostra museale tramite dei minigiochi personalizzati per ciascuno dei quadri più importanti della mostra.\n\nHo personalmente collaborato alla stesura dello storyboard, l'ideazione e l'implementazione dei minigiochi, realizzazione della UI utente a partire dai mockup degli artisti grafici, testing e bugfixing. Tra le feature:\n• Supporto mobile (Android & iOS)\n• Un assistente AI addestrato sui dati relativi ai quadri del museo, a cui è possibile chiedere informazioni in linguaggio naturale circa la storia dei quadri, del museo e dei relativi contesti.\n• Diversi minigiochi che utilizzano scansioni che abbiamo fatto ai quadri del museo",
                what_demonstrates: "Dimostra che so lavorare in un team multidisciplinare, contribuendo attivamente a diversi aspetti del ciclo di sviluppo; dai mockup all'implementazione, dallo storyboarding alla prototipazione, fino all'approvazione finale da parte del cliente.",
                tags: ["AR", "Mobile", "AI", "Gamification", "Teamwork"],
                media: [
                    { type: 'video', src: 'https://www.youtube-nocookie.com/embed/8kJB4s4xOj4' },
                    { type: 'image', src: '_assets/photogallery/1.png' },
                    { type: 'image', src: '_assets/photogallery/2.png' },
                    { type: 'image', src: '_assets/photogallery/3.png' },
                    { type: 'image', src: '_assets/photogallery/4.png' }
                ]
            },
            {
                title: "hOLDer",
                subtitle: "Applicazione di trattamento disabilità cognitive",
                what_is: "hOLDer è una applicazione sviluppata in collaborazione con Epic Cube per il trattamento delle disabilità cognitive, specie negli anziani.\n\nL'applicazione contiene diversi minigiochi ideati assieme ad un team di psicologi per il trattamento di diversi tipi di abilità cognitive: dagli esercizi di memoria, allo spelling, al riconoscimento di pattern e di parole, esercizi di associazione e molto altro. Ho personalmento sviluppato diversi minigiochi di questo progetto, tutti soggetti ad un planning e storyboarding molto preciso e con comportamento atteso dell'applicazione (e.g. nessuna animazione delle scritte per non sviare pazienti affetti da ADHD, etc). Tra le features:\n• Supporto mobile (Android & iOS)\n• Diversi minigiochi, disponibili a rotazione o a seconda della licenza, per il trattamento di diversi tipi di abilità.\n• Sistema di gestione dell'amministratore (caretaker) e del paziente.\n• Sistema di gestione della difficoltà dell'esercizio basato sulle capacità reali del paziente\n• Disponibile su PlayStore ed Appstore",
                what_demonstrates: "Dimostra che so lavorare per task efficientemente, rispettando restrizioni o limitazioni imposte dai requisiti.",
                tags: ["Mobile", "Serious Game", "Sanità", "Accessibilità"],
                media: [
                    { type: 'image', src: '_assets/holder/1.png' },
                    { type: 'image', src: '_assets/holder/2.png' },
                    { type: 'image', src: '_assets/holder/3.png' },
                    { type: 'image', src: '_assets/holder/4.png' }
                ]
            },
            {
                title: "EGP – Sicurezza in Cantiere",
                subtitle: "App di training VR",
                what_is: "Ho sviluppato diverse applicazioni di training VR; EGP è uno di questi esempi. Attraverso il multiplayer con Photon Fusion e interazioni tramite il Meta SDK permette a due futuri lavoratori di allenarsi sulle procedure di posa cavi e scavo, insieme a un veicolo escavatore completo.\n\nL'applicazione ha diversi passaggi che devono essere completati, comandati tramite una macchina a stati, guidando i giocatori attraverso scenari cooperativi come attaccare la bobina alla gru dell'escavatore, guidare la bobina verso il punto di posa, ecc.\n\nQuesto è stato un progetto di team, con 2 sviluppatori Unity dedicati e un 3D Designer, e io sono stato incaricato di lavorare sulla parte dell'escavatorista dell'applicazione.",
                what_demonstrates: "Questo progetto dimostra che posso lavorare in team, rispettando i flussi di lavoro e le decisioni di design così come gli storyboard, trovando le migliori soluzioni possibili con gli strumenti disponibili nel tempo assegnato.",
                tags: ["VR", "Training", "Photon Fusion", "Simulation", "Meta SDK"]
            },
            {
                title: "Cerbone – Visio+",
                subtitle: "Visualizzatore modelli AR",
                what_is: "Visio+ è essenzialmente un visualizzatore di modelli AR, focalizzato sul permettere al cliente di fare un primo test per vedere se la nuova finestra si adatta alle dimensioni standard prodotte dall'azienda (mostrate in grigio sulle barre di scorrimento) o se deve essere una finestra su misura.\n\nL'applicazione era stata originariamente realizzata da un'altra azienda, ma non era abbastanza precisa nelle misurazioni AR, con enormi errori che andavano ben oltre il KPI di <10% di errore. Ho corretto le misurazioni AR realizzando un sistema ex-novo e richiesto le correzioni appropriate ai blendshapes del modello per renderlo possibile.",
                what_demonstrates: "Mostra che posso lavorare su progetti già esistenti indipendentemente dalla complessità e raggiungere obiettivi altrimenti considerati irraggiungibili nel tempo dato da altri sviluppatori.",
                tags: ["AR", "Utility", "Precision", "Optimization"]
            }
        ]
    }
};

let currentLang = 'en';

function updateContent() {
    // Update static text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = ''; // Clear existing

    translations[currentLang].projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        // Media Section (Gallery or Placeholder)
        const media = document.createElement('div');
        media.className = 'project-media';

        if (project.media && project.media.length > 0) {
            media.classList.add('has-gallery');

            // Main Display
            const mainDisplay = document.createElement('div');
            mainDisplay.className = 'gallery-main-display';

            // Function to update main display
            const updateMainDisplay = (item) => {
                mainDisplay.innerHTML = '';
                if (item.type === 'video') {
                    let src = item.src.replace('youtube.com', 'youtube-nocookie.com');
                    // Fix to ensure embed correct url format if just ID was passed or normal url
                    if (src.indexOf('embed') === -1 && src.indexOf('youtu.be') !== -1) {
                        // convert simple youtu.be/ID to embed
                        const id = src.split('/').pop().split('?')[0];
                        src = `https://www.youtube-nocookie.com/embed/\${id}`;
                    }
                    mainDisplay.innerHTML = `<iframe src="\${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
                    mainDisplay.onclick = null;
                } else {
                    mainDisplay.innerHTML = `<img src="\${item.src}" alt="\${project.title}">`;
                    mainDisplay.onclick = () => {
                        lightboxImg.src = item.src;
                        lightbox.classList.add('active');
                    };
                }
            };

            // Initialize with first item
            updateMainDisplay(project.media[0]);

            // Thumbnails Container
            const thumbnailsContainer = document.createElement('div');
            thumbnailsContainer.className = 'gallery-thumbnails';

            project.media.forEach((item, index) => {
                const thumb = document.createElement('div');
                thumb.className = 'gallery-thumbnail';
                if (index === 0) thumb.classList.add('active');

                if (item.type === 'video') {
                    // Robust ID extraction
                    let videoId = '';
                    if (item.src.includes('embed/')) {
                        videoId = item.src.split('embed/')[1].split('?')[0];
                    } else {
                        videoId = item.src.split('/').pop().split('?')[0];
                    }

                    thumb.innerHTML = `<img src="https://img.youtube.com/vi/\${videoId}/default.jpg" alt="Video">`;
                    const playIcon = document.createElement('i');
                    playIcon.className = 'fas fa-play-circle';
                    thumb.appendChild(playIcon);
                } else {
                    thumb.innerHTML = `<img src="\${item.src}" alt="Thumbnail">`;
                }

                thumb.addEventListener('click', () => {
                    updateMainDisplay(item);
                    thumbnailsContainer.querySelectorAll('.gallery-thumbnail').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });

                thumbnailsContainer.appendChild(thumb);
            });

            media.appendChild(mainDisplay);
            media.appendChild(thumbnailsContainer);
        } else {
            media.innerHTML = '<i class="fas fa-image fa-3x"></i>';
        }

        const info = document.createElement('div');
        info.className = 'project-info';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const subtitle = document.createElement('span');
        subtitle.className = 'subtitle';
        subtitle.textContent = project.subtitle;

        const details = document.createElement('div');
        details.className = 'project-details';

        const whatIsTitle = document.createElement('h4');
        whatIsTitle.textContent = translations[currentLang].lbl_what_is;
        const whatIsText = document.createElement('p');
        whatIsText.textContent = project.what_is;

        const whatDemoTitle = document.createElement('h4');
        whatDemoTitle.textContent = translations[currentLang].lbl_what_demo;
        const whatDemoText = document.createElement('p');
        whatDemoText.textContent = project.what_demonstrates;

        details.appendChild(whatIsTitle);
        details.appendChild(whatIsText);
        details.appendChild(whatDemoTitle);
        details.appendChild(whatDemoText);

        const tags = document.createElement('div');
        tags.className = 'tags';
        project.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag;
            tags.appendChild(span);
        });

        info.appendChild(title);
        info.appendChild(subtitle);
        info.appendChild(details);
        info.appendChild(tags);

        card.appendChild(media);
        card.appendChild(info);
        projectsContainer.appendChild(card);
    });

    // Update buttons
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
    document.getElementById('lang-it').classList.toggle('active', currentLang === 'it');
}

// Carousel Logic
const placeholderImages = [
    '_assets/metaverse/hub.png',
    '_assets/metaverse/lab.png',
    '_assets/metaverse/meetingrooms.png',
    '_assets/photogallery/1.png',
    '_assets/photogallery/2.png',
    '_assets/photogallery/3.png',
    '_assets/photogallery/4.png'
];

function initCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    track.innerHTML = '';

    // Duplicate images enough times to ensure smooth infinite scroll
    const imagesToUse = [...placeholderImages, ...placeholderImages, ...placeholderImages];

    imagesToUse.forEach(src => {
        const item = document.createElement('div');
        item.className = 'carousel-item';

        const img = document.createElement('img');
        img.src = src;
        img.alt = "Project Example";

        item.appendChild(img);
        track.appendChild(item);
    });
}

// Lightbox Logic
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" src="" alt="Full View">
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-content');
const lightboxClose = lightbox.querySelector('.lightbox-close');

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

document.getElementById('lang-en').addEventListener('click', () => {
    currentLang = 'en';
    updateContent();
});

document.getElementById('lang-it').addEventListener('click', () => {
    currentLang = 'it';
    updateContent();
});

// Initial render
updateContent();
initCarousel();
