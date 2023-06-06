const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <img href="/images/404.jpg" alt='404 Cat'/>
              <div>
              Images by Tomomi Imura <a href="https://twitter.com/girlie_mac"/>
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404
