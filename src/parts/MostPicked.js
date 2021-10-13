
import ImageBlueOrigin from 'assets/images/image-mostpicked-1.jpg'
import Button from 'components/Button'

const MostPicked = (props) => {
   return (
      <section className="container" ref={props.refMostPicked}>
         <h4 className="mb-3">Most Picked</h4>
         <div className="container-grid sm">
            {props.data.map((item,index) => {
               return(
                  <div key={`mostpicked-${index}`} className={`item column-4 ${index === 0 ? " row-2" : " row-1"}`}>
                     <div className="card card-featured">
                        <div className="tag">
                           {`$${item.price}`}
                           <span className="fontweight-light">per {item.unit}</span>
                        </div>
                        <figure className="img-wrapper">
                           <img src={`${item.imageUrl}`} alt={item.name} className="img-cover"/>
                        </figure>
                        <div className="meta-wrapper">
                           <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                              <h5>{item.name}</h5>
                           </Button>
                           <div>
                              {item.city},{item.country}
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </section>
   )
}

export default MostPicked
