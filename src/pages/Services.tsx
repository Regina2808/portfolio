import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    number: "01",
    title: "Design UI/UX & Prototypage",
    description: "Conception d'interfaces modernes, intuitives et axées sur l'expérience utilisateur. De la recherche d'idées aux maquettes interactives haute fidélité, je façonne des produits numériques élégants et faciles à utiliser.",
    includes: [
      "Recherche utilisateur & wireframing",
      "Prototypage interactif sur Figma",
      "Design d'interfaces web et mobiles",
      "Systèmes de composants réutilisables (Design System)",
      "Livrables et spécifications prêts pour les développeurs",
    ],
    idealFor: "Les entreprises et startups souhaitant concevoir ou refondre l'interface de leur produit numérique.",
  },
  {
    number: "02",
    title: "Développement Web Full-Stack",
    description: "Création d'applications web performantes, sécurisées et sur mesure. J'assure aussi bien l'intégration d'interfaces dynamiques que la mise en place d'architectures back-end et de bases de données solides.",
    includes: [
      "Développement Front-End (React, Vue.js, Tailwind CSS, TypeScript)",
      "Développement Back-End & APIs REST (Laravel, PHP, Python)",
      "Modélisation et gestion de bases de données (SQL, MySQL)",
      "Optimisation des performances et de l'accessibilité",
      "Intégration continue et déploiement",
    ],
    idealFor: "Les projets nécessitant une plateforme web dynamique, un dashboard d'administration ou un outil SaaS complet.",
  },
  {
    number: "03",
    title: "Développement Mobile Multiplateforme",
    description: "Conception et développement d'applications mobiles performantes pour iOS et Android à partir d'un code source unique, garantissant une expérience fluide et native pour vos utilisateurs.",
    includes: [
      "Développement mobile multiplateforme avec Flutter / Dart",
      "Intégration des maquettes UI/UX en interfaces natives",
      "Connexion aux APIs et services back-end",
      "Gestion d'état et optimisation des performances mobiles",
      "Tests et préparation au déploiement",
    ],
    idealFor: "Les organisations et projets voulant lancer rapidement une application mobile fluide sur iOS et Android.",
  },
  {
    number: "04",
    title: "Identité Visuelle & Branding Web",
    description: "Création d'univers visuels cohérents et d'supports de communication pour marquer les esprits et harmoniser votre présence en ligne.",
    includes: [
      "Conception de logos et éléments de marque",
      "Palette de couleurs et choix typographiques",
      "Création de visuels pour le web et les réseaux sociaux (Canva, Figma)",
      "Charte graphique de base pour vos supports numériques",
      "Création de kits média et maquettes de présentation",
    ],
    idealFor: "Les structures en phase de lancement ou de repositionnement ayant besoin d'une identité visuelle claire.",
  },
];

const process = [
  {
    step: "01",
    title: "Découverte",
    description: "Nous commençons par une écoute attentive. À travers des entretiens, des recherches et des analyses, je dégage les enseignements qui orienteront les décisions stratégiques.",
  },
  {
    step: "02",
    title: "Stratégie",
    description: "L'analyse devient une orientation. Je développe des cadres de positionnement et des stratégies créatives qui guident toutes les décisions de design.",
  },
  {
    step: "03",
    title: "Design",
    description: "La stratégie prend forme. Grâce à une exploration itérative, nous aboutissons à des solutions de design à la fois esthétiques et fonctionnelles.",
  },
  {
    step: "04",
    title: "Affinage",
    description: "Les détails comptent. Chaque élément est peaufiné jusqu'à ce que le système fonctionne de manière fluide sur toutes les applications.",
  },
  {
    step: "05",
    title: "Livraison",
    description: "Le projet prend vie. Je fournis des ressources complètes, des directives et un accompagnement pour garantir un déploiement réussi.",
  },
];

const faqs = [
  {
    question: "Quel est le délai typique pour un projet ?",
    answer: "Les délais varient selon l'ampleur du projet. Une identité de marque ciblée prend généralement entre 8 et 12 semaines. Un système de marque complet peut s'étendre sur 16 à 20 semaines. Je vous fournirai un planning détaillé lors de notre consultation initiale.",
  },
  {
    question: "Comment fonctionnent les révisions ?",
    answer: "Chaque phase intègre des étapes de révision dédiées dans le calendrier. Je privilégie un affinage itératif : la plupart des projets incluent 2 à 3 séries de révisions par livrable majeur.",
  },
  {
    question: "Que dois-je préparer avant de commencer ?",
    answer: "Je vous enverrai un questionnaire complet pour recueillir les informations de contexte. Avoir de la clarté sur vos objectifs, votre calendrier et vos parties prenantes nous aide à démarrer sur de bonnes bases.",
  },
  {
    question: "Travailliez-vous avec des clients à distance ?",
    answer: "Absolument. Bien que je sois basée à Cotonou, je travaille avec des clients partout dans le monde. Les appels vidéo, les espaces de travail partagés et les points réguliers garantissent une collaboration fluide, peu importe la localisation.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">Services</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink mb-8">Comment je peux vous aider.</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-ink-light">
                J'offre des services ciblés conçus pour créer un impact durable. Chaque intervention est conçue sur mesure selon vos besoins et vos objectifs spécifiques.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} delay={index * 50}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-4">
                    <span className="text-sm text-ink-muted tracking-wide">{service.number}</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-ink mt-4">{service.title}</h2>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <p className="text-ink-light mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <p className="eyebrow mb-4">Ce qui est inclus</p>
                      <ul className="space-y-2">
                        {service.includes.map((item, i) => (
                          <li key={i} className="text-ink-light flex items-start gap-3">
                            <span className="text-ink-muted">—</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-ink-muted mb-6">
                      <strong className="text-ink">Idéal pour :</strong> {service.idealFor}
                    </p>

                    <Link 
                      to="/contact" 
                      className="arrow-link text-ink"
                    >
                      Obtenir un devis pour {service.title.toLowerCase()}
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-4">Le Processus</p>
            <h2 className="text-ink mb-16 md:mb-20">Comment nous collaborons.</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 100}>
                <div className="relative">
                  <span className="text-sm text-ink-muted tracking-wide">{step.step}</span>
                  <h3 className="font-serif text-xl text-ink mt-4 mb-4">{step.title}</h3>
                  <p className="text-sm text-ink-light">{step.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-3 left-full w-full h-px bg-divider -translate-x-4" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">FAQ</p>
                <h2 className="text-ink">Questions fréquentes.</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ScrollReveal delay={100}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-divider">
                      <AccordionTrigger className="text-left font-serif text-lg text-ink hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-ink-light pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">Prêt à démarrer ?</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Je travaille de manière optimale avec des clients qui valorisent la collaboration et sont prêts à investir dans un projet à forte valeur ajoutée.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Obtenir une estimation
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}