// eslint-disable-next-line strict
'use strict';

const telMask = () => {
	const inp = document.querySelectorAll('input[name="phone"]');

	inp.forEach(el => {
		el.setAttribute('placeholder', '+7 (___) ___-__-__');
		el.addEventListener('input', evt => {

			const keyCode = evt.keyCode;
			const template = '+7 (___) ___-__-__';
			const def = template.replace(/\D/g, "");
			const val = el.value.replace(/\D/g, "");
			let i = 0;
			let newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));

			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, el.value.length)
				.replace(/_+/g, a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(el.value) || el.value.length < 5 || keyCode > 47 && keyCode < 58) {
				el.value = newValue;
			}
			if (event.type === "blur" && el.value.length < 5) {
				el.value = "";
			}

		});
	});


};

export default telMask;

