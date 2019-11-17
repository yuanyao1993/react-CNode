import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ShoppingList from './app.js';
import data from './data.js'
console.log(data);


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    render (){
        return (
          <div className={this.props.isShow ? 'hide good':'good'}>
              <ul>
                  {
                      this.props.data.map((item,index) =>{
                        return <li key={index}
                                onClick={this.handleClick}>
                            <p className={item.vip ? 'vip':''}>{item.username}</p>
                            <p className="message">{item.message}</p>
                            <p>{this.props.isShow ? 'vip':''}</p>
                        </li>
                      })
                  }
              </ul>
          </div>
        )     
    }
    handleClick (){
        console.log(this.state.isToggleOn);
    }
}

class Group extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render (){
        return (
          <div>
              <h2 className="title" onClick={this.handleClick}>{this.props.data.name}</h2>
              <List data={this.props.data.list} isShow={this.state.isShow} />
          </div>
        )     
    }
    handleClick (){
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

  class Panel extends React.Component {
      render (){
          return (
            <div className="panel">
                {
                    Object.keys(this.props.data).map((item,index) =>{
                        return <Group key={index} data={this.props.data[item]} />
                    })
                }
            </div>
          )     
      }
  }

ReactDOM.render(<Panel data={data}/>,
     document.getElementById('root'));

