import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./Form";

describe("Form Test", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("shows error for short password", () => {
    render(<Form />);

    const input = screen.getByLabelText("password");
    const button = screen.getByText("Login");

    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.click(button);

    expect(screen.getByText("Min 6 characters")).toBeInTheDocument();
  });

  it("submits for valid password", () => {
    render(<Form />);

    const input = screen.getByLabelText("password");
    const button = screen.getByText("Login");

    fireEvent.change(input, { target: { value: "123456" } });
    fireEvent.click(button);

    expect(window.alert).toHaveBeenCalled();
  });

});
