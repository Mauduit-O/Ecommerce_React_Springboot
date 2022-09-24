import { useEffect, useState } from 'react';
import CardProduct from '../../component/cardProduct/CardProduct';
import * as Styled from '../productsPage/StyledProductsPage';
import { Product } from '../../interface/ProductInterface';
import { useGetProductsAll } from '../../hooks/useGetProductsAll';

interface ProductsProps {
  searchTerm: string
}

export default function Search(props: ProductsProps): JSX.Element {
  const {searchTerm} = props;

  const [products, setProducts] = useState<Product[]>([]);
  const [searchedProduct, setSearchedProduct] = useState<Product[]>([]);
  const getProducts = useGetProductsAll();

  const resultSearchProduct = () => {
    if(searchTerm === "") {
      setSearchedProduct(products)
    } else {
      setSearchedProduct(products.filter((product) => product.title.toLowerCase().includes(searchTerm)));
    }
  }

  useEffect(() => {
    resultSearchProduct();
  }, [searchTerm, products])

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    })
  }, [])
  

  return (
    <>
      <Styled.Container>
        {searchedProduct.map((product )=>(
          <CardProduct key={product.id} title={product.title} price={product.price} image={product.image} souscat={product.id_subcategory.title} />
        ))} 
      </Styled.Container>
    </>
  )
}
