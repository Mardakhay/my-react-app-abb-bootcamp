import '../App.css';
import ProductCard, { type Product } from './ProductCard';

function ProductList() {
  const productsList: Product[] = [
    {
      id: 1,
      name: 'MacBook Air M2',
      price: 2399,
      category: 'Noutbuk',
      inStock: true,
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      price: 2599,
      category: 'Smartfon',
      inStock: false,
    },
    {
      id: 3,
      name: 'AirPods Pro 2',
      price: 549,
      category: 'Qulaqlıq',
      inStock: true,
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      price: 899,
      category: 'Ağıllı Saat',
      inStock: true,
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Apple Məhsulları Kataloqu</h1>
      <p>Cəmi məhsul: {productsList.length}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        {productsList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
