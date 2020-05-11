import React from 'react';
import './index.scss';

// Individual Component Imports
import { Button } from 'blackburn-comp-library';

const CompLayoutButton = (props) => {
  return (
    <section className="CompWikiWrap">
      {/* Title will be individual for each component. */}
      <h1>This page for: A Button</h1>

      <h2>Description:</h2>
      <p>Its a Button.. Duh..</p>

      {/* Add component here. */}
      <h2>Example:</h2>
      <Button text= "This is a button" />

      <h2>Props:</h2>
      <p>See documentation of the usage of the props for this component below.</p>
      <section className="propsTable">
        {/* Props Table Headers */}
        <div className="colTitle">
          <p>Name:</p>
        </div>
        <div className="colTitle">
          <p>Description:</p>
        </div>
        <div className="colTitle">
          <p>Example:</p>
        </div>

        {/* Prop Example */}
        <div className="propTitle">
          <p>Text</p>
        </div>

        <div className="propDescription">
          <p>This adds Text to the button, viewable by the user.</p>
        </div>

        <div className="propsExample">
          <code>
            {'<Button text="This is a button" />'}
          </code>
        </div>
      </section>

      <h2>Other Examples:</h2>
      <p>Showcase of other examples built into the default component.</p>
    </section>
  )
}

export default CompLayoutButton;