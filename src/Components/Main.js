import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    // Enables saving of changed state, such as photo add/delete.  Initial data state is empty.
    constructor(props) {
        super(props)
        this.state = {
            posts: [{
                id: "0",
                description: "Black Top and Jeans",
                imageLink: "https://img.shein.com/images/shein.com/201702/eb/14881851878507360806.jpg"
            }, {
                id: "1",
                description: "All Dressed Up",
                imageLink: "http://3.bp.blogspot.com/-0JFA8W3lvdg/T5VHZBEnEEI/AAAAAAAAAFQ/-KQT5YvoQWo/s1600/DSCF4976.jpg"
            }, {
                id: "2",
                description: "White top and Jeans",
                imageLink: "https://cdnd.lystit.com/photos/2013/04/21/dg-white-sheer-ruffled-silk-blouse-product-1-8063277-883987380.jpeg"
            }],
         }

        this.removePhoto = this.removePhoto.bind(this)
        // this.navigate = this.navigate.bind(this)
        console.log('Main constructor()')
    }

    addPhoto(postSubmitted){
        this.setState(state => ({posts: state.posts.concat([postSubmitted])}))
    }


    removePhoto(postRemoved) {
        console.log('Main removePhoto()')
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    // Lifecycle Method: Invoked immediately after component inserted into DOM and added to view
    // INSERT DATABASE RETRIEVAL HERE
    componentDidMount(){
        console.log('Main componentDidMount() (setState on data)')
    }

    // Lifecycle Method: Invoked when changed state causes re-render
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Main componentDidUpdate() (re-render after state change)')
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        console.log('Main render()')
        return  <div>
                  {/*Use render if multiple components enclosed for given url. Display
                   Photo Wall if exactly at given path, otherwise multiple pages show up at once.*/}
                   <Route exact path='/' render={() => (
                        <div>
                            <Title title={'Fotomural'}/>
                            {/*Inject posts into Main and pass down array of posts as props*/}
                            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                        </div>
                    )}/>

                    {/*Use component when rendering single component only*/}
                        <Route path='/AddPhoto' render={({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                            console.log(addedPost)
                            this.addPhoto(addedPost)
                            history.push('/')
                        }}/>
                    )}/>
                </div>
    }  // render
}  // Main

export default Main