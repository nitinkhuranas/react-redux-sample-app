import UserName from './userName.jsx'
import * as actions from './actions'
import {connect} from 'react-redux'

function mapDispatchToProps(dispatch) {
    return {
        setName: function(name){
            dispatch(actions.setName(name))
        }
    }
}

export default connect(null, mapDispatchToProps)(UserName);