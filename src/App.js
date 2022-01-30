import react, {Component} from 'react';
import './App.css';
import Sign from './Sign';

class App extends Component {
  constructor(){
    super();
    this.state={
      signInUpValue:0
    }
  }
  render (){
    return <>
     <div className='signup_login container'>
       <Sign />
     </div>
     </>
  }
}
export default App;
