import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'

import Button from 'components/Button'

import formatNumber from 'utils/FormatNumber'

export default function Hero(props) {

   const showMostPicked = () => {
      console.log("YOU CLICK ME DUDE")
      window.scrollTo({
         top: props.refMostPicked.current.offsetTop - 30,
         behavior: 'smooth'
      })
   }

   return (
      <section className="container pt-4">
         <div className="row align-items-center">
            <div className="col-auto pr-2" style={{width: 470}}>
               <h1 className="font-weight-bold line-height-1 mb-3">
                  Forget Busy Work, <br/>
                  Start Next Vacation
               </h1>
               <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:'170%'}}>
                  We provide what you need to enjoy your holiday with family.
                  Time to make another memorable moments.
               </p>
               <Button className="btn px-5" type="link" href="/" hasShadow isPrimary onClick={showMostPicked}>
                  Show Me Now
               </Button>

               <div className="row mt-4">
                  <div className="col auto">
                     <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
                     <h6 className="mt-3">
                        {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                     </h6>
                  </div>
                  <div className="col auto" style={{marginLeft: 5}}>
                     <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasure`}/>
                     <h6 className="mt-3">
                        {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                     </h6>
                  </div>
                  <div className="col auto" style={{marginLeft: 5}}>
                     <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`}/>
                     <h6 className="mt-3">
                        {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                     </h6>
                  </div>
               </div>
            </div>
            <div className="col-auto">
               <div style={{width: 460,height: 410}}>
                  <img src={ImageHero} className="img-fluid position-absolute mt-4" alt="Room with couches" style={{top:'0',right:'0', bottom: '0',left: '10px',zIndex: 5 }}/>
                  <img src={ImageHeroFrame} className="img-fluid position-absolute" alt="Room with couches frame" style={{top:'20x',right:'0',bottom: '-25px',left: '30px'}}/>
               </div>
            </div>
         </div>
      </section>
   )
}
