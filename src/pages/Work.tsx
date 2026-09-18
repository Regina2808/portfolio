import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <Layout>
      {/* En-tête / Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <p className="eyebrow mb-6">Portfolio</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-ink max-w-4xl">Projets Sélectionnés</h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-24 lg:gap-x-16">
            {projects.map((project, index) => (
              <ScrollReveal 
                key={project.slug} 
                delay={index * 100}
                className={index % 4 === 1 ? "md:mt-24" : ""}
              >
                <ProjectCard
                  slug={project.slug}
                  title={project.title}
                  category={project.category}
                  year={project.year}
                  image={project.images[0]}
                  aspectRatio={index % 2 === 0 ? "landscape" : "portrait"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action (CTA) */}
      <section className="section-padding bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="eyebrow mb-4">Un projet en tête ?</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-ink mb-6">
                Discutons de votre projet.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-ink-light">
                Je suis toujours ouverte à de nouvelles collaborations. 
                N'hésitez pas à me contacter pour échanger sur la manière dont nous pourrions travailler ensemble.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}