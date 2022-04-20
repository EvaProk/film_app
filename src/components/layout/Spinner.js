import React, {Fragment} from 'react'
import spinnerFilms from "./spinnerFilms.gif"

 const Spinner = () => {
  return (
    <Fragment>
      <img src={spinnerFilms} style={{width: "200px", margin: "auto", display: "block"}} alt="Loading ..."/>
    </Fragment>
  )
}
export default Spinner;