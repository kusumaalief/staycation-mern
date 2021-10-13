import Button from "components/Button"

const Categories = ({data}) => {
   
   return (
      data.map((category,index1) =>{
         return(
               <section className="container" key={`category-${index1}`}>
                  <h4 className="mb3 font-weight-medium">
                     {category.name}
                  </h4>
                  <div className="container-grid">
                     {
                        category.items.length === 0 ? <div className="row">
                           <div className="col-auto  align-items-center">
                              There is no property in this category.
                           </div>
                        </div> : category.items.map((item,index2) => {
                           return (
                              <div className="item column-3 row-1" key={`item-category-${index2}`}>
                                 <div className="card item-category">
                                    { item.isPopular &&
                                       <div className="tag">
                                          Popular <span className="font-weight-light">choice</span>
                                       </div>
                                    }
                                    <figure className="img-wrapper" style={{height: "180px"}}>
                                       <img src={item.imageUrl} alt={item.name}/>
                                    </figure>                       
                                    <div className="meta-wrapper">
                                       <Button href={`/properties/${item._id}`} type="link" className="stretched-link d-block">
                                          <h5 className="h4">{item.name}</h5>
                                       </Button>
                                       <span>
                                          {`${item.city}, ${item.country}`}
                                       </span>
                                    </div>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </div>
               </section>
               
         )
      })
   )
}

export default Categories
