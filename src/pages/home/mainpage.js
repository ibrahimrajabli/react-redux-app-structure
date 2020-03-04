import React, {Component} from 'react';
import {connect} from "react-redux";

class Mainpage extends Component {
    render() {
        return (
            <div>
                test here
            </div>
        );
    }
}
function mapStateToProps(state){
    return {mainReducer:state.mainReducer}
}
export default connect(mapStateToProps)(Mainpage);