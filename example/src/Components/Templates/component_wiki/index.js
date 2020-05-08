import React from 'react';
import './index.scss';

// Individual Component Imports
import { Button } from 'blackburn-comp-library';

const CompLayout = (props) => {
  return (
    <section className="CompWikiWrap">
      {/* Title will be individual for each component. */}
      <h1>This page for: A Button</h1>

      {/* Add component here. */}
      <h2>Example</h2>
      <Button text= "This is a button" />

      <h2>Description</h2>
      <p>Its a Button.. Duh..</p>

      <h2>Props</h2>
      <section className="propsTable">
        {/* Props Table Headers */}
        <div className="colTitle">
          <p>Name</p>
        </div>
        <div className="colTitle">
          <p>Description</p>
        </div>
        <div className="colTitle">
          <p>Example</p>
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

        <h2>Other Examples</h2>

      </section>
    </section>
  )
}

export default CompLayout;
