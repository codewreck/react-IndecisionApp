class IndecisionApp extends React.Component {
  render(){
    return (
      <div>
        <Header title="Test Value"/>
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    // console.log(this.props.title);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
      )
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should i do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
        <h3>options component here</h3>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>Option Component here</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render(){
    return (
      <div>
        <p>dn</p>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
