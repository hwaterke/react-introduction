import React from 'react'
import {BoxContainer} from './BoxContainer'
import {Header} from './Header'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="boxes">
          <BoxContainer title="Hello" />
          <BoxContainer title="World" />
          <BoxContainer title="Last box" />
        </div>
      </div>
    )
  }
}
