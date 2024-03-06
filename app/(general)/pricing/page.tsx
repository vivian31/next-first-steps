import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Esta es la pagina de precios de mi servicio',
 keywords: ['Pricing Page', 'Viviana', 'Informacion del pricing', '...']
};

export default function PricingPage(){
    return (
        <>
          <span className="text-7xl">Pricing Page</span>  
        </>
    )
}