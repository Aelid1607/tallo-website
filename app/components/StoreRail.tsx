import Image from "next/image";

const STORES = [
  { name: "Coles", src: "/stores/coles.png", w: 760, h: 227 },
  { name: "Woolworths", src: "/stores/woolworths.png", w: 600, h: 150 },
  { name: "Aldi", src: "/stores/aldi.jpg", w: 440, h: 293 },
  { name: "Dan Murphy's", src: "/stores/danmurphys.png", w: 300, h: 140 },
  { name: "Liquorland", src: "/stores/liquorland.jpg", w: 498, h: 115 },
  { name: "BWS", src: "/stores/bws.png", w: 330, h: 126 },
];

export function StoreRail({
  label = "One shop. A clearer picture.",
}: {
  label?: string;
}) {
  return (
    <section className="store-rail" aria-label="Stores compared by Tallo">
      <div className="store-rail-inner">
        <p>{label}</p>
        <div className="store-logos">
          {STORES.map((s) => (
            <div
              key={s.name}
              className={`store-logo-card logo-${s.name.toLowerCase().replace(/[^a-z]/g, "")}`}
            >
              <Image
                src={s.src}
                alt={s.name}
                width={s.w}
                height={s.h}
                loading="eager"
                className="store-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
