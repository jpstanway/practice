import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('checkbox enables or disables button', () => {
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

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });
});