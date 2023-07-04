const messages = {
	name: 'El formato introducido no es correcto',
	requireName: 'El nombre es obligatorio',
	email: 'El formato introducido no es correcto',
	requireEmail: 'El email es obligatorio',
	phone: 'El formato introducido no es correcto',
	requirePhone: 'El telefono es obligatorio'
};

const patterns = {
	name: /^[A-Za-z]*$/,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
	phone: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
};

export const FORM_VALIDATIONS = {
	name: {
		required: messages.requireName,
		pattern: {
			value: patterns.name,
			message: messages.name
		}
	},
	email: {
		required: messages.requireEmail,
		pattern: {
			value: patterns.email,
			message: messages.email
		}
	},
	phone: {
		required: messages.requirePhone,
		pattern: {
			value: patterns.phone,
			message: messages.phone
		}
	}
};