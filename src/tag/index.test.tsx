import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tag from "./index";

describe("Tag", () => {
  test("renders Tag", () => {
    render(<Tag>tag 1</Tag>);
    const linkElement = screen.getByText(/tag 1/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("should support onClose", () => {
    const onClose = jest.fn();
    const { container } = render(
      <Tag closable onClose={onClose}>
        tag 2
      </Tag>
    );
    const linkElement = container.querySelector("svg") as SVGSVGElement;
    fireEvent.click(linkElement);
    expect(onClose).toBeCalled();
  });
});
