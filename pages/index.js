import fs from "fs/promises"
import path from "path"
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home(props) {
  const {products} = props
  return (
    <>
    <div className={styles.main}>
        {products.map(item => (
          <Link href={`/${item.id}`} key={item.id} >
          <p >{item.title} - {item.price}</p>
          
          </Link>
        ))}      
    </div>
          
    </>
  )
}


export async function getStaticProps(){
  const filePath = path.join(process.cwd() , "data" , 'products.json' )

   const jsonData =    await  fs.readFile(filePath)
   const data =  JSON.parse(jsonData)
  return {
    props : {
      // products : [{"id" : "p1" , "title" : "iphone 14" , "price" : "2000"}]
      products : data.products
    }
  }
}