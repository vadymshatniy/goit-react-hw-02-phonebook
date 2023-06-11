import React from 'react';
import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


class App extends Component {
  state = {
  contacts: [],
  filter: '',
  name: ''
  }

  formSubmitHandler = data => {
    this.setState({ contacts: [...this.state.contacts, data]});
    this.setState({ name: data.name });
  };
    
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }
  
  render() {
    const loweredFilter = this.state.filter.toLowerCase();
    const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(loweredFilter));
    console.log(filteredContact);
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContact} />
      </div >
    )
  }
};

export default App;