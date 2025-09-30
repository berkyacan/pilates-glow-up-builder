import { useLocation, useNavigate } from "react-router-dom";
import { FormData } from "@/types/form";
import { generatePilatesPlan } from "@/utils/pilatesPlanGenerator";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state as FormData;

  if (!formData) {
    navigate("/");
    return null;
  }

  const { days, nutritionTip, groceryList } = generatePilatesPlan(formData);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ✨ Your Free 7-Day At-Home Pilates Plan
          </h1>
          <p className="text-xl text-muted-foreground">
            Personalized for {formData.name}
          </p>
        </div>

        {/* Daily Workouts */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl font-bold mb-6">Your Week of Transformation</h2>
          {days.map((day, index) => (
            <Card
              key={day.day}
              className="p-6 shadow-medium hover:shadow-lg transition-smooth animate-in fade-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    Day {day.day}: {day.focus}
                  </h3>
                  <p className="text-muted-foreground">{day.duration}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-secondary mb-2">Warm-Up</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {day.warmup.map((item, i) => (
                      <li key={i} className="text-foreground/80">{item}</li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-primary mb-3">Main Exercises</h4>
                  <div className="space-y-3">
                    {day.exercises.map((exercise, i) => (
                      <div key={i} className="pl-4 border-l-2 border-primary/30">
                        <h5 className="font-semibold">{exercise.name}</h5>
                        <p className="text-sm text-secondary">{exercise.reps}</p>
                        <p className="text-sm text-muted-foreground">{exercise.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold text-accent mb-2">Cool Down</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {day.cooldown.map((item, i) => (
                      <li key={i} className="text-foreground/80">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Nutrition Tip */}
        <Card className="p-6 mb-8 shadow-medium gradient-secondary animate-in fade-in slide-in-from-left duration-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🥗 Nutrition Alignment for Your {formData.dietPreference} Diet
          </h2>
          <p className="text-foreground/90 leading-relaxed">{nutritionTip}</p>
        </Card>

        {/* Grocery List */}
        <Card className="p-6 mb-8 shadow-medium animate-in fade-in slide-in-from-right duration-700">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🛒 Your Weekly Grocery List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {groceryList.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-8 shadow-medium gradient-accent text-white text-center animate-in fade-in zoom-in duration-700">
          <h2 className="text-2xl font-bold mb-4">
            👉 {formData.name}, this 1-week plan is just the beginning!
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Want a fully customized Pilates + nutrition plan designed specifically for your goals?
            <br />
            We'll reach out to you at <span className="font-semibold">{formData.phone}</span>
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/")}
            className="font-semibold"
          >
            Create Another Plan
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Results;
