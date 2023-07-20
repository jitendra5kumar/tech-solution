import './carousel.css'
// import Avatar1 from 'https://images.pexels.com/photos/3660654/pexels-photo-3660654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// import Avatar2 from 'https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// import Avatar3 from 'https://images.pexels.com/photos/10050900/pexels-photo-10050900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// import Avatar4 from 'https://images.pexels.com/photos/7713516/pexels-photo-7713516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {AiFillStar} from "react-icons/ai"
// import required modules
// import { Pagination } from 'swiper/modules';
const Carousel = () => {

  const data = [
    {
      avatar: 'https://images.pexels.com/photos/3660654/pexels-photo-3660654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Tina Shaw',
      company: 'Microsoft',
     
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
    },
    {
      avatar: 'https://images.pexels.com/photos/3761504/pexels-photo-3761504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Shatta Wale',
      company: 'Microsoft',
  
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
    },
    {
      avatar: 'https://images.pexels.com/photos/10050900/pexels-photo-10050900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Kwame Despite',
      company: 'Microsoft',
    
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
    },
    {
      avatar: 'https://images.pexels.com/photos/7713516/pexels-photo-7713516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Nana Ama McBrown',
      company: 'Microsoft',
    
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae culpa dolorem error eum, expedita illo laboriosam magni mollitia perferendis provident quae quaerat quidem quod sint? Consectetur minima necessitatibus quam?'
    }
  ]

  return (
    <section id={"testimonials"}>

      <Swiper
        className={"container testimonials__container mySwiper"}
        // modules={[Pagination]}
        // spaceBetween={40}
        // slidesPerView={1}
        // // pagination={{clickable: true}}

        // // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
      // modules={[Pagination]}
      // className="mySwiper"
      >

        {data.map(({ avatar, name, company, review }, index) => {
          return (
            <SwiperSlide key={index} className={"testimonial"}>
              <div className={"client__avatar"}>
                <img src={avatar} alt={"Client "} />
                <div className="client_ncs">

                  <h2 className={"client__name"}>{name}</h2>
                  <p className={"client_company"}>{company}</p>
                  <p className="client_star">
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                  </p>
                </div>
              </div>
              <small className={"client__review"}>{review}</small>
            </SwiperSlide>
          )
        })}



      </Swiper>

    </section>
  )
}

export default Carousel