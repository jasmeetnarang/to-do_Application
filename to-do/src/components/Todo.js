import React, {Component} from "react";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    onTextEntry(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        console.log(this.props.value)
        let values = this.props.value ? this.props.value : [];
        return (<div>
            <input type="text" value={this.state.text} onChange={this.onTextEntry.bind(this)} />
            <button onClick={() => this.props.onAdd(this.state.text)}>ADD ITEM</button>
            <button onClick={() => this.props.onRemove(this.state.text)}>REMOVE ITEM</button>
            <h1>List: </h1>
            <ol>
                {values.map((e) => (<li> {e} </li>))}
            </ol>
            
        </div>);
    }
}

const Todo = ({ value, onAdd, onRemove}) => (
    <Page value={value} onAdd={onAdd} onRemove={onRemove}/>
);

export default Todo;