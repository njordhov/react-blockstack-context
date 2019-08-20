import React, { Component } from 'react';
import { useBlockstackContext } from 'react-blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Profile (props) {
  const { handleSignOut, person } = useBlockstackContext()
  return (
    person ?
    <div className="panel-welcome" id="section-2">
      <div className="avatar-section">
        <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
      </div>
      <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
      <p className="lead">
        <button
          className="btn btn-primary btn-lg"
          id="signout-button"
          disabled={ !handleSignOut }
          onClick={ handleSignOut }>
          Logout
        </button>
      </p>
    </div> : null
  )
}
