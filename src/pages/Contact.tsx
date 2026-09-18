import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { InvestmentEstimator } from "@/components/shared/InvestmentEstimator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Identité Visuelle / Branding",
  "Système de Design Visuel",
  "Direction Artistique",
  "Charte Graphique",
  "Autre"
];

const budgetRanges = [
  "Moins de 25 000 $",
  "25 000 $ – 50 000 $",
  "50 000 $ – 100 000 $",
  "100 000 $ et plus",
  "Non défini pour le moment"
];

const referralSources = [
  "Recommandation",
  "Réseaux sociaux",
  "Moteur de recherche",
  "Presse / Publication",
  "Autre"
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit contenir moins de 100 caractères"),
  email: z.string().trim().email("Veuillez entrer une adresse email valide").max(255),
  company: z.string().trim().max(150, "Le nom de l'entreprise doit contenir moins de 150 caractères").optional(),
  projectType: z.string().max(100).optional(),
  budget: z.string().max(100).optional(),
  message: z.string().trim().min(1, "Les détails du projet sont requis").max(2000, "Le message doit contenir moins de 2000 caractères"),
  referral: z.string().max(100).optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    referral: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = contactSchema.safeParse(formData);

		if (!result.success) {
		toast({
			title: "Veuillez vérifier vos informations",
			description: result.error.issues[0]?.message ?? "Données de formulaire invalides.",
			variant: "destructive",
		});
		return;
		}

    	setIsSubmitting(true);

		try {
			const response = await fetch("https://formspree.io/f/xnpnqygz", {
				method: "POST",
				headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast({
				title: "Message envoyé !",
				description: "Merci de m'avoir contactée. Je vous répondrai dans les plus brefs délais."
				});
				setFormData({
				name: "",
				email: "",
				company: "",
				projectType: "",
				budget: "",
				message: "",
				referral: ""
				});
			} else {
				throw new Error("Erreur lors de l'envoi");
			}
		} catch (err) {
			toast({
				title: "Une erreur est survenue",
				description: "Votre message n'a pas pu être envoyé. Veuillez me contacter directement à reginaawadjihe38@gmail.com.",
				variant: "destructive",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

  return (
    <Layout>
      {/* En-tête / Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="eyebrow mb-6">Obtenir un devis</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-ink mb-8">Construisons votre projet.</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl text-ink-light">
                Utilisez l'estimateur ci-dessous pour obtenir une fourchette de budget personnalisée, puis remplissez le formulaire pour démarrer la discussion.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Estimateur d'investissement */}
      <InvestmentEstimator />

      {/* Formulaire de contact */}
      <section id="contact-form" className="section-padding border-t border-divider">
        <div className="container-editorial px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="eyebrow block mb-3">
                      Nom complet <span className="text-ink-muted">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="input-editorial"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="eyebrow block mb-3">
                      Adresse email <span className="text-ink-muted">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange}
                      className="input-editorial"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label htmlFor="company" className="eyebrow block mb-3">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      maxLength={150}
                      value={formData.company}
                      onChange={handleChange}
                      className="input-editorial"
                      placeholder="Votre entreprise"
                    />
                  </div>

                  {/* Type de projet */}
                  <div>
                    <label htmlFor="projectType" className="eyebrow block mb-3">
                      Type de projet
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="input-editorial bg-transparent cursor-pointer"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="eyebrow block mb-3">
                      Fourchette de budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-editorial bg-transparent cursor-pointer"
                    >
                      <option value="">Sélectionnez un budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="eyebrow block mb-3">
                      Détails du projet <span className="text-ink-muted">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-editorial resize-none"
                      placeholder="Parlez-moi de votre projet, de vos objectifs et de votre calendrier..."
                    />
                  </div>

                  {/* Source de recommandation */}
                  <div>
                    <label htmlFor="referral" className="eyebrow block mb-3">
                      Comment avez-vous entendu parler de moi ?
                    </label>
                    <select
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="input-editorial bg-transparent cursor-pointer"
                    >
                      <option value="">Sélectionnez une option</option>
                      {referralSources.map(source => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bouton d'envoi */}
                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </ScrollReveal>
            </div>

            {/* Informations de contact */}
            <div className="lg:col-span-4 lg:col-start-9">
              <ScrollReveal delay={200}>
                <div className="lg:sticky lg:top-32 space-y-10">
                  	<div>
						<p className="eyebrow mb-3">Email</p>
						<a href="mailto:reginaawadjihe38@gmail.com" className="text-ink hover:opacity-70 transition-opacity duration-300">
							reginaawadjihe38@gmail.com
						</a>
					</div>

                  <div>
                    <p className="eyebrow mb-3">Localisation</p>
                    <p className="text-ink">Cotonou, Bénin</p>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">Réseaux Sociaux</p>
                    <div className="space-y-2">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-ink hover:opacity-70 transition-opacity duration-300">
                        Instagram
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-ink hover:opacity-70 transition-opacity duration-300">
                        LinkedIn
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-ink hover:opacity-70 transition-opacity duration-300">
                        Twitter
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-divider">
                    <p className="text-sm text-ink-muted">
                      Je réponds généralement sous 24 à 48 heures. Pour toute demande urgente, veuillez m'écrire directement par email.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact alternatif */}
     	<section className="section-padding bg-cream-dark">
			<div className="container-editorial px-6 md:px-12 lg:px-20">
				<div className="max-w-2xl">
				<ScrollReveal>
					<p className="eyebrow mb-4">Vous préférez envoyer un email direct ?</p>
				</ScrollReveal>
				<ScrollReveal delay={100}>
					<p className="text-ink-light">
					Vous pouvez également me contacter directement à{" "}
					<a href="mailto:reginaawadjihe38@gmail.com" className="text-ink underline underline-offset-4 hover:opacity-70 transition-opacity duration-300">
						reginaawadjihe38@gmail.com
					</a>
					</p>
				</ScrollReveal>
				</div>
			</div>
		</section>
    </Layout>
  );
}