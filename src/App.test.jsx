import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn";

// Properly mock react-router-dom
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(), // Mock `useNavigate`
  };
});

describe("LogIn Component", () => {
  it("logs in successfully with correct credentials", () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate); // Mock `useNavigate` behavior

    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    // Simulate entering correct username and password
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: "admin" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password" } });

    // Simulate clicking the login button
    fireEvent.click(screen.getByRole("button", { name: /log in/i }));

    // Check if navigate is called to redirect to "/"
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
