import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormStep } from "@/components/FormStep";
import { ProgressBar } from "@/components/ProgressBar";
import { FormData, dietOptions } from "@/types/form";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    currentWeight: "",
    height: "",
    goalWeight: "",
    dietPreference: ""
  });

  const totalSteps = 6;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = async () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Save to database before navigating to results
      setIsSubmitting(true);
      try {
        const { error } = await supabase.from("pilates_leads").insert({
          name: formData.name,
          phone: formData.phone,
          current_weight: Number(formData.currentWeight),
          height: Number(formData.height),
          goal_weight: Number(formData.goalWeight),
          diet_preference: formData.dietPreference,
        });

        if (error) {
          console.error("Error saving lead:", error);
          toast({
            title: "Hata",
            description: "Bilgileriniz kaydedilemedi. Lütfen tekrar deneyin.",
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Başarılı! ✨",
          description: "Kişiselleştirilmiş programınız hazır!",
        });

        navigate("/results", { state: formData });
      } catch (err) {
        console.error("Unexpected error:", err);
        toast({
          title: "Hata",
          description: "Bir şeyler ters gitti. Lütfen tekrar deneyin.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.name.trim() !== "";
      case 1: return formData.phone.trim() !== "";
      case 2: return formData.currentWeight.trim() !== "" && !isNaN(Number(formData.currentWeight));
      case 3: return formData.height.trim() !== "" && !isNaN(Number(formData.height));
      case 4: return formData.goalWeight.trim() !== "" && !isNaN(Number(formData.goalWeight));
      case 5: return formData.dietPreference !== "";
      default: return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormStep>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Adınız nedir?</h2>
            <p className="text-muted-foreground mb-6">Pilates yolculuğunuzu kişiselleştirelim</p>
            <Input
              type="text"
              placeholder="Adınızı girin"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              className="text-lg p-6"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && canProceed() && handleNext()}
            />
          </FormStep>
        );

      case 1:
        return (
          <FormStep>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Harika {formData.name}! Telefon numaranız nedir?
            </h2>
            <p className="text-muted-foreground mb-6">Size kişiselleştirilmiş ipuçları gönderebilmemiz için</p>
            <Input
              type="tel"
              placeholder="0555 123 4567"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              className="text-lg p-6"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && canProceed() && handleNext()}
            />
          </FormStep>
        );

      case 2:
        return (
          <FormStep>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mevcut kilonuz kaç?</h2>
            <p className="text-muted-foreground mb-6">Kilogram (kg) cinsinden</p>
            <Input
              type="number"
              placeholder="70"
              value={formData.currentWeight}
              onChange={(e) => updateFormData("currentWeight", e.target.value)}
              className="text-lg p-6"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && canProceed() && handleNext()}
            />
          </FormStep>
        );

      case 3:
        return (
          <FormStep>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Boyunuz kaç?</h2>
            <p className="text-muted-foreground mb-6">Santimetre (cm) cinsinden</p>
            <Input
              type="number"
              placeholder="170"
              value={formData.height}
              onChange={(e) => updateFormData("height", e.target.value)}
              className="text-lg p-6"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && canProceed() && handleNext()}
            />
          </FormStep>
        );

      case 4:
        return (
          <FormStep>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hedef kilonuz kaç?</h2>
            <p className="text-muted-foreground mb-6">Kilogram (kg) cinsinden</p>
            <Input
              type="number"
              placeholder="65"
              value={formData.goalWeight}
              onChange={(e) => updateFormData("goalWeight", e.target.value)}
              className="text-lg p-6"
              autoFocus
              onKeyPress={(e) => e.key === "Enter" && canProceed() && handleNext()}
            />
          </FormStep>
        );

      case 5:
        return (
          <FormStep>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Diyet tercihiniz nedir?</h2>
            <p className="text-muted-foreground mb-6">Beslenme ipuçlarını buna göre özelleştireceğiz</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {dietOptions.map((diet) => (
                <Button
                  key={diet}
                  variant={formData.dietPreference === diet ? "default" : "outline"}
                  className="p-6 text-lg transition-bounce h-auto"
                  onClick={() => {
                    updateFormData("dietPreference", diet);
                    setTimeout(handleNext, 300);
                  }}
                >
                  {diet}
                </Button>
              ))}
            </div>
          </FormStep>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12 shadow-medium">
        <ProgressBar current={currentStep + 1} total={totalSteps} />
        
        <div className="mb-8">
          {renderStep()}
        </div>

        <div className="flex gap-4">
          {currentStep > 0 && (
            <Button
              variant="outline"
              onClick={handleBack}
              className="transition-smooth"
            >
              Geri
            </Button>
          )}
          
          <Button
            onClick={handleNext}
            disabled={!canProceed() || isSubmitting}
            className="ml-auto transition-smooth gradient-primary border-0"
            size="lg"
          >
            {isSubmitting 
              ? "Kaydediliyor..." 
              : currentStep === totalSteps - 1 
                ? "Programımı Oluştur ✨" 
                : "Devam"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
