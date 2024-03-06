import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO description',
 keywords: ['About Page', 'Viviana', 'Informacion', '...']
};

export default function AboutPage(){
    return (
        <>
          <span className="text-7xl">About Page</span>  
        </>
    )
}