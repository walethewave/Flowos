import { Link, Upload, Bot, CheckCircle } from "lucide-react";

const steps = [
  { icon: Link, title: "Connect WhatsApp", desc: "Link your business number in 2 minutes" },
  { icon: Upload, title: "Upload Products", desc: "Add your menu/catalog via Excel or text" },
  { icon: Bot, title: "AI Takes Over", desc: "Bot starts answering customers instantly" },
  { icon: CheckCircle, title: "Confirm Orders", desc: "You get alerts, confirm with one tap, AI notifies customer" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep">Go Live in 10 Minutes</h2>
          <p className="mt-4 text-gray-600">Four simple steps to automate your customer conversations</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200" />
              )}
              <div className="w-20 h-20 mx-auto bg-brand-deep rounded-full flex items-center justify-center mb-4 relative z-10">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <span className="inline-block text-xs font-bold text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full mb-2">
                Step {i + 1}
              </span>
              <h3 className="text-lg font-bold text-brand-deep">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
