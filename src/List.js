import image from './add.png';
import bell from './bell.png';
import { Component } from "react";

export class List extends Component {
    state = {
        userInput: "",
        toDoList: []
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e);
    }

    addItem(input) {
        if(input === "") {
            alert("Не забудь вписать занятие!");
        }
        else{
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ""})
    }
    }
    crossedWord(event) {
        const li = event.target;//как только с li  изменение - мы должны отслеживать это через подслушку
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
            <div>
                <input  type="text" placeholder="На сегодня..." onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput}/>
                <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>
                    <img src={image} width="10px" alt="add" className='image'/>
                    </button>
            </div>
            <div>
                <ul>
                    {this.state.toDoList.map((item, index) => 
                        <li key={index} onClick={this.crossedWord}><img src={bell} width='25px'alt='bell'/>{item}</li>
                    )                        
                    }
                </ul>
            </div>
            <div>
            <button className='deleteBtn' onClick={() => this.deleteItem()}>УДАЛИТЬ СПИСОК</button>
            </div>
            </form>
        )
    }
}