class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "0",
  };

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj miasto
          <input
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
            name="city"
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            value={this.state.text}
            onChange={this.handleChange}
            name="text"
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz swoje miasto?
          <input
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleChange}
            name="isLoved"
          />
        </label>
        <br />
        <label>
          Ile razy byłeś w tym mieście?
          <select
            value={this.state.number}
            onChange={this.handleChange.bind(this)}
            name="number"
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
