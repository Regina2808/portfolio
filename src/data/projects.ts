// Imports des 4 images pour GRH Osmocom
import grhHero from "@/assets/projects/grh-hero.jpg";
import grhDetail1 from "@/assets/projects/grh-detail1.jpg";
import grhDetail2 from "@/assets/projects/grh-detail2.jpg";
import grhDetail3 from "@/assets/projects/grh-detail3.jpg";

// Imports des 4 images pour Fitzone & Le Gym
import fitzoneHero from "@/assets/projects/fitzone-hero.jpg";
import fitzoneDetail1 from "@/assets/projects/fitzone-detail1.jpg";
import fitzoneDetail2 from "@/assets/projects/fitzone-detail2.jpg";
import fitzoneDetail3 from "@/assets/projects/fitzone-detail3.jpg";

// Imports des 4 images pour Tontine Pro
import tontineHero from "@/assets/projects/tontine-hero.jpg";
import tontineDetail1 from "@/assets/projects/tontine-detail1.jpg";
import tontineDetail2 from "@/assets/projects/tontine-detail2.jpg";
import tontineDetail3 from "@/assets/projects/tontine-detail3.jpg";

// Imports des 4 images pour Daba
import dabaHero from "@/assets/projects/daba-hero.jpg";
import dabaDetail1 from "@/assets/projects/daba-detail1.jpg";
import dabaDetail2 from "@/assets/projects/daba-detail2.jpg";
import dabaDetail3 from "@/assets/projects/daba-detail3.jpg";

// Imports des 4 images pour LogAnalyzer Pro
import loganalyzerHero from "@/assets/projects/loganalyzer-hero.jpg";
import loganalyzerDetail1 from "@/assets/projects/loganalyzer-detail1.jpg";
import loganalyzerDetail2 from "@/assets/projects/loganalyzer-detail2.jpg";
import loganalyzerDetail3 from "@/assets/projects/loganalyzer-detail3.jpg";

// Imports des 4 images pour Sneakers Store (Application Flutter)
import sneakersHero from "@/assets/projects/sneakers-hero.png";
import sneakersDetail1 from "@/assets/projects/sneakers-detail1.png";
import sneakersDetail2 from "@/assets/projects/sneakers-detail2.png";
import sneakersDetail3 from "@/assets/projects/sneakers-detail3.png";

export const projects = [
  {
    slug: "grh-osmocom",
    title: "GRH OSMOCOM",
    category: "Application Web RH",
    year: "2025",
    client: "OSMOCOM GROUP",
    industry: "Ressources Humaines",
    services: ["Laravel", "Bootstrap CSS", "Logique métier paie", "GitLab"],
    overview: "Conception et développement de GRH OSMOCOM, une plateforme complète de gestion des ressources humaines et de la paie, réalisée dans le cadre d'un stage professionnel en télétravail pour OSMOCOM GROUP à Lomé.",
    challenge: "L'entreprise avait besoin de centraliser la gestion de ses employés et d'automatiser des calculs de paie complexes, jusque-là traités manuellement, avec un risque d'erreur élevé.",
    solution: "J'ai implémenté la logique métier complète : calculs de présence, simulation et prévisualisation des bulletins de paie. La plateforme, construite avec Laravel et Bootstrap CSS, offre une gestion fiable et automatisée des processus RH.",
	images: [grhHero, grhDetail1, grhDetail2, grhDetail3],
  },
  {
    slug: "fitzone-le-gym",
    title: "Fitzone & Le Gym",
    category: "Migration & Refonte",
    year: "2026",
    client: "QUALITAT",
    industry: "Fitness & Sport",
    services: ["Laravel", "Tailwind CSS", "MySQL", "Chart.js"],
    overview: "Migration technologique complète de la plateforme de gestion des salles de sport Fitzone & Le Gym, de CakePHP vers une architecture Laravel moderne, réalisée lors d'un stage académique chez QUALITAT à Cotonou.",
    challenge: "La plateforme existante, développée sous CakePHP, était devenue difficile à maintenir et ne permettait plus de gérer efficacement les abonnements, les présences et la facturation des deux salles de sport.",
    solution: "J'ai mené la migration complète vers Laravel et amélioré le fonctionnement de l'application : gestion des abonnements, pointage des présences et création automatique des factures, avec des tableaux de bord visuels grâce à Chart.js.",
	images: [fitzoneHero, fitzoneDetail1, fitzoneDetail2, fitzoneDetail3],
  },
  {
    slug: "tontine-digitale",
    title: "Tontine Digitale",
    category: "Plateforme Fintech",
    year: "2025",
    client: "Projet d'étude — ESGIS",
    industry: "Fintech / Épargne",
    services: ["Laravel", "React", "Tailwind CSS", "API REST"],
    overview: "Développement d'une plateforme de numérisation des tontines, permettant aux tontiniers et aux membres de gérer leurs tontines en ligne. Un projet d'étude qui modernise une pratique d'épargne traditionnelle ouest-africaine.",
    challenge: "Les tontines traditionnelles reposent sur une gestion papier et de la confiance verbale. Il fallait concevoir un outil numérique capable de contrôler les cycles et les tours de paiement tout en restant accessible à tous les profils d'utilisateurs.",
    solution: "J'ai contribué au développement frontend et à la liaison avec l'API : gestion des tontines en ligne, suivi des cycles et des tours, avec une interface claire construite en React et Tailwind CSS, adossée à un backend Laravel.",
	images: [tontineHero, tontineDetail1, tontineDetail2, tontineDetail3],
  },
  {
    slug: "daba-sas",
    title: "Daba SAS",
    category: "E-Commerce & Traçabilité",
    year: "2025",
    client: "Projet Personnel",
    industry: "Agroalimentaire & Distribution",
    services: ["Vue 3", "Tailwind CSS", "Pinia", "API REST & JWT", "Figma"],
    overview: "Conception de l'interface web, de la structure de navigation et de la vitrine e-commerce pour DABA SAS, un concept d'entreprise spécialisée dans la distribution de produits frais (viandes, volailles) au Togo.",
   	challenge: "Le marché togolais exigeait une plateforme e-commerce rapide et adaptée aux produits frais (viandes, volailles, charcuterie), nécessitant un système de traçabilité fiable par QR Code pour garantir la fraîcheur et l'origine des produits.",
    solution: "J'ai contribué au développement frontend (Vue 3, Vite, Pinia, Tailwind CSS) et réalisé la maquette graphique sur Figma. L'architecture repose sur une API REST sécurisée par JWT, avec une base MySQL et un déploiement Nginx.",
	images: [dabaHero, dabaDetail1, dabaDetail2, dabaDetail3],

  },
  {
    slug: "loganalyzer-pro",
    title: "LogAnalyzer Pro",
    category: "Outil CLI & Automation",
    year: "2026",
    client: "Projet Académique — ESGIS",
    industry: "DevOps & Infrastructure",
    services: ["Python 3", "CLI & Argparse", "JSON & Automation", "Cron / Linux"],
    overview: "Conception et développement de LogAnalyzer Pro, un outil en ligne de commande en Python permettant d'analyser des fichiers de logs applicatifs, d'extraire des statistiques, de générer des rapports JSON et d'automatiser l'archivage.",
    challenge: "Les systèmes applicatifs génèrent des volumes importants de logs bruts difficiles à exploiter manuellement. L'enjeu était de créer un outil léger, sans dépendances externes, capable de filtrer la criticité (INFO, WARN, ERROR) et de s'exécuter de façon autonome.",
    solution: "J'ai développé le module d'ingestion et d'analyse (`analyser.py`), gérant la lecture, le filtrage selon le niveau, le calcul des statistiques et la détection du Top 5 des erreurs. Le projet intègre également la génération de rapports JSON, la compression `.tar.gz` et la planification automatisée via Cron.",
    images: [loganalyzerHero, loganalyzerDetail1, loganalyzerDetail2, loganalyzerDetail3],
  },
  {
    slug: "nike-sneakers-app",
    title: "Nike Store Mobile",
    category: "Application Mobile Cross-Platform",
    year: "2026",
    client: "Projet Personnel",
    industry: "E-Commerce & Mobile",
    services: ["Flutter", "Dart"],
    overview: "Conception et développement d'une application mobile moderne d'e-commerce de chaussures de sport (Sneakers), développée en Flutter et Dart avec une interface fluide et axée sur l'expérience utilisateur.",
    challenge: "L'objectif était de concevoir une interface mobile haut de gamme proposant une navigation fluide entre le catalogue produit, les filtres de catégories, la sélection personnalisée de pointure/couleur et la gestion dynamique du panier.",
    solution: "Développement d'interfaces sur-mesure en Flutter : intégration de bannières personnalisées, carrousels de catégories, sélection dynamique des tailles et des coloris, ainsi qu'un panier d'achat interactif recalculant automatiquement les sous-totaux et frais de livraison.",
    images: [sneakersHero, sneakersDetail1, sneakersDetail2, sneakersDetail3],
  },
];