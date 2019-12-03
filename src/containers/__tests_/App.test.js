import React from "react";
import App from "../App";
import { shallow } from "enzyme";

import { create, act } from "react-test-renderer";

it("renders without crashing", () => {
  shallow(<App />);
  // render the component
  let root;
  act(() => {
    root = create(<App value={1} />);
  });

  // make assertions on root
  expect(root.toJSON()).toMatchSnapshot();
});
