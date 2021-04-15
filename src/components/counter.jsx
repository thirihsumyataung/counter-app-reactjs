import React, { Component } from 'react';
  
class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     imageURL: 'https://picsum.photos/200',
    //      tags : ['tag1' , 'tag2', 'tag3']
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server 
        }
  }
   styles = {
        fontSize: 30,
        fontWeight: "bold"
       
    }; 
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no Tags ! </p>;
        
        return (
        
            <div>
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
                <ul>There are {this.state.tags.length} Tags. </ul>
            
            </div>
        ); 
        
    }
    // constructor() {
    //     super(); 
    //     this.handleIncrement.bind(this); 
    // }

    // handleIncrement = ()=> {
       
    //     this.state.count++;
    //     this.setState({ count: this.state.count });
    //     console.log(this.state.count); 
        //obj.method(); 
        //function(); 
    //}
    // handleDelete = () => {
        
    // }
   //<div><img src = { this.state.imageURL} alt= " "/> </div><br></br>
   //<div>{this.state.tags.length === 0 && "Please create a new Tag ! "} </div>
            // <ul>
            //         {this.renderTags()}
            //     </ul>
    
    //Unmounting Phase 
    componentWillUnmount() {
        console.log('Counter - Unmount'); 
    }

    render() {
        //console.log('prop', this.props); 
        //console.log(this.props);
        console.log('Counter - Rendered '); 
        return (
            <div>
                {this.props.children}
                <span  className = {this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick= { () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                
                <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>        
        );
    }
    // Removing the local State --> replaced this.state into this.props 
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
       
        return value === 0 ? "Zero" : value; 
    }
}
export default Counter;
