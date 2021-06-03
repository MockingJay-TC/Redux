import React, { Component } from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import * as actiontype from '../store/action'

class Market extends Component {
    

    render() { 
        return ( 
            <div>
                <header> Mangoes: {this.props.mangoes}</header>
                <Button title="Add 10" click={this.props.onAddMangoes}></Button>
                <Button title="Subtract 5" click={this.props.onSubtractMangoes}></Button>

                <header> Cucumber: {this.props.cucumber}</header>
                <Button title="Add 5" click={this.props.onAddCucumber}></Button>
                <Button title="Subtract 1" click={this.props.onSubtractCucumber}></Button>
            </div>
         );
    }
} 

const mapStateToProps = (state) => {
    return{
        mangoes: state.mg.mangoes,
        cucumber: state.cu.cucumber
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onAddMangoes: ()=> dispatch({type: actiontype.ADDMANGOES, value : 10}),
        onSubtractMangoes: ()=> dispatch({type: actiontype.SUBTRACTMANGOES, value : 5}),
        onAddCucumber: ()=> dispatch({type: actiontype.ADDCUCUMBER, value : 5}),
        onSubtractCucumber: ()=> dispatch({type: actiontype.SUBSTRACTCUCUMBER, value : 1})
    }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Market);