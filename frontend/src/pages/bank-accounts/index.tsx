import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../../layout"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        MY BANK ACCOUNTS AND E-WALLETS
      </div>

      <div className=" grid grid-cols-4 gap-6">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-600">
          <StaticImage width={300} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className=" object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">stk</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">Vietcombank</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-600">
          <StaticImage width={300} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className=" object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-600">
          <StaticImage width={300} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className=" object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-slate-600">
          <StaticImage width={300} src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className=" object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>


      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bank accounts Page</title>
