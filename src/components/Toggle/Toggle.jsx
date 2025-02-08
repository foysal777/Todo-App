import React, { useState } from 'react'
import faqData from "./Data"
import Faq from './Faq';
const Toggle = () => {

const [faq, setFaq] = useState(faqData);
    console.log(faqData);
    return (
        <div>
    <p className='text-center text-2xl text-cyan-400'>FAQ question </p>
            {
                faq.map(faqData =>  <Faq key={faqData.id} faqData={faqData} > </Faq> )
            }
        
        </div>
       

    )
}

export default Toggle