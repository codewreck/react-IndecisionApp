class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }
  //handle delete Options
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render(){
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should i do?</button>
      </div>
    );
  }
}
// we have access to this.props.options inside the render() as render() is not an event handler but we do not have access to this.props .options inside handleRemoveAll() function as it loses the "this" binding oz its an event handler so to prevent this we are going to overide the constructor function by adding the line - this.handleRemoveAll = this.handleRemoveAll.bind(this);


class Options extends React.Component {

  render(){
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
            // this.props.options.map((option) => <p key={option}>{option}</p>)
            this.props.options.map((option) => <Option key={option} optionText={option} />)

        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOPtion(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOPtion}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
