import React from 'react';
import './agriproduct.styles.css'
import { Link } from 'react-router-dom';

export default function Products({ data }) {
  return (
    <div className="card dib bw3 pa3 flex flexDirection row mg2 br3 bg-lightest-green shadow-2xl grow">
      <div className='container justify-between'>
     <Link style={{ textDecoration: "none"}} to='/' className="" > 
      <img className="w-16 md:w-32 lg:w-48" src={data.image} alt={data.url} />
      <div>
          <h2 style={{  fontSize: '20px' }} className="sm tc no-underline">{data.name}</h2>
        </div>
      </Link>
      </div>
    </div>
  //     {/* <article class="mw5 center bg-white br3 pa3 pa4-ns shadow-5 grow mv3 ba b--black-10">
  //       <div className="grid max-w-none grid-cols-2 gap-3 tc place-content-center h-48">
  //     <a href={`{$data.url}`}>
  //       <img src={data.image} alt="" />
  //       <div>
  //         <a className="no-underline" href={`${data.url}`}>
  //           <h2 className='tc'>{data.name}</h2>
  //       </a>
  //       </div>
  //         </a>
  //       </div>
        
  //     </article> */}
  //     {/* <article class="br2 ba dark-gray space-around b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
  //     <a href={`{$data.url}`}>   
  //     <img src={data.image} class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
  //   <div class="pa2 ph3-ns pb3-ns">
  //     <div class="dt w-100 mt1">
  //       <div class="dtc">
  //                 <h1 class="f5 tc f4-ns mv0">{data.name}</h1>
  //       </div>
  //     </div>
  //   </div>
  //     </a> 
  // </article>
  //     </div> */}
  )
}
