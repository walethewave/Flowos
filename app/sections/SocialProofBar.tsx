const items = [
  "Mama Put Kitchens",
  "Fashion Boutiques",
  "Clinics & Hospitals",
  "Hair Salons",
  "Supermarkets",
  "Logistics Companies",
  "Pharmacies",
  "Restaurants",
  "Tailors & Designers",
  "Event Planners",
];

export default function SocialProofBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-brand-dark border-y border-white/5 py-4 overflow-hidden group">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm text-white/50 font-medium shrink-0">
            <span className="w-1 h-1 bg-brand-accent rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
