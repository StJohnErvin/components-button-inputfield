# Component Button and InputFiled

Component Button and InputFiled Library is a collection of reusable and customizable components for React applications.

## Installation

To install the component library, run the following command:


## Usage

### Button Component

The Button component allows you to create different types of buttons with various states and variations.

```jsx
import React from 'react';
import { Button } from 'your-component-library-name';

function MyComponent() {
  return (
    <div>
      <Button state="default" variation="primary" onClick={() => console.log('Button clicked')}>
        Primary Button
      </Button>

      <Button state="hover" variation="secondary">
        Secondary Button
      </Button>

      {/* Add more examples and variations as needed */}
    </div>
  );
}

export default MyComponent;

#### Props

#### Button Props

| Prop          | Type      | Default     | Description                                    |
| ------------- | --------- | ----------- | ---------------------------------------------- |
| state         | string    | 'default'   | The state of the button (default, hover, active) |
| variation     | string    | 'primary'   | The variation style of the button               |
| onClick       | function  | -           | The click event handler for the button          |
| disabled      | boolean   | false       | Disables the button if true                     |
| className     | string    | -           | Additional CSS class for the button             |
| style         | object    | -           | Inline styles for the button                    |

InputField Component
The InputField component is used for capturing user input with different states and types.

import React from 'react';
import { InputField } from 'your-component-library-name';

function MyComponent() {
  return (
    <div>
      <InputField type="text" state="default" value="" onChange={(e) => console.log(e.target.value)} />

      <InputField type="email" state="focus" value="" onChange={(e) => console.log(e.target.value)} />

      {/* Add more examples and variations as needed */}
    </div>
  );
}

export default MyComponent;

#### InputField Props

| Prop       | Type      | Description                                   |
| ---------- | --------- | --------------------------------------------- |
| type       | string    | Input field type (text, email, password, etc.) |
| state      | string    | Input field state (default, focus, error, etc.)|
| value      | string    | Current value of the input field               |
| onChange   | function  | Event handler for input change event           |
| className  | string    | Additional CSS class for the input field       |
| style      | object    | Inline styles for the input field              |

Contributing
If you'd like to contribute to the component library, please follow the guidelines in CONTRIBUTING.md.

License
This project is licensed under the MIT License.

Remember to replace `your-component-library-name` with the actual name of your component library. Also, make sure to provide specific details about the props and their usage for each component.

Customize the README file based on your component library's specific features, usage, and any additional information you want to provide to users.

Including sections for contributing and licensing is optional but recommended to provide clear guidelines for contributions and clarify the license terms of your component library.
# component-library
