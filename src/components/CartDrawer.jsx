
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { money } from "./ProductCard";

const formatPrice = (price) => {
  if (price == null || price === "") return "Request a quote";
  return money(Number(price));
};

export default function CartDrawer({
  open,
  onClose,
  cart = [],
  onQty,
  onRemove,
}) {
  const itemCount = cart.reduce(
    (sum, item) => sum + (Number(item.qty) || 0),
    0
  );

  const subtotal = cart.reduce((sum, item) => {
    const price = Number(item.price);
    const qty = Number(item.qty) || 0;

    return sum + (Number.isFinite(price) ? price * qty : 0);
  }, 0);

  const hasQuoteItems = cart.some(
    (item) => item.price == null || item.price === ""
  );

  const hasPricedItems = cart.some(
    (item) => item.price != null && item.price !== ""
  );

  if (!open) return null;

  const handleCheckout = () => {
    const lines = cart.map((item) => {
      const price =
        item.price == null || item.price === ""
          ? "Request a quote"
          : formatPrice(item.price);

      return `${item.name} × ${item.qty} — ${price}`;
    });

    const message = [
      "Hello Cool Max Scent, I would like to enquire about these products:",
      "",
      ...lines,
      "",
      `Subtotal for priced items: ${formatPrice(subtotal)}`,
      hasQuoteItems
        ? "Please provide a quotation for products without listed prices."
        : "",
      "Please share availability, delivery details and the next steps.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappNumber = "97466043446";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-end bg-[#10251a]/55 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className="flex h-full w-full max-w-[460px] flex-col border-l border-[#e9e3d6] bg-[#fbfaf7] text-[#173d2b] shadow-2xl"
        style={{
          fontFamily: "Poppins, sans-serif",
          animation: "coolmax-cart-in 280ms ease-out",
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e9e5db] px-5 py-5 sm:px-7">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#a1844f]">
              COOL MAX SCENT
            </p>

            <h2 className="mt-1.5 text-xl font-medium tracking-tight">
              Your selection{" "}
              <span className="text-sm font-normal text-[#898e82]">
                ({itemCount})
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e1d7] bg-white transition hover:border-[#173d2b] hover:bg-[#173d2b] hover:text-white"
          >
            <X size={18} strokeWidth={1.7} />
          </button>
        </header>

        {/* Empty cart */}
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#e4dfd2] bg-[#f2f0e8] text-[#a1844f]">
              <ShoppingBag size={30} strokeWidth={1.2} />
            </div>

            <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#a1844f]">
              Your bag is waiting
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-tight">
              Discover your signature scent.
            </h3>

            <p className="mt-3 max-w-[270px] text-xs leading-6 text-[#777f73]">
              Explore our professional aroma diffusers and find a scenting
              solution for your space.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 inline-flex items-center gap-3 bg-[#173d2b] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#28563d]"
            >
              Continue shopping <ArrowRight size={15} />
            </button>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-5 py-3 sm:px-7">
              <p className="border-b border-[#e9e5db] py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#929588]">
                Selected products
              </p>

              <div className="divide-y divide-[#e9e5db]">
                {cart.map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-3 py-5 sm:gap-4"
                  >
                    <div className="flex h-[104px] w-[94px] shrink-0 items-center justify-center overflow-hidden border border-[#ebe7dc] bg-[#f3f1eb] p-2">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <ShoppingBag
                          size={25}
                          className="text-[#b0a88f]"
                        />
                      )}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#a1844f]">
                            {item.category || "Scenting System"}
                          </p>

                          <h3 className="mt-1.5 text-sm font-medium leading-5">
                            {item.name}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemove(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="shrink-0 p-1.5 text-[#999b8f] transition hover:bg-[#f5e9e5] hover:text-[#a24d45]"
                        >
                          <Trash2 size={15} strokeWidth={1.6} />
                        </button>
                      </div>

                      <p className="mt-2 text-xs font-semibold text-[#173d2b]">
                        {formatPrice(item.price)}
                      </p>

                      <div className="mt-auto flex items-end justify-between pt-3">
                        <div className="flex h-8 items-center border border-[#e1ded3] bg-white">
                          <button
                            type="button"
                            onClick={() => onQty(item.id, -1)}
                            aria-label={`Decrease ${item.name} quantity`}
                            disabled={item.qty <= 1}
                            className="flex h-full w-8 items-center justify-center transition hover:bg-[#eeeee6] disabled:cursor-not-allowed disabled:opacity-35"
                          >
                            <Minus size={12} />
                          </button>

                          <span className="min-w-7 text-center text-xs tabular-nums">
                            {item.qty}
                          </span>

                          <button
                            type="button"
                            onClick={() => onQty(item.id, 1)}
                            aria-label={`Increase ${item.name} quantity`}
                            className="flex h-full w-8 items-center justify-center transition hover:bg-[#eeeee6]"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <span className="max-w-[120px] text-right text-[10px] leading-4 text-[#81877b]">
                          {item.price == null || item.price === ""
                            ? "Quote required"
                            : `Total: ${formatPrice(
                                Number(item.price) * item.qty
                              )}`}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Summary */}
            <footer className="border-t border-[#e6e1d5] bg-white px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-[#747d71]">
                  Subtotal for priced items
                </span>

                <strong className="text-lg font-medium tracking-tight">
                  {formatPrice(subtotal)}
                </strong>
              </div>

              {hasQuoteItems && (
                <div className="mt-4 border border-[#e7dfca] bg-[#faf7ee] px-3.5 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8c7141]">
                    Custom quotation required
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-[#74776a]">
                    Some selected products do not have fixed prices. Contact
                    our team for a quotation.
                  </p>
                </div>
              )}

              <p className="mt-3 text-[10px] leading-5 text-[#929589]">
                Delivery charges and final pricing will be confirmed by our
                team.
              </p>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-5 flex min-h-12 w-full items-center justify-center gap-3 bg-[#173d2b] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#28563d]"
              >
                {hasQuoteItems
                  ? "Request a quotation"
                  : "Continue to enquiry"}
                <ArrowRight size={15} />
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-[#858b7f]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#80966e]" />
                Direct assistance from Cool Max Scent
              </div>
            </footer>
          </>
        )}
      </aside>

      <style>{`
        @keyframes coolmax-cart-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
