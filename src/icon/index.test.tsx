import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Icon from "./index";

describe("Icon", () => {
  test("renders Icon", () => {
    const { container } = render(<Icon type="game" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  test("custom className", () => {
    const { container } = render(<Icon type="game" className="custom" />);
    expect(container.querySelector(".custom")).toBeInTheDocument();
  });

  test("should support click", () => {
    const onClick = jest.fn();
    const { container } = render(<Icon type="game" onClick={onClick} />);

    const linkElement = container.querySelector("svg") as SVGSVGElement;
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
});
