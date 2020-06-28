import React from 'react';
import NavigationBar from '../src/components/NavBar/NavigationBar'
import Cover from '../src/components/Cover/Cover'
import Contact from '../src/components/Contact/Contact'
import Form from '../src/components/Form/FormComponent'
import FormComponent from '../src/components/Form/FormComponent';

function App() {
  return (
    <div>
        <NavigationBar/>
        <Cover/>
        <Contact/>
        <FormComponent/>
    </div>
  );
}

export default App;
