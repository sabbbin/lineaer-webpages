import Link from 'next/link';
import React from 'react';
import { Container } from './container';

interface IFooter {
  children: React.ReactNode;
}

const FooterLinks=[
  {
    title:'Product',
    links:[ 
      {title:'Feature', href:'#'},
      {title:'Feature', href:'#'},
      {title:'Feature', href:'#'},
      {title:'Feature', href:'#'},
      {title:'Feature', href:'#'},
      {title:'Feature', href:'#'},
      {title:'Feature', href:'#'},
  
  ]
  },
  {
    title:'Company',
    links:[
      {title:'Integration', href:'#'},
      {title:'Integration', href:'#'},
      {title:'Integration', href:'#'},
      {title:'Integration', href:'#'},
      {title:'Integration', href:'#'},
      {title:'Integration', href:'#'},
      {title:'Integration', href:'#'},
    ]
  }
]

export default function Footer() {
  return  <footer className='mt-12 border-t border-white-a08 py-[5.6rem] text-sm'>

    <Container className='flex flex-col md:flex-row  justify-between '>
      <div>

       <div className='flex  h-full justify-between md:flex-col  flex-row '>
         <div> linear page</div>
         <div className='mt-auto'> logo image</div>
      </div>
      </div>
       <div className='flex '>
 {
  FooterLinks?.map((footerlink,key)=>{
    return  <div key={key} className='min-w-[18rem] mt-6'>
       <h4 className='mb-3 font-medium
       '> {footerlink.title}</h4>
         <ul>

        {footerlink?.links.map((link,ind)=>(
          <li key={ind} className="[&_a]:last:mb-0"> 
          <Link href={link
          .href
          } className='text-gray block mb-3'> {link.title} </Link>
          </li>
          ))}
          </ul>
       </div>
  })
 }
       </div>
      </Container>;
  </footer>
}
