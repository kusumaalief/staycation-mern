import React,{ Component } from 'react'

import Button from 'components/Button'
import Header from 'parts/Header'

export default class LandingPages extends Component {
   render(){
      console.log(this.props)
      return(
         <>
            <Header {...this.props}></Header>
         </>
      )
   }
}
