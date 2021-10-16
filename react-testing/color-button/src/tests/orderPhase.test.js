import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("order phases for happy path", async () => {
  render(<App />);

  // add scoops and toppings (5.50)
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");

  const mAndMsInput = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });
  userEvent.click(mAndMsInput);

  // find an click order button
  const orderButton = screen.getByRole("button", { name: "Order Sundae!" });
  userEvent.click(orderButton);

  // check summary information is correct
  const summaryHeader = screen.getByText(/order summary/i);
  expect(summaryHeader).toBeInTheDocument();

  const scoopsSubtotal = screen.findByRole("heading", { name: /scoops: \$/i });
  expect(scoopsSubtotal).toHaveTextContent("4.00");

  const toppingsSubtotal = screen.findByRole("heading", {
    name: /toppings: \$/i,
  });
  expect(toppingsSubtotal).toHaveTextContent("1.50");

  const grandTotal = screen.findByRole("heading", { name: /total: \$/i });
  expect(grandTotal).toHaveTextContent("5.50");
  // accept terms and conditions, and click button to confirm
  const termsCheckbox = screen.findByRole("checkbox", {
    name: /terms and conditions/i,
  });
  userEvent.click(termsCheckbox);

  const confirmButton = screen.findByRole("button", { name: /confirm order/i });
  userEvent.click(confirmButton);

  // confirm order # on confirmation page
  const orderNumber = await screen.findByText(/your order number is/i);
  expect(orderNumber).toBeInTheDocument();

  // click "new order" button
  const newOrderButton = screen.findByRole("button", { name: /new order/i });
  userEvent.click(newOrderButton);

  // check that scoops and toppings subtotals have been reset
  const resetScoopsSubtotal = screen.getByText("Scoops total: $", {
    exact: false,
  });
  expect(resetScoopsSubtotal).toHaveTextContent("0.00");

  const resetToppingsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(resetToppingsSubtotal).toHaveTextContent("0.00");
});
