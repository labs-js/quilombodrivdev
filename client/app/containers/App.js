import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
    render(){
       return( 
            <div>
                {this.props.children}
            </div>
       );
    }
}  

export default App;


/*App.propTypes = {*/
  //posts: PropTypes.array.isRequired,
//}

//Somehow connect, connects the state with the container APP =)
 /*state structure
  *posts: {
  *       id:0,
  *       title: "Title for first post",
  *       description: "Welcome to the first post of qdd!"
  *   },
  */
/*const mapStateToProps = function (state) {*/
    //return {posts :state.posts}
//}


/*export default connect(mapStateToProps)(App)*/
