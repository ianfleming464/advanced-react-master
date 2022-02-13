import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title />
    </ItemStyles>
  );
}
