const { h, render, Component, Text } = require("ink");
const Marquee = require("../src/marquee");

class Example extends Component {
  render() {
    return <Marquee color="red" text="1234567890ABC" width={10} />;
  }
}

render(<Example />);
