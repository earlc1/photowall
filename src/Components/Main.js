import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Link, Route} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    // Enables saving of changed state, such as photo add/delete.  Initial data state is empty.
    constructor(props) {
        super(props)
        console.log('Main constructor()')
    }

    render() {
        console.log('Main render()')
        console.log('Main render() props: ' + this.props)
        return  <div>
                      <h1>
                        <Link to="/">Fotomural</Link>
                      </h1>
                      {/*Use render if multiple components enclosed for given url. Display
                       Photo Wall if exactly at given path, otherwise multiple pages show up at once.*/}
                       <Route exact path='/' render={() => (
                            <div>
                                {/*Inject posts into Main and pass down array of posts as props using ES6 spread.
                                   Spread operator passes all posts and dispatches and breaks them out of the
                                   array into individual elements*/}
                                <PhotoWall {...this.props}/>
                            </div>
                        )}/>

                        {/* Use component when rendering single component only
                            The $ indicates an embedded JavaScript expression*/}
                        {<Route path='/AddPhoto' render={({history}) => (
                            <AddPhoto {...this.props} onHistory={history}/>
                        )}/>}
                        {/* - Back ticks make a template string.  params has the URL passed in as param.
                              params also contains history prop
                            - Pass arguments in this order to prevent props match obj over-riding params match obj*/}
                        <Route path='/single/:id' render = {
                                (params) => (
                                    <Single {...this.props} {...params}/>
                                )
                            }/>
                    </div>
    }  // render
}

export default Main