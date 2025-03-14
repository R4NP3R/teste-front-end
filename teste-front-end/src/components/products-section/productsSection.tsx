import './productsSection.scss';

import { useEffect, useState } from "react";
import { Partners } from "./components/partners/partners"
import { ProductFilter } from "./components/product-filter/productFilter"
import { IProductsCarousel, ProductCarousel } from "./components/products-carrousel/productsCarousel";
import { SectionTitle } from "../main/components/sectionTitle/sectionTitle"

interface IProductsSectionProps {
  productFilter: boolean;
  withPartners: boolean;
}

export const ProductsSection = ({productFilter, withPartners}:IProductsSectionProps ) => {
  const [data, setData] = useState<IProductsCarousel>();

  useEffect(() => {
    fetch('/public/celulares.json')
    .then((res) => res.json())
    .then(setData)
  }, [])

  return (
      <section className='products-section'>
        <SectionTitle withBars title='Produtos Relacionados'/>
        {productFilter 
        ? 
        <ProductFilter productType={[{name: 'celular'},{name: 'acessórios'},{name: 'tablets'},{name: 'notebooks'},{name: 'tvs'},{name: 'ver todos'}]}/> 
        :
        <p className="see-all">Ver Todos</p>
        }
        
        
        {data && <ProductCarousel products={data?.products}/>}
        {withPartners 
        && 
        <div className='partners-division'>
        <Partners/>
        <Partners/>
        </div>   
        }     
    </section>
  )
  
}