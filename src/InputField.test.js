import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField Component', () => {
  it('renders the input field with the correct type', () => {
    const { getByTestId } = render(<InputField type="email" />);
    const inputElement = getByTestId('input-field');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('calls the onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<InputField onChange={onChangeMock} />);
    const inputElement = getByTestId('input-field');
    const inputValue = 'test@example.com';
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue(inputValue);
  });

  // Add more test cases as needed for different states and variations of the InputField component
});
