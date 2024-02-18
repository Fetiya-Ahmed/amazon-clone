




import { useContext, useEffect } from 'react';
import './App.css';
import Landing from './Pages/Landing/Landing';
import Routing from './Router';
import { DataContext } from './Components/DataProvider/DataProvider';
import { Type } from './Utility/action.type';
import { auth } from "./Utility/firebase";
function App() {
  const [{user}, dispatch] = useContext(DataContext);

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user:authUser
        })
      }else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  },[])
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;


// import './App.css';
// import Routing from './Router';
// function App() {
//   return (
//     <div className="App">
//       <Routing/>
//     </div>
//   );
// }

// export default App;
