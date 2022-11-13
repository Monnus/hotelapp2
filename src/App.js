
import {createContext } from 'react';
import { hotalData } from 'hotalData';
import ProjectRoutes from 'Routes';
 const UserContext= createContext();
function App() {
  return (
    <div className="App">
    <UserContext.Provider value={hotalData}>
<ProjectRoutes/>    
    </UserContext.Provider>
      
    </div>
  );
}
 
 export default App;
 export {
UserContext
 };