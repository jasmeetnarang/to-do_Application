import { connect } from 'react-redux';
import Todo from './Todo';
import { add, remove } from "../actions";



const mapStateToProps = (state, ownProps) => {
    return {
        value: state,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (value) => {
            dispatch(add(value));

        },
        onRemove: (value) => {
            dispatch(remove(value));
        },
        onTextEntry: (value) => {
            dispatch({ type: 'nothing', text: value });
        }
    };
};

const TodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);

export default TodoApp;