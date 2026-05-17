import { MessageSquare, ShoppingCart, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Auto-Reply",
    description: "Handles FAQs, product questions, and chit-chat automatically. Your customers get instant responses 24/7.",
  },
  {
    icon: ShoppingCart,
    title: "Order Collection",
    description: "Customers place orders via chat. AI captures items, delivery address, and confirms — no human needed.",
  },
  {
    icon: Users,
    title: "Human Handoff",
    description: "Complex issues auto-escalate to your team in a unified inbox. Never miss an important conversation.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep">Everything Your Business Needs</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            FlowOS is an AI-powered customer engagement platform for Nigerian SMEs. One tool to handle all your customer conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
