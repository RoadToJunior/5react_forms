class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
  };

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />
        <label>
          <textarea
            value={this.state.text}
            onChange={this.handleTextChange}
          ></textarea>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
