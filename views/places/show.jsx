const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Currently unrated</p>
            <h3>Comments</h3>
            <p>No comments yet!</p>
          </main>
        </Def>
    )
}

module.exports = show
