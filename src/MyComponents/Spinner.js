import React, { Component } from 'react'
import loading from './loading .gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='container text-center m-13'>
        <img src={loading} alt="loading.." />
      </div>
    )
  }
}
