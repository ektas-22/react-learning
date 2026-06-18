import ContactCard from './ContactCard';
import '../../styles/contactcard.css';
import mrWhiskerson from '../../assets/whiskerson.jpg';
import fluffykins from '../../assets/fluffikins.jpg'
import felix from '../../assets/felix.jpg'
import pumpkin from '../../assets/pumpkin.jpg';

function Contact() {
  return (
    <div className='contacts'>
      <ContactCard 
      img={mrWhiskerson}
      name = "Mr. Whiskerson"
      phone="(212) 555-1234"
      email = "mr.whiskaz@catnap.meow"/>
      <ContactCard
      img ={fluffykins}
      name="Mr. Fluffykins"
      phone="(212) 555-2345"
      email="fluff@me.com"
      />
      <ContactCard
       img ={felix}
      name="Felix"
      phone="(212) 555-4567"
      email="thecat@hotmail.com"
      />
      <ContactCard
       img ={pumpkin}
      name="Pumpkin"
      phone="(0800) CAT KING"
      email="pumpkin@scrimba.com"
      />
    </div>
  )
}

export default Contact
