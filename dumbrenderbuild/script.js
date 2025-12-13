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
                what_is: "This is a PNRR funded project developed in collaboration with Epic Cube.\n\nIt was developed in partnership with the University of Catania, and the project consisted in the gamification of a museum visit to the Ursino Castle in Catania. I contributed to the storyboarding, architecturing and development of the project, working with a team of graphic designers, modelers and programmers.\n\nIt features:\n• Mobile support (Android & iOS)\n• An AR AI assistant that can explain the paintings and history of the museum and its artworks.\n• Several games made in the context of the most famous paintings in the exhibit.",
                what_demonstrates: "This project demonstrates that I can work in a multidisciplinary team, contributing ideas and efficiently clearing tasks, as well as assigning roles and contributing to the general documentation of the project",
                tags: ["AR", "Mobile", "AI", "Gamification", "Teamwork"]
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
        projects: [
            {
                title: "Fincons Metaverse",
                subtitle: "Applicazione multiplayer e multi-piattaforma per Fincons Group",
                what_is: "Fincons Metaverse è un'applicazione multiplayer e multipiattaforma sviluppata per Fincons Group.\n\nEra intesa come applicazione interna per meeting sia in VR che su PC, ma col tempo è cresciuta in qualcosa di molto più complesso.\n\nInclude:\n• Supporto Multipiattaforma (Windows, Android, Meta Quest e build Linux Server)\n• Supporto multiplayer completo tramite Netcode for GameObjects usando una build headless Linux ospitata su AWS (e successivamente on-premise).\n• Manipolazione oggetti basata sulla fisica, inclusi oggetti complessi come archi, pistole e altro.\n• Locomozione basata sulla fisica\n• Sistema di veicoli guidabili (ascensori, treni, ...)\n• Assistente AI addestrato sui dati aziendali (basato su ChatGPT di OpenAI).\n• Ciclo giorno-notte in tempo reale.\n• Chat vocale spaziale con occlusione realistica degli oggetti.",
                what_demonstrates: "Dimostra che posso lavorare su progetti complessi, coprendo un'ampia gamma di funzionalità: dall'architettura della soluzione, alla scrittura degli script client-server, dal lavoro sugli shader alla modellazione 3D, il tutto tenendo conto delle limitazioni specifiche della piattaforma in termini di prestazioni e interattività.",
                tags: ["Unity", "Multiplayer", "VR", "AI", "Netcode", "Physics"],
                media: [
                    { type: 'video', src: 'https://www.youtube.com/embed/N-pNHmufCpk' },
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
                what_is: "Questo è un progetto finanziato dal PNRR sviluppato in collaborazione con Epic Cube.\n\nÈ stato sviluppato in partnership con l'Università di Catania, e il progetto consisteva nella gamification di una visita museale al Castello Ursino di Catania. Ho contribuito allo storyboarding, all'architettura e allo sviluppo del progetto, lavorando con un team di graphic designer, modellatori e programmatori.\n\nInclude:\n• Supporto mobile (Android & iOS)\n• Un assistente AI in AR che può spiegare i dipinti e la storia del museo e delle sue opere.\n• Diversi giochi realizzati nel contesto dei dipinti più famosi della mostra.",
                what_demonstrates: "Questo progetto dimostra che posso lavorare in un team multidisciplinare, contribuendo con idee ed evadendo efficientemente i task, oltre ad assegnare ruoli e contribuire alla documentazione generale del progetto",
                tags: ["AR", "Mobile", "AI", "Gamification", "Teamwork"]
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
            const galleryContainer = document.createElement('div');
            galleryContainer.className = 'gallery-container';

            project.media.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'gallery-item';

                if (item.type === 'video') {
                    // Convert standard YouTube URL to embed URL if needed, and use nocookie domain
                    let src = item.src.replace('youtube.com', 'youtube-nocookie.com');
                    itemDiv.innerHTML = `<iframe src="${src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
                } else {
                    itemDiv.innerHTML = `<img src="${item.src}" alt="${project.title}">`;
                }
                galleryContainer.appendChild(itemDiv);
            });
            media.appendChild(galleryContainer);
        } else {
            media.innerHTML = '<i class="fas fa-image fa-3x"></i>'; // Placeholder icon
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
