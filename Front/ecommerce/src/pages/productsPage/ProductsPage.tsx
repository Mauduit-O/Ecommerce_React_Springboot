import CardProduct from '../../component/cardProduct/CardProduct';
import { SelectSubCat } from '../../component/select/Select';
import * as Styled from './StyledProductsPage';

export default function ProductsPage() {
  return (
    <>
      <SelectSubCat options={[]} value={null}></SelectSubCat>

      <Styled.Container>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Styled.Container>
    </>
  )
}
