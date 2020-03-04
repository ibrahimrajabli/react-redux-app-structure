import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actionTypes from "../../redux/actionTypes"

class Mainpage extends Component {
    someTest(){
        var newSome = this.props.mainReducer.someData
        newSome.name = "test";
        this.props.dispatch({type:actionTypes.SOME_ACTION_TYPE,payload:newSome})
        console.log(this.props.mainReducer)
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.someTest()}>test but</button>
                {this.props.mainReducer.someData.name}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {mainReducer:state.mainReducer}
}
export default connect(mapStateToProps)(Mainpage);