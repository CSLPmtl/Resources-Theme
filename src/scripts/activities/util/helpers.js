
export function on (action, elem, cb, passive) {
	elem.addEventListener(action, cb, passive)
}

export function makeEmbedLink (link) {
  let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  let match = link.match(regExp);

  if (match && match[2].length != 11) {
    return 'error';
  }

	let embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/'
	return embed + match[2] + '" frameborder="0" allowfullscreen></iframe>'
}
