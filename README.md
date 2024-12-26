
# FormCreaterJS

The `Form` class is a JavaScript utility for dynamically creating and managing HTML forms. It allows for easy generation of form fields and the grouping of elements with customizable attributes.

## Features

- Create form elements dynamically using specified attributes.
- Automatically apply attributes like `id`, `class`, and `textContent`.
- Supports grouping fields into sections with `div` elements.
- Flexible field definitions for labels, inputs, headings, and more.

## Getting Started

### Installation

You can include this class in your project by importing it as a module:

```javascript
import { Form } from './Form.js';
```

### Usage Example

The following example demonstrates how to create a login form using the `Form` class:

```javascript
// Create a new form instance
let loginForm = new Form({
    id: 'loginForm',
    method: 'POST',
    action: '/login'
});

// Set fields for the form
loginForm.setFormFields({
    fields: [
        {
            h3: {
                textContent: 'Login'
            }
        },
        {
            label: {
                textContent: 'Username',
                for: 'username'
            },
            input: {
                type: 'text',
                id: 'username',
                name: 'username'
            },
            group: true
        },
        {
            label: {
                textContent: 'Password',
                for: 'password'
            },
            input: {
                type: 'password',
                id: 'password',
                name: 'password'
            },
            group: true
        },
        {
            input: {
                type: 'submit',
                value: 'Login'
            },
            group: true
        }
    ]
});

// Append the form to a container
const container = document.getElementById('Content');
container.appendChild(loginForm.form);
```

## API Reference

### Constructor

```javascript
constructor(attributes)
```

Creates a new `Form` instance.

#### Parameters
- `attributes` (Object): Key-value pairs to set as attributes for the `<form>` element.

#### Example
```javascript
new Form({
    id: 'myForm',
    method: 'POST',
    action: '/submit'
});
```

### Static Method: `createFieldElement`

```javascript
static createFieldElement(tag, attributes)
```

Creates an HTML element with specified attributes.

#### Parameters
- `tag` (string): The HTML tag name (e.g., `input`, `label`).
- `attributes` (Object): Key-value pairs to set as attributes for the element.

#### Returns
- `HTMLElement`: The created HTML element.

### Method: `setFormFields`

```javascript
setFormFields(object)
```

Populates the form with fields.

#### Parameters
- `object` (Object): Contains a `fields` array, where each field is an object defining HTML elements and their attributes.

#### Example
```javascript
form.setFormFields({
    fields: [
        {
            h3: {
                textContent: 'Section Title'
            }
        },
        {
            label: {
                textContent: 'Label Text',
                for: 'inputId'
            },
            input: {
                type: 'text',
                id: 'inputId',
                name: 'inputName'
            },
            group: true
        }
    ]
});
```

## License

This project is licensed under the MIT License.
