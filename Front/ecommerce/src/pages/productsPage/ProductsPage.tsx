import { useEffect, useState } from 'react';
import CardProduct from '../../component/cardProduct/CardProduct';
import * as Styled from './StyledProductsPage';
import { useParams } from "react-router-dom";
import { SelectSubCategory } from '../../component/select/Select';
import { useGetSubcategory } from '../../hooks/useGetSubcategory';
import { Subcategory } from '../../interface/SubcategoryInterface';
import { useGetProducts } from '../../hooks/useGetProducts';
import { Product } from '../../interface/ProductInterface';
import { Option } from '../../interface/OptionInterface';

export default function ProductsPage(): JSX.Element {

  const [options, setOptions] = useState<[{}]>([{}]);
  const [subcategorys, setSubcategorys] = useState<Subcategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Option[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const getSubcategory = useGetSubcategory();
  const getProducts = useGetProducts();

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
    })
  }, [])
  
  useEffect(() => {
    getSubcategory().then(data => {
      setSubcategorys(data)
    })
  }, [])

  function getOptions() {
    subcategorys.map((subcategory) => {
      options.push({
        value: subcategory.id, 
        label: subcategory.title,
        color: "#0B7698",
      }) 
      setOptions(options)
    })
  }

  useEffect(() => {
    getOptions()
  }, [subcategorys])

  const handleChange = (selectedOption: any) => {
    setFilters(selectedOption)
  };

  const filterProducts = () => {
    if(filters.length===0) {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => filters.findIndex((filter) => filter.label === product.id_subcategory.title) !== -1))
    }
  }

  useEffect (() => {
    filterProducts()
  }, [filters])

  return (
    <>
      <SelectSubCategory 
        options={options}
        handleChange={handleChange}
      />
      <Styled.Container>
        {filteredProducts.map((product )=>(
          <CardProduct key={product.id} title={product.title} price={product.price} image={product.image} souscat={product.id_subcategory.title} />
        ))} 
      </Styled.Container>
    </>
  )
}
