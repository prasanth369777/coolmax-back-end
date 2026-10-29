
import Shop from './Shop';

export default function NewArrivals({ products = [], onAdd }) {
  const fresh = products.filter(
    (product) =>
      String(product.tag || '').toUpperCase() === 'NEW'
  );

  const newArrivals = fresh.length > 0
    ? fresh
    : products.slice(-4).reverse();

  return (
    <Shop
      products={newArrivals}
      onAdd={onAdd}
      title="New Arrivals"
      subtitle="Discover the latest in premium scenting. Explore fresh designs for homes, cars, and commercial spaces."
    />
  );
}
