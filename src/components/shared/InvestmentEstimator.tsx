import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

const projectTypes = [
  { id: "brand-identity", label: "Identité Visuelle / Branding", baseMin: 30000, baseMax: 50000 },
  { id: "design-system", label: "Système de Design Visuel", baseMin: 25000, baseMax: 45000 },
  { id: "art-direction", label: "Direction Artistique", baseMin: 15000, baseMax: 30000 },
  { id: "brand-guidelines", label: "Charte Graphique", baseMin: 10000, baseMax: 25000 },
];

const businessStages = [
  { id: "startup", label: "Start-up / Nouveau projet", multiplier: 0.8 },
  { id: "growing", label: "En croissance", multiplier: 1.0 },
  { id: "established", label: "Entreprise établie", multiplier: 1.2 },
  { id: "enterprise", label: "Grande entreprise", multiplier: 1.5 },
];

const timelines = [
  { id: "flexible", label: "Flexible (12+ semaines)", multiplier: 1.0 },
  { id: "standard", label: "Standard (8-12 semaines)", multiplier: 1.1 },
  { id: "accelerated", label: "Accéléré (6-8 semaines)", multiplier: 1.25 },
  { id: "rush", label: "Urgent (moins de 6 semaines)", multiplier: 1.5 },
];

const deliverableScopes = [
  { id: "core", label: "Essentiels de base", multiplier: 0.8 },
  { id: "comprehensive", label: "Complet", multiplier: 1.0 },
  { id: "full-system", label: "Système global", multiplier: 1.3 },
];

interface SelectionButtonProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function SelectionButton({ selected, onClick, children }: SelectionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left px-5 py-4 border transition-all duration-300",
        "hover:border-ink hover:bg-cream-dark",
        selected
          ? "border-ink bg-cream-dark"
          : "border-divider bg-transparent"
      )}
    >
      <span className="flex items-center justify-between">
        <span className={cn("text-sm", selected ? "text-ink" : "text-ink-light")}>
          {children}
        </span>
        {selected && <Check size={16} className="text-ink" />}
      </span>
    </button>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const start = displayValue;
    const end = value;
    const duration = 400;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;
      
      setDisplayValue(Math.round(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <>{displayValue.toLocaleString()}</>;
}

export function InvestmentEstimator() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);
  const [selectedScope, setSelectedScope] = useState<string | null>(null);

  const calculateEstimate = () => {
    if (!selectedType || !selectedStage || !selectedTimeline || !selectedScope) {
      return null;
    }

    const projectType = projectTypes.find((t) => t.id === selectedType);
    const stage = businessStages.find((s) => s.id === selectedStage);
    const timeline = timelines.find((t) => t.id === selectedTimeline);
    const scope = deliverableScopes.find((s) => s.id === selectedScope);

    if (!projectType || !stage || !timeline || !scope) return null;

    const minEstimate = Math.round(
      projectType.baseMin * stage.multiplier * timeline.multiplier * scope.multiplier
    );
    const maxEstimate = Math.round(
      projectType.baseMax * stage.multiplier * timeline.multiplier * scope.multiplier
    );

    return { min: minEstimate, max: maxEstimate };
  };

  const estimate = calculateEstimate();
  const completedSteps = [selectedType, selectedStage, selectedTimeline, selectedScope].filter(Boolean).length;

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-editorial px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="eyebrow mb-4">Estimateur d'investissement</p>
              <h2 className="text-ink mb-4">Obtenez une estimation personnalisée.</h2>
              <p className="text-ink-light max-w-xl mx-auto">
                Répondez à quelques questions pour recevoir une fourchette d'investissement sur mesure pour votre projet.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Type de projet */}
            <ScrollReveal delay={100}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">1</span>
                  Type de Projet
                </p>
                <div className="space-y-2">
                  {projectTypes.map((type) => (
                    <SelectionButton
                      key={type.id}
                      selected={selectedType === type.id}
                      onClick={() => setSelectedType(type.id)}
                    >
                      {type.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Stade de l'entreprise */}
            <ScrollReveal delay={200}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">2</span>
                  Stade de l'Entreprise
                </p>
                <div className="space-y-2">
                  {businessStages.map((stage) => (
                    <SelectionButton
                      key={stage.id}
                      selected={selectedStage === stage.id}
                      onClick={() => setSelectedStage(stage.id)}
                    >
                      {stage.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Calendrier / Délais */}
            <ScrollReveal delay={300}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">3</span>
                  Calendrier de Réalisation
                </p>
                <div className="space-y-2">
                  {timelines.map((timeline) => (
                    <SelectionButton
                      key={timeline.id}
                      selected={selectedTimeline === timeline.id}
                      onClick={() => setSelectedTimeline(timeline.id)}
                    >
                      {timeline.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Périmètre des livrables */}
            <ScrollReveal delay={400}>
              <div>
                <p className="eyebrow mb-4">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-cream text-xs mr-2">4</span>
                  Périmètre des Livrables
                </p>
                <div className="space-y-2">
                  {deliverableScopes.map((scope) => (
                    <SelectionButton
                      key={scope.id}
                      selected={selectedScope === scope.id}
                      onClick={() => setSelectedScope(scope.id)}
                    >
                      {scope.label}
                    </SelectionButton>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Résultat de l'estimation */}
          <ScrollReveal delay={500}>
            <div className="mt-12 md:mt-16 pt-12 border-t border-divider">
              <div className="text-center">
                {estimate ? (
                  <div className="animate-fade-in">
                    <p className="eyebrow mb-4">Investissement Estimé</p>
                    <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-6">
                      <AnimatedNumber value={estimate.min} /> $ — <AnimatedNumber value={estimate.max} /> $
                    </p>
                    <p className="text-ink-muted text-sm mb-8 max-w-md mx-auto">
                      Il s'agit d'une estimation préliminaire basée sur vos sélections. Le tarif final sera déterminé après notre première consultation.
                    </p>
                    <button
                      onClick={scrollToForm}
                      className="arrow-link text-ink inline-flex items-center gap-2"
                    >
                      Démarrer Votre Projet
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                ) : (
                  <div className="text-ink-muted">
                    <p className="eyebrow mb-4">Votre Estimation</p>
                    <p className="font-serif text-3xl md:text-4xl text-ink-light mb-4">
                      {completedSteps}/4 sélections effectuées
                    </p>
                    <p className="text-sm">Complétez toutes les étapes pour afficher votre estimation personnalisée.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}