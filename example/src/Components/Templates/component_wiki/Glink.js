import React from 'react';
import './index.scss';

// Individual Component Imports:

import { Glink } from 'blackburn-comp-library';


const CompLayoutGlink = (props) => {
  return (
    <section className="CompWikiWrap">
      <h1>This page for: A Anchor Component</h1>

      <h2>Description:</h2>
      <p>This component is for an A tag, not to be confused with the <a href="https://reacttraining.com/react-router/web/api/Link">React Router Link Component.</a></p>

      <h2>Example:</h2>
      <Glink
        className="DefLink"
        href="https://google.com"
        target="_blank"
        title="Google Search Homepage"
        linkText="Google Search"
      />

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
        {/* End Prop Table Headers */}

        {/* ClassName Prop */}
        <div className="propTitle">
          <p>ClassName</p>
        </div>

        <div className="propDescription">
          <p>Adds a Class Name to the component</p>
        </div>

        <div className="propsExample">
          <code>
          {'<Glink className="ClassHere" />'}
          </code>
        </div>
        {/* End  ClassName Prop */}

        {/* Href Prop */}
        <div className="propTitle">
          <p>Href</p>
        </div>

        <div className="propDescription">
          <p>Used to add the href of the link target</p>
        </div>

        <div className="propsExample">
          <code>
          {'<Glink href="http://google.com" />'}
          </code>
        </div>
        {/* End Href Prop */}

        {/* Target Prop */}
        <div className="propTitle">
          <p>The Target Prop</p>
        </div>

        <div className="propDescription">
          <p>This allows placement of the target attribute of an a tag.</p>
          <p>Options include:</p>
          <ul>
            <li><p>_blank</p></li>
            <li><p>_parent</p></li>
            <li><p>_self</p></li>
            <li><p>_top</p></li>
          </ul>
          <p>For more information, see the Mozilla documantation <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank">Here</a></p>
        </div>

        <div className="propsExample">
          <code>
            {'<Glink target="_blank" />'}
          </code>
        </div>
        {/* End Target Prop */}

        {/* Title Prop */}
        <div className="propTitle">
          <p>Title</p>
        </div>

        <div className="propDescription">
          <p>Allows definition of the title attribute</p>
        </div>

        <div className="propsExample">
          <code>
            {'<Glink title="Link to Google Search Engine" href="https://google.com" target="_blank" />'}
          </code>
        </div>
        {/* End Title Prop */}

        {/* Link Text Prop */}
        <div className="propTitle">
          <p>Link Text</p>
        </div>

        <div className="propDescription">
          <p>Defines the text to be used within the link</p>
        </div>

        <div className="propsExample">
          <code>
          {'<Glink linkText="This is a link" />'}
          </code>
        </div>
        {/* End Link Text */}
      </section>

      <h2>Other Examples</h2>
      <p>Showcase of other examples built into the default component.</p>
    </section>
  )
}

export default CompLayoutGlink;
