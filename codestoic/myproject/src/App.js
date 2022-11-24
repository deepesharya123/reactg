import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
// import {World }from  './components/Hello';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
        <Counter/>
        <Resume name="John"/>
        <Profile name="Henry" lastname="Ford"/>
        <Profile name="Amit" lastname="Arya"> 
            This is the children of Profile component
        </Profile>
        <Message messagecontent="Passing props from the class component " messagecode="10"/>
      </div>
  );
}

export default App;
