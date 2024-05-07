import React, { Component } from 'react'
import loading from './Search.gif'
export default class Spinnner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
