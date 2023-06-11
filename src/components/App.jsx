import React from 'react';
import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import profileStyles from "./App.module.css"


class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }

  checkDuplication = data => {
    console.log(data.name)
    if(this.state.contacts.name === data.name) {
        alert("is already in contacts")
      };
  }
  
  formSubmitHandler = data => {
    this.setState({ contacts: [...this.state.contacts, data]});
    this.setState({ name: data.name });
  };
    
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  deleteContacts = () => {
        this.setState({  contacts: [], });
    }
  
  render() {
    const loweredFilter = this.state.filter.toLowerCase();
    const filteredContact = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(loweredFilter));
    return (
      <div className={profileStyles.container}>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <button type="button" onClick={this.deleteContacts} className={profileStyles.button}>Delete Contacts</button> 
        <ContactList contacts={filteredContact} onDeleteContact={this.deleteContact} />
      </div >
    )
  }
};

export default App;