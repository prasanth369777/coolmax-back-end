
import { Heart, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useState } from "react";

// Format product prices in AED.
// Products without a fixed price display "Request a quote".
export const money = (value) => {
  if (value === null || value === undefined || value === "") {
    return "Request a quote";
  }

  const amount = Number(value);

  if (!Number.isFinite(amount)) {
    return "Request a quote";
  }

  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 2,
  }).format(amount);
};

export default function ProductCard({ product, onAdd }) {
  const [saved, setSaved] = useState(false);

  if (!product) return null;

  const name = product.name || product.title || "Scenting Solution";
  const image = product.image || product.thumbnail || "";
  const category = product.category || "Professional Scenting";
  const description =
    product.shortDescription ||
    product.description ||
    "A refined scenting solution for your space.";

  const hasPrice =
    product.price !== null &&
    product.price !== undefined &&
    product.price !== "" &&
    Number.isFinite(Number(product.price));

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e8e4da] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#d1c6ac] hover:shadow-[0_18px_40px_rgba(23,61,43,0.08)]">
      {/* Product image */}
      <div className="relative aspect-[4/4.1] overflow-hidden bg-[#f6f5f0] p-5 sm:p-6">
        <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/80" />

        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="relative z-[1] h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.045]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#a59b82]">
            <ShoppingBag size={38} strokeWidth={1.1} />
          </div>
        )}

        {product.tag && (
          <span className="absolute left-4 top-4 z-[2] border border-[#e6ddc9] bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#80683d]">
            {product.tag}
          </span>
        )}

        <button
          type="button"
          aria-label={saved ? `Remove ${name} from wishlist` : `Save ${name} to wishlist`}
          aria-pressed={saved}
          onClick={() => setSaved((current) => !current)}
          className={`absolute right-4 top-4 z-[2] flex h-9 w-9 items-center justify-center rounded-full border transition duration-300 ${
            saved
              ? "border-[#173d2b] bg-[#173d2b] text-white"
              : "border-[#e5e1d7] bg-white/95 text-[#173d2b] hover:border-[#173d2b]"
          }`}
        >
          <Heart
            size={16}
            strokeWidth={1.7}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#a1844f]">
          {category}
        </p>

        <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-medium leading-snug tracking-[-0.02em] text-[#173d2b] sm:text-base">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-[11px] leading-[1.8] text-[#7c8176]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#efede6] pt-3">
          <strong className="text-xs font-semibold text-[#173d2b] sm:text-sm">
            {hasPrice ? money(product.price) : "Request a quote"}
          </strong>

          <span className="text-[9px] uppercase tracking-[0.08em] text-[#99998b]">
            {hasPrice ? "Price listed" : "Custom quotation"}
          </span>
        </div>

        {/* Actions */}
        <button
          type="button"
          onClick={() => onAdd?.(product)}
          className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#173d2b] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-[#28563d]"
        >
          {hasPrice ? "Quick add" : "Enquire about product"}
          <ArrowUpRight size={15} strokeWidth={1.7} />
        </button>
      </div>
    </article>
  );
}
