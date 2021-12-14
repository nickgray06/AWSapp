import './App.css';
import  { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <h1>Nicks App</h1>
      <h2>We have Auth!</h2>
      <AmplifySignOut />  
    </div>
  );
}

export default withAuthenticator(App);
