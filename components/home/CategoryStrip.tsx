import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "Rings",
    href: "/shop?category=rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=85&fit=crop",
  },
  {
    label: "Earrings",
    href: "/shop?category=earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&fit=crop",
  },
  {
    label: "Necklaces",
    href: "/shop?category=necklaces",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85&fit=crop",
  },
  {
    label: "Bracelets",
    href: "/shop?category=bracelets",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94815b5?w=600&q=85&fit=crop",
  },
];

export default function CategoryStrip() {
  return (
    <section className="bg-cream">
      <div className="grid grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="group relative overflow-hidden aspect-square"
          >
            <Image
              src={cat.image}
              alt={cat.label}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              sizes="25vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/40 transition-colors duration-500" />
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cream font-serif text-xl lg:text-2xl italic tracking-wide drop-shadow-lg">
                {cat.label}
              </span>
            </div>
            {/* Bottom border accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        ))}
      </div>
    </section>
  );
}
