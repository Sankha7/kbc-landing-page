import { describe, it, expect, vi } from "vitest";
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

    const logo = screen.getByText(/KB/i);
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

  it("calls onRegisterClick when clicking Join Waitlist (desktop)", async () => {
    const user = userEvent.setup();
    const onRegisterClick = vi.fn();

    renderNavbar({ onRegisterClick });

    const button = screen.getByRole("button", { name: /join waitlist/i });
    await user.click(button);

    expect(onRegisterClick).toHaveBeenCalledTimes(1);
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
    expect(utils.getByRole("button", { name: "Join Waitlist" })).toBeInTheDocument();
  });
});
