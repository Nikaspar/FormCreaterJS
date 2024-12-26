import { Form } from "../formcreater/formcreater.js";
// Module formcreater.js provides Form class.
// Class Form allows to create form element and fill it with fields.
// Fields are specified in the object with array of fields property.
// Each field is an object with form element tag as key and attributes as value.
// If field has group property equal true, it will be wrapped in div with class 'form-group'.

// Form with fields
// Create an instance of Form class with attributes
const loginForm = new Form({
    action: '/login',
    method: 'POST',
    class: 'form',
    id: 'loginForm',
    other: 'attr',
});


// Set fields for the form
loginForm.setFormFields({
    // Object with fields property
    fields: [
        // First field
        {    
            // Tag: h3
            h3: {
                // textContent is interpreted as <element>.textContent = 'string'
                textContent: 'Authorization',
                // attributes is interpreted as <element>.setAttribute('{attribute}', 'string')
                class: 'form-title',
            },
        },
        // Second field
        {
            // Tag: label
            label: {
                textContent: 'Username',
                for: 'username',
            },
            // Tag: input
            input: {
                type: 'text',
                id: 'username',
                name: 'username',
            },
            // Group property is set to true
            // It means that label and input should be wrapped in div with class 'form-group'
            group: true,
        },
        // Third field
        {
            // Tag: label
            label: {
                textContent: 'Password',
                for: 'password',
            },
            // Tag: input
            input: {
                type: 'password',
                id: 'password',
                name: 'password',
            },
            group: true,
        },
        // Fourth field
        {
            // Tag: input
            input: {
                type: 'submit',
                value: 'Login'
            },
            group: true,
        }
    ]
});

export {loginForm};
