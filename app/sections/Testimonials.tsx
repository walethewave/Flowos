import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mama Put Kitchen",
    location: "Lagos",
    quote: "FlowOS handles 80% of our order DMs. I just confirm and cook.",
    role: "Restaurant Owner",
  },
  {
    name: "Glow Spa",
    location: "Abuja",
    quote: "Booking appointments used to take all morning. Now the AI does it while I sleep.",
    role: "Spa Manager",
  },
  {
    name: "Lekki Fashion Hub",
    location: "Lagos",
    quote: "Customers ask about sizes and prices at midnight. FlowOS replies instantly.",
    role: "Fashion Store Owner",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-deep">Loved by Nigerian Businesses</h2>
          <p className="mt-4 text-gray-600">See what early adopters are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-brand-deep">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role} • {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
