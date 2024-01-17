import { render, fireEvent } from "@testing-library/react"
import * as flip from "./flip";

flip.flipCoin = jest.fn();

import Game from "./Game";

it("does not render a coin on page load", function() {
  const { container } = render(<Game />);

  expect(container.querySelector("img")).not.toBeInTheDocument();
  expect(container.querySelector("button")).toBeInTheDocument();
});


it("update score text for heads", function() {
  flip.flipCoin.mockReturnValue("heads");
  const { container } = render(<Game />);

  fireEvent.click(container.querySelector("button"));

  expect(container.querySelector("img")).toBeInTheDocument();
  expect(container.querySelector(".Game-score"))
          .toContainHTML("Out of 1 flips, there have been 1 heads and 0 tails.");
});


it("update score text for tails", function() {
  flip.flipCoin.mockReturnValue("tails");
  const { container } = render(<Game />);

  fireEvent.click(container.querySelector("button"));

  expect(container.querySelector("img")).toBeInTheDocument();
  expect(container.querySelector(".Game-score"))
          .toContainHTML("Out of 1 flips, there have been 0 heads and 1 tails.");
});
