import React from 'react';
import NavigationBar from '../src/components/NavBar/NavigationBar'
import Cover from '../src/components/Cover/Cover'
import Contact from '../src/components/Contact/Contact'
import FormComponent from '../src/components/Form/FormComponent';
import Visit from '../src/components/Visit/Visit';
import Places from '../src/components/Places/Places';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <div>
        <NavigationBar/>
        <Cover/>
        <Contact/>
        <FormComponent/>
        <Visit/>
        <Places/>
        <Footer/>
    </div>
  );
}

export default App;
