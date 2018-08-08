import hasher from 'hasher'
import $ from 'balajs'
const anime = require('animejs')

export default class Router {
	constructor () {
		// add hash change listener
		hasher.changed.add(this.handleHashChange)
		// add initialized listener (to grab initial value in case it is already set)
		hasher.initialized.add(this.handleHashChange)
		// initialize hasher (start listening for history changes)
		hasher.init()
	}

	navigate () {
		let hashtring = 'foo'

		// change hash value (generates new history record)
		hasher.setHash(hashtring)
	}

	handleHashChange (newHash, oldHash) {
		console.log('%c newhash: ' + newHash, 'background: blue')
	}

	goto (level, dir) {
		const container = $.one('#activities__by-cat')
		const cards = $('.category-card')
		const drilldown = $.one('#drilldown')
		const activity = $.one('#activity')
		const catMeta = $.one('#cat-meta')

		switch (level) {
			case 0:
				drilldown.setAttribute('data-active', 'none')
				container.className = 'selected'
				catMeta.className = 'hidden'
				anime({
					targets: '.activities-meta p',
					opacity: [0, 1],
					duration: 500,
					easing: 'easeOutExpo',
					reverse: dir,
					complete: () => {
						anime({
							targets: container,
							opacity: [0, 1],
							duration: 300,
							reverse: dir
						})
					}
				})
			break;

			// Activity list
			case 1:
				if (dir == 'reverse') {
					anime({
						targets: activity,
						opacity: [1,0],
						duration: 400,
						translateY: { value: 40, duration: 400 },
						easing: 'easeOutExpo',
						complete: () => {
							activity.className = 'hidden'
							anime({
								targets: '#activities__by-cat',
								delay: 100,
								opacity: [1, 0],
								duration: 600,
								reverse: dir,
								easing: 'easeOutExpo',
								complete: () => {
									drilldown.setAttribute('data-active', 'cat')
									container.className = ''
									catMeta.className = ''
									activity.className = 'hidden'
								}
	  					})
  					}
					})
				} else {
					anime({
						targets: '.activities-meta p',
						opacity: [1, 0],
						duration: 400,
						reverse: opts.direction,
						easing: 'easeOutExpo',
						complete: () => {
				      anime({
								targets: '#activities__by-cat',
								delay: 100,
								opacity: [1, 0],
								duration: 500,
								reverse: opts.direction,
								easing: 'easeOutExpo',
								complete: () => {
									drilldown.setAttribute('data-active', 'cat')
									container.className = ''
									catMeta.className = ''
									activity.className = 'hidden'
								}
							})
				  	}
					})
				}
			break;

			// Activity Item
			case 2:
				activity.className = ''
				catMeta.className = 'hidden'
				anime({
					targets: activity,
					opacity: [0, 1],
					duration: 400,
					translateY: { value: -40, duration: 800 },
					easing: 'easeInExpo'
				})
			break;
		}
	}
}