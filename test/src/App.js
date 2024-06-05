import logo from './logo.svg';
import './App.css';
import UserStatus from './UserListItem';
import UserListItem from './UserListItem';
import Accommodate from './Accommodate';
import LandingPage from './LandingPage';
import NumberList from './NumberList';
import AttendanceBook from './AttendanceBook';
import NameForm from './NameForm';
import SingUp from './chapter_11/SignUp';
import BoilingVerdict from './BoilingVerdict';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';
import SplitPane from './SplitPane';

function App() {
  
  return (
    <div className="App">
      <SplitPane 
        left = {<Contacts />}
        right={<chat/>}
      />
    </div>
    
  );
  
}


export default App;
