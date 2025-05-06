# Design System

A scalable and reusable design system built using React, TypeScript, TailwindCSS, and Storybook. This project includes essential UI components for enterprise applications with full support for accessibility, theming, responsiveness, and interactive behavior.

## Components

### 1. **TextInput**

A flexible, accessible text input component with configurable size, error state, icon support, and ARIA roles.

#### Features:
- **States**: Default, Hover, Focus, Error, Disabled
- **Variants**: Sizes (`sm`, `md`, `lg`), Icon support
- **ARIA roles**: Accessible by keyboard and screen readers
- **Responsive**: TailwindCSS media queries for responsiveness
- **Theming**: Supports light and dark modes

#### Example Usage:

```tsx
import TextInput from './components/TextInput/TextInput';

const MyForm = () => {
  return (
    <form>
      <TextInput label="Full Name" placeholder="Enter your full name" size="md" />
      <TextInput
        label="Email"
        placeholder="you@example.com"
        error="Invalid email address"
      />
    </form>
  );
};

Storybook:
States: Displayed for all sizes and error states.

Interactive: Input can be focused, hovered, and disabled.

2. Toast
A transient notification component to display contextual feedback messages, such as success, error, info, and warning.

Features:
Variants: Success, Error, Info, Warning

Mount/Unmount Behavior: Auto-dismiss after a set duration

ARIA roles: Uses role="alert" and is keyboard accessible

Theming: Supports light/dark mode styling

Responsive: Sticks to the bottom-right of the screen on all device sizes

Example Usage:
tsx
Copy
Edit
import { useState } from 'react';
import Toast from './components/Toast/Toast';

const ToastExample = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>

      {showToast && (
        <Toast
          message="Your changes were successfully saved!"
          type="success"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};
Storybook:
Variants: Displayed for success, error, info, and warning types.

Interactive: Allows for real-time changes to the toast message and duration.

3. Toast Variants:
Success: Displays a green toast for successful actions.

Error: Displays a red toast for error messages.

Info: Displays a blue toast for informational messages.

Warning: Displays an orange toast for warnings.

Example Usage for All Variants:
tsx
Copy
Edit
import Toast from './components/Toast/Toast';

const ToastVariantsExample = () => {
  return (
    <div className="space-y-4">
      <Toast message="Success! Your changes were saved." type="success" duration={3000} />
      <Toast message="Error! Something went wrong." type="error" duration={3000} />
      <Toast message="Info! This is an informational message." type="info" duration={3000} />
      <Toast message="Warning! Please check your input." type="warning" duration={3000} />
    </div>
  );
};
Installation
To get started with this design system, clone the repository and install the dependencies:

bash
Copy
Edit
git clone 
cd design-system
npm install
To start the development server and view the Storybook:

bash
Copy
Edit
npm run storybook
Development
React for building UI components.

TypeScript for type safety.

TailwindCSS for utility-first styling.

Storybook for isolated component development and documentation.

Adding a New Component
Create a new folder in src/components/ with the component's name.

Implement the component with its respective props and features.

Add its story to src/stories/ for documentation and testing.

Update the README and Storybook as needed.

Contributing
Feel free to fork the repository, make changes, and submit pull requests. Please make sure to follow the development guidelines and write tests where applicable.

License
This project is licensed under the MIT License - see the LICENSE file for details.

yaml
Copy
Edit

---

This `README.md` file now includes detailed information about both the **TextInput** and **Toast** components, including features, usage examples, installation instructions, and the structure of the project. 

Let me know if you need further modifications!
