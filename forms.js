class Form {
    textTags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'];
    constructor(attributes) {
        this.attributes = attributes;
        this.form = document.createElement('form');
        if (this.attributes) {
            for (let key in this.attributes) {
                this.form.setAttribute(key, this.attributes[key]);
            }
        }
    }

    createFieldElement(tag, attributes, child = false) {
        const element = document.createElement(tag);
        for (let attr in attributes) {
            if (attr === 'textContent') {
                element.textContent = attributes[attr];
            } else {
                element.setAttribute(attr, attributes[attr]);
            }
        }
        if (child) {
            this.form.appendChild(element);
        }else {
            return element;
        };
        
        
    }

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
                const formField = this.createFieldElement(tag, field[tag]);
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
