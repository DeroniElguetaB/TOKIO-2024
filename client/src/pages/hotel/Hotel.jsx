import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotels = () => {
  
  const [slideNumber, setslideNumber] = useState (0)
  const [open, setOpen] = useState (false)

  const photos = [
    { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { src: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { src: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { src: 'https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
  ]

  const handleOpen = (i) => {
    setslideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === 'l'){
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setslideNumber(newSliderNumber)
  }

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        {open && 
          <div className="slider">
            <FontAwesomeIcon 
              icon={faCircleXmark} 
              className='close' 
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon 
              icon={faCircleArrowLeft} 
              className='arrow'
              onClick={() => handleMove('')}
            />
            <div className="sliderWrapper">
              <img 
                src={photos[slideNumber].src} 
                alt="slider" 
                className="sliderImg" 
              />
            </div>
            <FontAwesomeIcon 
              icon={faCircleArrowRight} 
              className='arrow'
              onClick={() => handleMove('r')}
            />
          </div> 
        }     
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotelDistance'>Excellent location - 500m  from center</span>
          <span className="hotelPriceHighLight">Book a stay over $114 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="hotels" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart from Krakow</h1>
              <p className="hotelDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum adipisci, amet provident perferendis molestias magni, commodi dignissimos laborum blanditiis corrupti ut rem nam! Esse vel repellendus sequi doloribus ex! Temporibus illum eum recusandae odit neque quia ex accusamus dolorem consectetur natus, ullam unde quas officiis eos. Officiis, qui facilis fugit omnis quidem ipsa quibusdam reprehenderit adipisci aspernatur alias ducimus excepturi similique recusandae nisi consequatur, debitis sed architecto ut id? Placeat beatae earum quia repellat ut quidem, iure quaerat alias excepturi consequuntur quo in id iusto voluptatem error mollitia quibusdam cum fuga aperiam adipisci doloremque totam optio hic. Maiores, quae?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for 9-night stay!</h1>
              <span>Located in the real heart from Krakow, this property has a excellent location score of 9.8!</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotels
