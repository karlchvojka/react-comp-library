// TEMPLATE FOR COMPONENT VIEW IN EXAMPLE LIBRARY.
// DUPLICATE THIS FILE DO NOT USE AS IS

import React from 'react';
import './index.scss';

// Individual Component Imports:
import { LinkImg } from 'blackburn-comp-library';

const CompLayoutLinkImg = (props) => {
  return (
    <section className="CompWikiWrap">
      <h1>This page for: A Linked Image Component.</h1>

      <h2>Description:</h2>
      <p>An image that is clickable to a destination in a link.</p>

      <h2>Example:</h2>
      <LinkImg
        GlinkProps={
          {
            className: 'exampleClassName',
            href: 'https://twitch.tv/gli7ched',
            target: '_blank',
            title: 'Link to Gli7cheds Twitch Channel',
            linkText: ''
          }
        }

        ImgProps={
          {
            className: 'exampleClassName',
            src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/gli7ched-profile_image-b72d2fcc102146d2-70x70.jpeg',
            alt: 'Gli7chds Twitch Profile Image'
          }
        }
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

        {/* Glink Prop Object */}
        <div className="propTitle">
          <p>Glink Prop Object</p>
        </div>

        <div className="propDescription">
          <p>An Object to define the props for the Link (Glink)</p>
          <p>For More information see the <a href="/glink">Glink Documentation</a></p>
        </div>

        <div className="propsExample">
          <code>
            { `<LinkImg
              GlinkProps={
                {
                  className: 'exampleClassName',
                  href: 'https://twitch.tv/gli7ched',
                  target: '_blank',
                  title: 'Link to Gli7cheds Twitch Channel',
                  linkText:
                }
              }
            />`}
          </code>
        </div>
        {/* End Glink Prop Object  */}

        {/* Img Prop */}
        <div className="propTitle">
          <p>ImgProps Object</p>
        </div>

        <div className="propDescription">
          <p>An Object defining the attributes needed for the image element</p>
          <p>Attributes:</p>
          <ul>
            <li>
              <p>className:</p>
              <p>Defines the CSS class for the image</p>
            </li>
            <li>
              <p>src</p>
              <p>Defines the src attribute for the image</p>
            </li>
            <li>
              <p>alt</p>
              <p>Defines the atl attribute for the image</p>
            </li>
          </ul>
        </div>

        <div className="propsExample">
          <code>
          { `<LinkImg
            ImgProps={
              {
                className: 'exampleClassName',
                src: 'https://twitch.tv/gli7ched',
                alt: 'Alt text here'
              }
            }
          />`}
          </code>
        </div>
        {/* Img Prop */}
      </section>

      <h2>Other Examples</h2>
      <p>Showcase of other examples built into the default component.</p>
    </section>
  )
}

export default CompLayoutLinkImg;
