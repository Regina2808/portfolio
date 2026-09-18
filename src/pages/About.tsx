import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";

import portraitMain from "@/assets/portrait-regina.jpg";
import workspace from "@/assets/workspace.jpg";

const values = [
  {
    number: "01",
    title: "Rigueur & créativité",
    description: "Chaque ligne de code et chaque pixel comptent. Je combine une approche technique rigoureuse avec une vraie sensibilité créative.",
  },
  {
    number: "02",
    title: "Capacité d'adaptation",
    description: "Nouvelles technologies, nouveaux contextes : j'apprends vite et je m'adapte aux besoins de chaque projet et de chaque équipe.",
  },
  {
    number: "03",
    title: "Esprit d'équipe",
    description: "Les meilleurs produits naissent de la collaboration. Je communique clairement et j'aime travailler main dans la main avec les équipes.",
  },
];

const parcours = [
  { name: "OSMOCOM GROUP", type: "Développeuse Web Fullstack — stage professionnel", year: "Septembre 2025 – Présent" },
  { name: "QUALITAT", type: "Développeuse Web Fullstack — stage académique", year: "Février 2026 - Mai 2026" },
  { name: "ESGIS", type: "Licence en Architecture Logicielle", year: "2023 – 2026" },
  { name: "Collège Catholique Saint Michel", type: "Baccalauréat Scientifique (Série C)", year: "2023" },
];

const skills = [
  { label: "Design UI/UX & Graphique", items: "Figma, Canva, prototypage d'interfaces" },
  { label: "Front-end", items: "HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap" },
  { label: "Back-end", items: "PHP (Laravel), Python, C, MySQL" },
  { label: "Mobile", items: "Flutter (Dart) — bases solides" },
  { label: "Outils", items: "Git, GitLab, GitHub, VS Code" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-6">À propos</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink">
                  Du code aux interfaces, avec passion.
                </h1>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Régina Awadjihe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-xl md:text-2xl text-ink leading-relaxed mb-8 first-letter:text-8xl md:first-letter:text-9xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-0 first-letter:leading-[0.75]">
                Je m'appelle Régina, développeuse fullstack et designer UI/UX
                basée à Cotonou, au Bénin. Diplômée d'une Licence en Architecture
                Logicielle de l'ESGIS, je suis passionnée par le développement
                web, l'analyse de données et la sécurité informatique.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-8">
                Mon approche repose sur la rigueur et la détermination. J'aime
                concevoir des solutions numériques novatrices et sécurisées, qui
                répondent à de vrais besoins — qu'il s'agisse d'une plateforme de
                gestion RH, d'une application e-commerce ou de la numérisation de
                pratiques d'épargne traditionnelles.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light mb-8">
                J'ai développé mes compétences sur le terrain, notamment chez
                OSMOCOM GROUP où j'ai conçu une plateforme complète de gestion des
                ressources humaines et de paie, et chez QUALITAT où j'ai mené la
                migration d'une plateforme de gestion de salles de sport vers une
                architecture Laravel moderne.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-ink-light">
                En dehors du code, vous me trouverez plongée dans un livre, en
                train de cuisiner, ou en train de suivre des tutoriels
                informatiques. J'aime aussi poser devant l'objectif en tant que
                modèle photo.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-16 md:mb-20">Mes qualités</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.number} delay={index * 100}>
                <div>
                  <span className="text-sm text-ink-muted tracking-wide">{value.number}</span>
                  <h3 className="font-serif text-2xl text-ink mt-4 mb-4">{value.title}</h3>
                  <p className="text-ink-light">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">Compétences</p>
                <h2 className="text-ink">Ma boîte à outils</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-divider">
                {skills.map((skill, index) => (
                  <ScrollReveal key={skill.label} delay={index * 50}>
                    <div className="py-6">
                      <h4 className="font-serif text-lg text-ink">{skill.label}</h4>
                      <p className="text-sm text-ink-muted">{skill.items}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="eyebrow mb-4">Parcours</p>
                <h2 className="text-ink">Formation & Expérience</h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-divider">
                {parcours.map((item, index) => (
                  <ScrollReveal key={item.name} delay={index * 50}>
                    <div className="py-6 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-lg text-ink">{item.name}</h4>
                        <p className="text-sm text-ink-muted">{item.type}</p>
                      </div>
                      <span className="text-sm text-ink-muted whitespace-nowrap">{item.year}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={workspace}
                    alt="L'espace de travail de Régina"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <ScrollReveal delay={100}>
                <p className="eyebrow mb-4">Au-delà du travail</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-ink-light">
                  La curiosité nourrit ma créativité. Lecture, cuisine, tutoriels
                  informatiques et modélisme photo : j'aime explorer des univers
                  différents, et chacun d'eux enrichit ma façon de concevoir des
                  produits numériques.
                </p>
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
              <h2 className="text-ink mb-6">
                Travaillons ensemble.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Je suis toujours ouverte à de nouveaux projets, collaborations et
                opportunités.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Me contacter
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
