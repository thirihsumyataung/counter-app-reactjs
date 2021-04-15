import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import Counter from './components/counter';

class App extends Component {
   state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },         
        ]
   }
  
  // Mounting Phase 
  //need to pass the props in constructor : Else it will return as undefined. 
  constructor(props) {
    super(props);
    console.log(' App - Constructor');
    //this.state = this.props.something; Error 
    // this.setState() ; // Error: because this can only be called component is rendered and place in DOM.   
  }
  
  // Update Phase 
  componentDidMount() {
    // Ajax called 
    // this.setState ({ movies }); // if we want to pass a set of movies from a server or something in future. 
    console.log('App - Mounted '); 
  }
    // add a new even handler 
    handleIncrement = counter => {
        const counters = [...this.state.counters]; // spread operators 
        const index = counters.indexOf(counter); //it pass the counter value 
        counters[index] = { ...counter }; //clone the counter --> to remain the value.  
        counters[index].value++; // directly modify the value of the state : where state = [ counter[0].value]
        
        this.setState({ counters }); //Updating the state component 
    }
    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => (c.id !== counterId ));
        this.setState ({counters})
    }

    // To reset the codes --> buttons, id and value 
    //If we don't have the single source of Truth , this method will not work. 
    //Each Counter component has value. 
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c; 
        })
        this.setState({ counters }); 
    };
    
  render() {
    console.log('App - Rendered'); 
    return (<React.Fragment>
      
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/> 
    
      <main className='container'>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete} />
      
      </main>

    </React.Fragment>
    );
  }
  
}
 
export default App;

// When a component is rendered, all the children are also rendered recursively 
//Only content is updated 

//Unmounting Phase in Counter Component
//Deleting a counter will change the entire  App component 
//Component tree will re-render change again 
//One less Counter 
//Removing counter happen --> Counter unmount 
//Note: There will be memory leak if you set the timer or set the event listener --> clean these up before DoM is deleted. 