/**
 * Class representing a Form.
 * Allows creation of form elements and filling them with specified fields.
 */
class Form {
    /**
     * Tags that can contain text content.
     * @type {string[]}
     */
    textTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'];

    /**
     * Create a form.
     * @param {Object} attributes - Attributes for the form element.
     */
    constructor(attributes) {
        this.attributes = attributes;
        this.form = document.createElement('form');
        if (this.attributes) {
            for (let key in this.attributes) {
                this.form.setAttribute(key, this.attributes[key]);
            }
        }
    }

    /**
     * Create a field element with specified tag and attributes.
     * @param {string} tag - The HTML tag.
     * @param {Object} attributes - Attributes for the element.
     * @returns {HTMLElement} The created HTML element.
     */
    static createFieldElement(tag, attributes) {
        const element = document.createElement(tag);
        for (let attr in attributes) {
            if (attr === 'textContent') {
                element.textContent = attributes[attr];
            } else {
                element.setAttribute(attr, attributes[attr]);
            }
        }
        return element;
    }

    /**
     * Set fields for the form.
     * @param {Object} object - Contains fields property, which is an array of field objects.
     */
    setFormFields(object) {
        const fields = object.fields;
        fields.forEach(field => {
            let group = null;
            if (field.group) {
                group = document.createElement('div');
                group.classList.add('form-group');
            }
            for (let tag in field) {
                if (tag === 'group') continue;
                const formField = Form.createFieldElement(tag, field[tag]);
                if (group) {
                    group.appendChild(formField);
                    this.form.appendChild(group);
                } else {
                    this.form.appendChild(formField);
                }
            }
        });
    }
}

export { Form };
