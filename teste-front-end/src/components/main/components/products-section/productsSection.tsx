import './productsSection.scss';

import { useEffect, useState } from "react";
import { Partners } from "../partners/partners"
import { ProductFilter } from "../product-filter/productFilter"
import { IProductsCarousel, ProductCarousel } from "../productsCarrousel/productsCarousel";
import { SectionTitle } from "../sectionTitle/sectionTitle"

interface IProductsSectionProps {
  productFilter: boolean;
}

export const ProductsSection = ({productFilter}:IProductsSectionProps ) => {
  const [data, setData] = useState<IProductsCarousel>();

  useEffect(() => {
    fetch('../../../celulares.json')
    .then((res) => res.json())
    .then(setData)
  }, [])

  return (
      <section className='products-section'>
        <SectionTitle title='Produtos Relacionados'/>
        {productFilter 
        ? 
        <ProductFilter productType={[{name: 'celular'},{name: 'acessórios'},{name: 'tablets'},{name: 'notebooks'},{name: 'tvs'},{name: 'ver todos'}]}/> 
        :
        <p className="see-all">Ver Todos</p>
        }
        
        
        {data && <ProductCarousel products={data?.products}/>}
        <div className='partners-division'>
        <Partners/>
        <Partners/>
        </div>        
    </section>
  )
  
}