class Form extends React.Component {
  state = {
    city: "Londyn",
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
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
