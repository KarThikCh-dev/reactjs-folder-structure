import { Switch } from 'react-router-dom';
import Routes from './Routes/Routes';

const App = () => {

  return (
    <Switch>
      <Routes />  
      {/* name above as per your convenience like navigation etc .. */}
    </Switch>
  );
};

export default App;
