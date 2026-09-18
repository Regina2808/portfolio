import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Remonter en haut de page à chaque changement de projet
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const images = project.images || [];

  return (
    <Layout>
      {/* Image Principale (Hero) */}
      <section className="pt-24 md:pt-32">
        <div className="w-full">
          <ScrollReveal>
            <div className="w-full overflow-hidden bg-cream-dark">
              <img
                src={images[0]}
                alt={project.title}
                className="w-full h-auto block max-h-[80vh] object-contain mx-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Informations sur le projet */}
      <section className="section-padding">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contenu Principal */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-4">Aperçu</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="font-serif text-4xl md:text-5xl text-ink mb-8">
                  {project.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-xl text-ink-light leading-relaxed mb-8">
                  {project.overview}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow mb-2">Le Défi</p>
                    <p className="text-ink-light leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">La Solution</p>
                    <p className="text-ink-light leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Barre latérale d'infos */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={200}>
                <div className="lg:sticky lg:top-32 space-y-8">
                  <div>
                    <p className="eyebrow mb-2">Client / Entreprise</p>
                    <p className="text-ink">{project.client ?? "N/A"}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Secteur</p>
                    <p className="text-ink">{project.industry}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Technologies / Services</p>
                    <ul className="space-y-1">
                      {project.services?.map((service) => (
                        <li key={service} className="text-ink">{service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Année</p>
                    <p className="text-ink">{project.year}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Galerie des 4 images */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="space-y-8 md:space-y-12">
            
            {/* Image 1 : Pleine Largeur */}
            {images[0] && (
              <ScrollReveal>
                <div className="w-full overflow-hidden border border-divider rounded-lg">
                  <img
                    src={images[0]}
                    alt={`${project.title} - Image 1`}
                    className="w-full h-auto block"
                  />
                </div>
              </ScrollReveal>
            )}

            {/* Images 2 & 3 : Grille à Deux Colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal>
                <div className="w-full overflow-hidden border border-divider rounded-lg">
                  <img
                    src={images[1] || images[0]}
                    alt={`${project.title} - Image 2`}
                    className="w-full h-auto block"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="w-full overflow-hidden border border-divider rounded-lg">
                  <img
                    src={images[2] || images[0]}
                    alt={`${project.title} - Image 3`}
                    className="w-full h-auto block"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Image 4 : Vue complète (s'adapte à la hauteur pour le code/terminal) */}
            <ScrollReveal>
              <div className="w-full overflow-hidden border border-divider rounded-lg">
                <img
                  src={images[3] || images[0]}
                  alt={`${project.title} - Image 4`}
                  className="w-full h-auto block"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Projet Suivant */}
      <section className="border-t border-divider">
        <Link 
          to={`/work/${nextProject.slug}`}
          className="group block"
        >
          <div className="container-editorial px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow mb-4">Projet Suivant</p>
                <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:opacity-70 transition-opacity duration-300">
                  {nextProject.title}
                </h2>
              </div>
              <ArrowRight 
                size={32} 
                strokeWidth={1} 
                className="text-ink transition-transform duration-300 group-hover:translate-x-2" 
              />
            </div>
          </div>
        </Link>
      </section>

      {/* Retour aux projets */}
      <section className="bg-cream-dark">
        <div className="container-editorial px-6 md:px-12 lg:px-20 py-8">
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Retour à tous les projets
          </Link>
        </div>
      </section>
    </Layout>
  );
}