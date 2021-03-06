import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options) {
          this.setState(() => ({ options: options }));
      }
    } catch (e){

      // do nothing at all
    }



}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);

    }
  }
//   componentWillUnmount() {
//     console.log('componentwillunmount');
//   }

  handleClearSelectedOption(){
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }


  handlePick() {
    const randomNum = Math.floor(Math.random()* this.state.options.length );
    this.setState(() => ({
      selectedOption: this.state.options[randomNum]
    }))
  }

  handleAddOption(option) {
    if(!option) {
      return 'enter valid value to add item';
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'this option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat([option])
    }));
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';


    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length>0}
          handlePick={this.handlePick} />
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
