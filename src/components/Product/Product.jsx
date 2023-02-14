import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

export const Product = ({ product, path, setProduct }) => {
  console.log(setProduct);
  const location = useLocation();
  console.log(location);
  const { tags, id, previewURL } = product;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{tags}</Card.Subtitle>
        <img src={previewURL} alt="" width="50" />
        {path === '/products' ? (
          <Button onClick={() => setProduct(prev => [...prev, product])}>
            Add Card
          </Button>
        ) : (
          <Button
            onClick={() =>
              setProduct(prev => prev.filter(item => item.id !== id))
            }
          >
            Delate Card
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
