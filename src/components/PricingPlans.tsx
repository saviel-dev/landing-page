import { Check, Star, Crown, Rocket, Building, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PricingPlans = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showLocalPaymentModal, setShowLocalPaymentModal] = useState(false);
  const [localPaymentData, setLocalPaymentData] = useState({
    name: "",
    country: "",
    contact: ""
  });

  const plans = [
    {
      id: "basico",
      name: "Básico",
      icon: <Star className="h-6 w-6" />,
      priceRange: "$150-$349 ",
      shortPrice: "$150+",
      period: "pago único",
      description: "Perfecto para emprendedores y pequeños negocios",
      popular: false,
      features: [
        "Página web de hasta 5 secciones",
        "Diseño responsivo",
        "Formulario de contacto",
        "Integración redes sociales",
        "Hosting y dominio de un año",
        "1 mes de soporte",
      ],
    },
    {
      id: "profesional",
      name: "Profesional",
      icon: <Rocket className="h-6 w-6" />,
      priceRange: "$599 - $899 ",
      shortPrice: "$599+",
      period: "pago único",
      description: "Ideal para negocios establecidos",
      popular: true,
      features: [
        "Página web hasta 10 secciones",
        "Diseño personalizado",
        "Blog/Noticias",
        "Galería de imágenes",
        "Chat en vivo",
        "3 meses de soporte",
        "Certificado SSL",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      icon: <Crown className="h-6 w-6" />,
      priceRange: "$999 - $1,499 ",
      shortPrice: "$999+",
      period: "pago único",
      description: "Para negocios que buscan destacar",
      popular: false,
      features: [
        "Página web ilimitada",
        "E-commerce básico (hasta 50 productos)",
        "Panel de administración",
        "Integraciones API",
        "Analytics avanzado",
        "Backup automático",
        "6 meses de soporte",
        "Hosting incluido (1 año)",
      ],
    },
    {
      id: "empresarial",
      name: "Empresarial",
      icon: <Building className="h-6 w-6" />,
      priceRange: "Cotizar",
      shortPrice: "Cotizar",
      period: "proyecto",
      description: "Soluciones a medida para grandes empresas",
      popular: false,
      features: [
        "Desarrollo completamente personalizado",
        "Múltiples idiomas",
        "Integraciones complejas",
        "Bases de datos avanzadas",
        "Aplicaciones web complejas",
        "Soporte 24/7",
        "Mantenimiento incluido",
        "Infraestructura escalable",
      ],
    },
  ];

  const handlePlanSelection = (planId: string, planName: string, price: string) => {
    if (planId === "empresarial") {
      // Abrir WhatsApp para cotización
      const phoneNumber = "584122865550";
      const message = "Hola, Buen dia. Busco cotizar un proyecto empresarial.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      navigate(`/checkout?plan=${planId}&name=${encodeURIComponent(planName)}&price=${encodeURIComponent(price)}`);
    }
  };

  const handleLocalPaymentSubmit = () => {
    if (!localPaymentData.name || !localPaymentData.country || !localPaymentData.contact) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Solicitud Enviada",
      description: "Tu solicitud de método de pago local ha sido enviada. Te contactaremos pronto.",
    });

    setShowLocalPaymentModal(false);
    setLocalPaymentData({ name: "", country: "", contact: "" });
  };

  return (
    <section id="planes" className="py-20 bg-blue-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Entrance Annotation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            Planes diseñados para cada etapa de tu negocio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforma tu Negocio con Nuestros <span className="text-blue-gradient">Planes Exclusivos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde soluciones económicas hasta desarrollos empresariales. 
            Encuentra el plan perfecto para impulsar tu proyecto al siguiente nivel.
          </p>
        </div>

        {/* Centered cards container with larger desktop width */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12 max-w-7xl w-full mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                style={{width: 'calc(100% + 10px)', marginLeft: '-5px', animationDelay: `${index * 0.1}s`}}
                className={`relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 animate-fade-in-up cursor-pointer group hover:shadow-2xl hover:scale-105 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}

              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-gradient text-white">
                    Más Popular
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <div className="text-blue-500 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{plan.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      <span className="hidden lg:inline">{plan.priceRange}</span>
                      <span className="lg:hidden">{plan.shortPrice}</span>
                    </span>
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:text-green-600 transition-colors duration-300" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handlePlanSelection(plan.id, plan.name, plan.priceRange)}
                  className={`w-full transition-all duration-300 group-hover:scale-105 ${
                    plan.popular 
                      ? 'bg-blue-gradient text-white hover:opacity-90' 
                      : 'bg-gray-100 text-gray-900 hover:bg-blue-gradient hover:text-white'
                  }`}
                >
                  {plan.priceRange === "Cotizar" ? "Cotizar Proyecto" : "Elegir Plan"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Space for any additional content if needed in the future */}
      </div>
    </section>
  );
};

export default PricingPlans;
