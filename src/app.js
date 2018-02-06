class IndecisionApp extends React.Component {
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer.';
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
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
  handlePick() {
    alert('handlePick');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should i do?</button>
      </div>
    );
  }
}
// we have access to this.props.options inside the render() as render() is not an event handler but we do not have access to this.props .options inside handleRemoveAll() function as it loses the "this" binding oz its an event handler so to prevent this we are going to overide the constructor function by adding the line - this.handleRemoveAll = this.handleRemoveAll.bind(this); 


class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert('remove all');
  }
  render(){
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
