// TEMPLATE FOR COMPONENT VIEW IN EXAMPLE LIBRARY.
// DUPLICATE THIS FILE DO NOT USE AS IS

import React from 'react';
import './index.scss';

// Individual Component Imports:
// import { Button } from 'blackburn-comp-library';

const CompLayout = (props) => {
  return (
    <section className="CompWikiWrap">
      {/* Title will be individual for each component. */}
      <h1>This page for: A Component</h1>

      <h2>Description:</h2>
      {/* Add Description of the usage of the component and other information here */}
      <p>Its a Button.. Duh..</p>

      <h2>Example:</h2>
      {/* Add component here. */}

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
          {/* TODO: REPLACE WITH NAME OF PROP */}
        </div>

        <div className="propDescription">
          {/* TODO: REPLACE WITH DESCRIPTION OF PROP */}
        </div>

        <div className="propsExample">
          <code>
          {/* TODO: REPLACE WITH EXAMPLE OF THE PROP BEING USED: {'<Button text="This is a button" />'} */}
          </code>
        </div>
      </section>

      <h2>Other Examples</h2>
      <p>Showcase of other examples built into the default component.</p>
    </section>
  )
}

export default CompLayout;
