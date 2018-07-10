import Hello from './hello.jsx'
import * as UserNameSelectors from '../userName/selectors'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        name: UserNameSelectors.getName(state),
    }
}

export default connect(mapStateToProps)(Hello);