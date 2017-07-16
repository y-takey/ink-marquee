const { h, render, Component, Text } = require("ink");
const Marquee = require("../src/marquee");

class Example extends Component {
  render() {
    return <Marquee color="blue" text="123" width={5} direction="ltr" />;
  }
}

render(<Example />);
