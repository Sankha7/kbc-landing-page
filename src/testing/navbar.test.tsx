import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import { within } from "@testing-library/react";

const renderNavbar = (props = {}) =>
  render(
    <MemoryRouter>
      <Navbar {...props} />
    </MemoryRouter>
  );

describe("Navbar", () => {
  it("renders logo and links to home", () => {
    renderNavbar();

    const logo = screen.getByAltText(/KBC Logo/i);
    expect(logo).toBeInTheDocument();

    const logoLink = logo.closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders default menu items", () => {
    renderNavbar();

    const menuItems = ["Home", "Blogs", "Contact", "About"];
    menuItems.forEach((item) => {
      expect(screen.getAllByText(item)[0]).toBeInTheDocument();
    });
  });

  it("links Get Started and Login to the real app (desktop)", () => {
    renderNavbar();

    const getStarted = screen.getByRole("link", { name: /get started/i });
    expect(getStarted).toHaveAttribute("href", expect.stringContaining("/auth"));

    const login = screen.getByRole("link", { name: /^login$/i });
    expect(login).toHaveAttribute("href", expect.stringContaining("/auth"));
  });

  it("opens mobile menu and shows items", async () => {
    const user = userEvent.setup();
    renderNavbar();

    const menuButton = screen.getByLabelText(/open menu/i);
    await user.click(menuButton);

    // Scope inside the sheet content
    const sheetContent = await screen.findByRole("dialog"); 
    const utils = within(sheetContent);

    expect(utils.getByText("Home")).toBeInTheDocument();
    expect(utils.getByRole("link", { name: /get started/i })).toBeInTheDocument();
  });
});
