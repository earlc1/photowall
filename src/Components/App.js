/*
- Connects Redux Store to Main Component
- Acts as container component, does not have any DOM markup
- Only job is to provide data to presentational component
- Data injected into Main, then passed down via props in simple apps
*/

import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'     // Installed with react-router-dom

/*
Map current state inside store to props
The props can then be injected inside a component at any level as posts
*/
function mapStateToProps(state) {
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    // dispatch: Emits action
    return bindActionCreators(actions, dispatch)
}

/*
- Connects Main component to redux store
- Inject Main() with current state of props and dispatch actions
- From Main(), pass props down to sub-components because its a smaller app
*/
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App
