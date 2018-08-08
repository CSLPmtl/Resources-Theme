import Router from './router.js'

const r = new Router()

export default class State {
	constructor () {
		this.drillLevel = 0
		this.active = 'none'
		this.categoryData = {}
		this.activityData = {}
		this.history = {}
	}

	setDrillLevel (level) {
		let direction = (this.drillLevel > level) ? '' : 'reverse'
		this.drillLevel = level

		r.goto(level, direction)
	}

	getBreadcrumb () {
		let base = ''
		let cat = ''

		// breaks intentionally ommited for smart follow-through
		// depending on level, the string will update relevant parts
		switch(state.drillLevel) {
			case 0:
				return null
				break;
			case 2:
				cat = ' > ' + state.activityData.name
			case 1:
				base = 'By category > ' + state.categoryData.name
				break;
		}
		return base + cat
	}

	backone () { this.setDrillLevel(this.drillLevel - 1) }
}