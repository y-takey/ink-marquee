const { h, render, Component, Text } = require("ink");
const Marquee = require("../src/marquee");

class Example extends Component {
  render() {
    return (
      <Marquee
        color="blue"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        width={80}
        speed={200}
      />
    );
  }
}

render(<Example />);
