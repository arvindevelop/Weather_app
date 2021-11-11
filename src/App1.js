//import React from 'react'

//We can write any name at the place of APP
const App = () => {
  return (//<div> Welcome to Arvind world </div>;
  <>
    <MyName/> {/*Nested component*/} 
    <h1>Welcome to Arvind world {5 * 3}</h1>
    <p>Let's enjoy</p>
  </>);
};

const MyName = () => {
  return <h1>Arvind Kumar Singh</h1>
}
export default App;
