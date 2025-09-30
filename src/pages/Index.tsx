import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormStep } from "@/components/FormStep";
import { ProgressBar } from "@/components/ProgressBar";
import { FormData, dietOptions } from "@/types/form";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
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

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate("/results", { state: formData });
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's your name?</h2>
            <p className="text-muted-foreground mb-6">Let's personalize your Pilates journey</p>
            <Input
              type="text"
              placeholder="Enter your name"
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
              Great, {formData.name}! What's your phone number?
            </h2>
            <p className="text-muted-foreground mb-6">So we can send you personalized tips</p>
            <Input
              type="tel"
              placeholder="(555) 123-4567"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's your current weight?</h2>
            <p className="text-muted-foreground mb-6">In pounds (lbs)</p>
            <Input
              type="number"
              placeholder="150"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How tall are you?</h2>
            <p className="text-muted-foreground mb-6">In inches (e.g., 5'6" = 66 inches)</p>
            <Input
              type="number"
              placeholder="66"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's your goal weight?</h2>
            <p className="text-muted-foreground mb-6">In pounds (lbs)</p>
            <Input
              type="number"
              placeholder="140"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's your diet preference?</h2>
            <p className="text-muted-foreground mb-6">We'll tailor nutrition tips to match</p>
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
              Back
            </Button>
          )}
          
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="ml-auto transition-smooth gradient-primary border-0"
            size="lg"
          >
            {currentStep === totalSteps - 1 ? "Generate My Plan ✨" : "Continue"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
