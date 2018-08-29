import axios from 'axios'

const defaults = {
  paths: {
    namespace: 'abra_ac', // localstorage namespace
    cachemiss: 'activity_cat/', // path for axios item retrieval on miss
    axiosBURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/',
  },
}

const cache = {
  config: {
    prefix: defaults.paths.namespace,
    base: defaults.paths.cachemiss,
  },

  exists( ID ) {
    return !!localStorage.getItem( this.config.prefix + ID )
  },

  validate( ID ) {
    const pfx = this.config.prefix
    if ( this.exists( ID ) ) {
      const item = JSON.parse( localStorage.getItem( pfx + ID ) )

      // set cache to expire in two weeks
      if ( item.timestamp + 1.21e+9 > Date.now() ) {
        return item
      }
      console.log( 'Cached item exists, but is older than 2 weeks' )
      return false
    }
    return false
  },

  retrieve( ID ) {
    return new Promise( ( resolve, reject ) => {
      if ( this.validate( ID ) ) {
        console.log( `Retrieved cached data: ID #${ID}` )
        resolve( JSON.parse( localStorage.getItem( this.config.prefix + ID ) ) )
      } else {
        axios.get( this.config.base + ID ).then( response => {
          this.set( this.config.prefix + ID, response.data )
          console.log( `Retrieved live data with ID #${ID} and cached it` )
          resolve( response.data )
        }).catch( 'error', error => reject( error ) )
      }
    })
  },

  get( ID ) {
    return new Promise( ( resolve ) => {
      this.retrieve( ID ).then( data => resolve( data ) )
    })
  },

  set( key, d ) {
    const item = d
    item.timestamp = Date.now()
    localStorage.setItem( key, JSON.stringify( item ) )
  },
}

export { cache, defaults }
