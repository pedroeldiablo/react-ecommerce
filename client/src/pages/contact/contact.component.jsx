import React from 'react';

import SimpleSlider from '../../components/simple-slider/simple-slider.component';


import './contact.styles.scss';

const ContactPage = () => {
  
    
    return (

    <div className="contact-page">
        <h2 className='title'>Contact</h2> 
        <SimpleSlider />  
        <p>Taking the ecommerce project from course <a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/">Complete React Developer Zero to Mastery/</a> as a starting point this project explores some of the structured approaches to building a complex app with react.</p>
        <p>For more projects to get in touch visit <a href="http://www.peternicholaswilliams.com/">www.peternicholaswilliams.com/</a></p>
        <p>Or see <a href="https://github.com/pedroeldiablo/react-ecommerce">Github</a> to see how it's coded.</p>
    </div>

)
}



export default ContactPage;
