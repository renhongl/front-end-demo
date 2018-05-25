

import { connect } from 'react-redux';
import { LoginComponent } from './LoginComponent';
import userList from '../../../assets/userList';
import * as Actions from '../action';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userInfor) => {
            for (let [key, user] of userList.entries()) {
                if (user.userName === userInfor.userName && user.password === userInfor.password) {
                    dispatch(Actions.login(user));
                }
            }
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(LoginComponent);