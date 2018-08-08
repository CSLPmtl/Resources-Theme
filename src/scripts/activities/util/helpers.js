
export function on (action, elem, cb, passive) {
	elem.addEventListener(action, cb, passive)
}