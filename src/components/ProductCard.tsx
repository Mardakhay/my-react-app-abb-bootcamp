export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        margin: '10px',
        borderRadius: '8px',
      }}
    >
      <h3>{product.name}</h3>
      <p>Kateqoriya: {product.category}</p>

      <p>
        Qiymət: <strong>{product.price.toFixed(2)} AZN</strong>
      </p>

      {product.inStock ? (
        <span
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '5px',
            borderRadius: '4px',
          }}
        >
          Stokda var
        </span>
      ) : (
        <span
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '5px',
            borderRadius: '4px',
          }}
        >
          Bitib
        </span>
      )}
    </div>
  );
};

export default ProductCard;