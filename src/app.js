class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    })
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }
  handleAddOption(option) {

    if(!option) {
      return 'Enter valid value';
    }
    else if(this.state.options.indexOf(option) > -1){
      return 'option already exist';
    }


    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    })
  }
  render() {
    const title = "Indecision App";
    const subtitle = "put your life in hands of a computer";

    return (
      <div>
      <Header subtitle={subtitle} />
      <Action
        hasOption={this.state.options.length > 0}
        handlePick={this.handlePick}
      />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption handleAddOption={this.handleAddOption}/>
    </div>
  );
  }
}



const Header = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.subtitle && <h3>props.subtitle</h3>}
    </div>
  )
}

Header.defaultProps = {
  title : 'Indecision App'
}

const Action = (props) => {
  return (
    <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOption}
      >
      What should I do?
    </button>
  </div>
  )
};


const Options = (props) => {
  return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option) =>  <Option key={option} option={option}/>)
        }
      </div>
    );
}


const Option = (props) => {
  return (
    <div>
    {props.option}
    </div>
);
}


class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    e.target.elements.option.value = '';
    this.setState(() => {
      return {
        error
      };
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      </div>
    );
  }
}


IndecisionApp.defaultProps = {
  options: []
};



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
