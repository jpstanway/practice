import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('Checkbox', () => {
  test('checkbox is unchecked by default', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });
    expect(confirmButton).toBeDisabled();
  });

  test('checking checkbox enables/disables button', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox');
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});

describe('Popover', () => {
  test('popover responds to hover', async () => {
    render(<SummaryForm />);

    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will actually be delivered/i));
  });
});