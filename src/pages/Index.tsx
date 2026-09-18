import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { HorizontalScrollGallery } from "@/components/shared/HorizontalScrollGallery";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

import grhHero from "@/assets/projects/grh-osmocom-hero.jpg";
import fitzoneHero from "@/assets/projects/fitzone-hero.jpg";
import tontineHero from "@/assets/projects/tontine-hero.jpg";
import dabaHero from "@/assets/projects/daba-hero.jpg";
import portraitMain from "@/assets/portrait-regina.jpg";

const projectImages: Record<string, string> = {
  "grh-osmocom": grhHero,
  "fitzone-le-gym": fitzoneHero,
  "tontine-digitale": tontineHero,
  "daba-sas": dabaHero,
};

const services = [
  {
    title: "Développement Fullstack",
    description: "Des applications web complètes, de la base de données à l'interface, avec Laravel, React et Vue.",
  },
  {
    title: "Design UI/UX",
    description: "Des interfaces claires et intuitives, pensées pour les utilisateurs, prototypées sur Figma.",
  },
  {
    title: "Design Graphique",
    description: "Des identités visuelles et des maquettes qui donnent du caractère à vos produits.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-dvh flex items-center pt-24 md:pt-32">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <ScrollReveal>
                <p className="eyebrow mb-6">Développement Fullstack · UI/UX Design · Design Graphique</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-ink mb-8">
                  Régina Awadjihe
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-ink-light max-w-xl mb-10">
                  Développeuse fullstack et designer basée à Cotonou. Je conçois
                  des solutions numériques novatrices et sécurisées, du code à
                  l'interface.
                </p>
              </ScrollReveal>

              	<ScrollReveal delay={300}>
					<Link
					to="/work"
					className="arrow-link text-ink"
					>
					Découvrir mes projets
					<ArrowRight size={18} strokeWidth={1.5} />
					</Link>
             	</ScrollReveal>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <ScrollReveal delay={200}>
                <div className="aspect-[4/5] bg-cream-darker overflow-hidden">
                  <img
                    src={portraitMain}
                    alt="Régina Awadjihe — Développeuse fullstack et designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Scroll Indicator */}
          <ScrollReveal delay={500} className="hidden lg:block mt-24">
            <div className="flex items-center gap-3 text-ink-muted">
              <div className="w-px h-12 bg-divider origin-top animate-line-grow" />
              <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <HorizontalScrollGallery />

      {/* Selected Work Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Projets sélectionnés"
              title="Réalisations"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          	<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
				{projects.slice(0, 4).map((project, index) => (
					<ScrollReveal key={project.slug} delay={index * 100}>
						<ProjectCard
						slug={project.slug}
						title={project.title}
						category={project.category}
						year={project.year}
						image={projectImages[project.slug]}
						/>
					</ScrollReveal>
				))}
          	</div>

          <ScrollReveal className="mt-16 md:mt-20">
            <Link to="/work" className="arrow-link text-ink">
              Voir tous les projets
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview Section */}
      	<section className="section-padding">
			<div className="container-editorial">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
				{/* Text */}
				<div className="lg:col-span-6">
				<ScrollReveal>
					<p className="eyebrow mb-6">À propos</p>
				</ScrollReveal>
				<ScrollReveal delay={100}>
					<blockquote className="font-serif text-3xl md:text-4xl text-ink leading-snug mb-8">
					« Une bonne solution numérique allie rigueur technique et sens du détail. »
					</blockquote>
				</ScrollReveal>
				<ScrollReveal delay={200}>
					<p className="text-ink-light mb-8">
					Diplômée d'une Licence en Architecture Logicielle de l'ESGIS, je
					suis passionnée par le développement web fullstack, l'analyse de
					données et la sécurité informatique. Rigoureuse et déterminée, je
					mets mes compétences au service de projets concrets et utiles.
					</p>
				</ScrollReveal>
				<ScrollReveal delay={300}>
					<Link to="/about" className="arrow-link text-ink">
					En savoir plus sur mon parcours
					<ArrowRight size={18} strokeWidth={1.5} />
					</Link>
				</ScrollReveal>
				</div>

				{/* Image */}
				<div className="lg:col-span-5 lg:col-start-8">
				<ScrollReveal delay={200}>
					<div className="aspect-[4/5] bg-cream-darker overflow-hidden">
					<img
						src={portraitMain}
						alt="Portrait de Régina Awadjihe"
						loading="lazy"
						className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
					/>
					</div>
				</ScrollReveal>
				</div>
			</div>
			</div>
      	</section>

      {/* Services Overview */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Services"
              title="Ce que je fais"
              className="mb-16 md:mb-20"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="border-t border-divider pt-8">
                  <h3 className="font-serif text-2xl text-ink mb-4">{service.title}</h3>
                  <p className="text-ink-light">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 md:mt-20">
            <Link to="/services" className="arrow-link text-ink">
              Voir tous les services
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-cream-darker">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-ink mb-6">
                Construisons quelque chose{" "}
                <em className="font-serif italic">d'utile.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-ink-light mb-10 max-w-xl mx-auto">
                Je suis disponible pour de nouveaux projets et opportunités.
                Parlons de ce que vous voulez construire.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Discuter d'un projet
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