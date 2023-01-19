import fs from "fs/promises"
import path from "path"

const DetailsProducts = (props) => {

      const {product } = props
      if(!product) {
            return <p>Loading...</p>
      }
  return (
    <>
      <h2 >
        {product.title} - {product.price}
      </h2>
    </>
  );
};

export async function getStaticProps(context) {
            const {params} = context
            const  productId = params.pid
            const filePath = path.join(process.cwd() , "data" , 'products.json' )

      const jsonData =    await  fs.readFile(filePath)
      const data =  JSON.parse(jsonData);
      const product =  data.products.find(item => item.id === productId)
      return {
      props : {
            product  
      }
  }
}
export async function getStaticPaths() {
      return {
            paths : [
                  {params : {pid : "p1"}},
               
            ] ,
            fallback : true
      }
}
export default DetailsProducts;
