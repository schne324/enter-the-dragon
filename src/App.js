import React, { Component, Fragment } from 'react';
import Offscreen from 'react-offscreen';
import { Highlight } from 'react-fast-highlight';
import { DequeDeck, TitleSlide, Slide } from 'deque-slide-deck';
import me from './images/me.jpg';
import logo from './images/logo.svg'
import bruce1 from './images/bruce_1.png';
import bruce2 from './images/bruce_2.png';
import bruce3 from './images/bruce_3.jpg';
import confusedBruce from './images/concerned_bruce.jpg';
import peaceBruce from './images/bruce_peace.jpg'
import sticker from './images/dragondrop_sticker.png';
import auction from './images/dragon-auction.png';
import unleash from './images/unleash.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <DequeDeck
        animation='bounce'
        footer={slideNumber => (
          <Fragment>
            <div>Ann Arbor A11y</div>
            <div className='right'>
              <Offscreen>Slide </Offscreen>
              <span>{slideNumber}</span>
            </div>
          </Fragment>
        )}
      >
        <TitleSlide
          profiles={[{ name: 'Harris Schneiderman', image: me }]}
        >
          <img src={logo} alt='' className='dragon-drop-logo' />
          <h1 className='title medium'>Enter the Dragon (Drop)</h1>
          <h2 className='title small'>HTML, ARIA, and Accessible List Reordering</h2>
          <Offscreen>Use left/right arrow keys to go to prev/next slide</Offscreen>
        </TitleSlide>
        <Slide className='central'>
          <img width='300' src={sticker} alt='Dragon Drop' />
        </Slide>
        <Slide className='central'>
          <img width='450' src={bruce1} alt='Bruce Lee with a dragon head' />
        </Slide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>{'Let\'s talk about...'}</h2>
            <ul>
              <li>Custom Widgets</li>
              <li>Live Regions</li>
              <li>
                <span>Dragon Drop</span>
                <ul>
                  <li>Problems/solutions with drag-and-drop</li>
                  <li>Configuration</li>
                  <li>Keyboard Interaction</li>
                  <li>Installation / Usage</li>
                </ul>
              </li>
              <li>...and a bunch of demos throughout!</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <h2 className='title large'>Custom Widgets</h2>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>Custom?</h3>
            <ul>
              <li>Complex UI components</li>
              <li>Keyboard interaction</li>
              <li>
                <span>Dynamic state</span>
                <ul>
                  <li><em>aria-expanded</em></li>
                  <li><em>aria-pressed</em></li>
                  <li><em>aria-selected</em></li>
                </ul>
              </li>
              <li>
                <span>Components which semantic HTML does not cover</span>
                <ul>
                  <li>Comboboxes</li>
                  <li>Accordions</li>
                  <li>Tabs</li>
                  <li><strong>Drag-and-drop</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='central'>ARIA Authoring Practices</h3>
            <p>Guideline to how you should approach developing widgets</p>
            <ul>
              <li>When/how to use a widget</li>
              <li>Which roles to use</li>
              <li>What keyboard interactions should exist</li>
              <li>Applicable aria states</li>
              <li>Focus management</li>
              <li>Examples</li>
            </ul>
            <a
              href='https://www.w3.org/TR/wai-aria-practices-1.1'
              target='blank'
            >
              WAI-ARIA Authoring Practices 1.1
            </a>
          </div>
        </Slide>
        <Slide className='central'>
          <div className='q-wrap'>
            <h3 className='title small'>What about drag-and-drop?</h3>
            <img width='200' src={confusedBruce} alt='Bruce Lee devastated' />
          </div>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>DEPRECATED</h3>
          <ul>
            <li>
              <Highlight>{'aria-grabbed'}</Highlight>
            </li>
            <li>
              <Highlight>{'aria-dropeffect'}</Highlight>
            </li>
            <li>
              <a
                href='https://lists.w3.org/Archives/Public/public-pfwg/2015Sep/0178.html?lipi=urn%3Ali%3Apage%3Ad_flagship3_pulse_read%3BNEOwgUV0S86EqFWECz7CVw%3D%3D'
                target='_blank'
                rel='noopener noreferrer'
              >
                W3C conversation about this deprecation
              </a>
            </li>
          </ul>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>No ARIA authoring practices.</h3>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>No ARIA roles/states.</h3>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>Do your homework</h3>
          <ul>
            <li>{'Existing solutions (don\'t reinvent the wheel)'}</li>
            <li>Common conventions</li>
          </ul>
        </Slide>
        <Slide className='central'>
          <div className='q-wrap'>
            <q>{'If you spend too much time thinking about a thing, you\'ll never get it done.'}</q>
            <p>- Bruce Lee</p>
            <img width='100' src={bruce3} alt='Bruce Lee' />
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>Drag-and-drop for everyone</h3>
            <ul>
              <li>Invent new keyboard behavior (hopefully intuitive)</li>
              <li>Invent custom way to convey vital info to AT</li>
              <li>Make the above discoverable</li>
            </ul>
          </div>
          <img width='100' className='right-img' src={peaceBruce} alt='' />
        </Slide>
        <Slide className='central'>
          <h2 className='title large'>Enter Live Regions</h2>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>What are live regions?</h3>
            <p>HTML elements equipped with ARIA attributes that can be used to notify screen readers of content changes.</p>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>Live regions are awesome!</h3>
            <ul>
              <li>provide a completely customized screen reader announcement without having to move focus!</li>
              <li>Great for real-time updates in remote parts of the page, status updates, and time-sensitive information.</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>Easy there pal...</h3>
            <p>Live regions should be used sparingly as they can easily create an overly-verbose experience for screen reader users</p>
          </div>
        </Slide>
        <Slide className='central'>
          <img width='420' src={auction} alt='Auction website with many listings - each with their own countdown timers' />
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>Practical uses</h3>
            <ul>
              <li>chat logs</li>
              <li>progress indicators</li>
              <li>sports score updates</li>
              <li>weather alerts</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>Making a live region</h3>
          <Highlight>
          {`
<style>
  .live-region {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    marginTop: -1px;
  }
</style>
<div class="live-region" role="status">
  Hello world!
</div>
          `}
          </Highlight>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium code-head'>aria-live</h3>
            <p>Tells screen readers that an element may be updated</p>
            <ul>
              <li><Highlight>polite</Highlight></li>
              <li><Highlight>assertive</Highlight></li>
              <li><Highlight>off</Highlight></li>
            </ul>
            <a
              href='https://twitter.com/pauljadam/status/984263821882773505'
              target='_blank'
              rel='noopener noreferrer'
            >
              aria-live="rude"?
            </a>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium code-head'>aria-atomic</h3>
            <p>Tells screen readers how to present changed regions</p>
            <ul>
              <li><Highlight>true</Highlight>present the entire changed region</li>
              <li><Highlight>false</Highlight>present only the changed node(s)</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium code-head'>aria-relevant</h3>
            <p>Tells screen readers what modifications should trigger notifications</p>
            <ul>
              <li><Highlight>additions</Highlight>present nodes added to live region</li>
              <li><Highlight>text</Highlight>present any text added as descendant to live region</li>
              <li><Highlight>removals</Highlight>present text/node removals</li>
              <li><Highlight>additions text</Highlight></li>
              <li><Highlight>all</Highlight></li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>Playing with live regions</h3>
            <a
              className='block-link'
              target='_blank'
              rel='noopener noreferrer'
              href='http://schne324.github.io/live-region-playground/'
            >
              Live region playground
            </a>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>LiveRegion module</h3>
            <Highlight>npm install live-region</Highlight>
            <a
              className='block-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/schne324/live-region'
            >
              LiveRegion on GitHub
            </a>
            <Highlight>
              {`
import LiveRegion from 'live-region';
const liveRegion = new LiveRegion({
  ariaLive: 'assertive',
  ariaRelevant: 'all',
  ariaAtomic: 'true'
});
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>Enter Dragon Drop</h2>
            <p>Accessible list reordering</p>
          </div>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>Let us go back in time...</h3>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>Questions to be answered</h3>
            <h4>How can all users...</h4>
            <ul>
              <li>understand that list is reorderable?</li>
              <li>pick an item up?</li>
              <li>reorder an item?</li>
              <li>drop an item?</li>
              <li>know when the list has been reordered?</li>
              <li>cancel the reordering?</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Conveying the drag-and-drop reordering functionality</h4>
            <p>To help all users understand that the list is reorderable via drag-and-drop, it is vital that we use clear/visible help text.</p>
            <div className='q-wrap'>
              <p>{'"Activate the reorder button and use the arrow keys to reorder the list or use your mouse to drag/reorder. Press escape to cancel the reordering."'}</p>
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Pick up / drop an item</h4>
            <p>Utilizing <code>aria-pressed</code>, we can convey the "grabbed" <strong>state</strong> of an item in a list as well as a custom readout that helps the user understand the grabbed state.</p>
            <h5 className='title small'>Example readouts:</h5>
            <div className='q-wrap'>
              <ul>
                <li>
                  <span>{'"Reorder Foo, toggle button".'}</span>
                </li>
                <li>
                  <span>{'"Foo grabbed"'}</span>
                </li>
                <li>
                  <span>{'"Foo dropped"'}</span>
                </li>
              </ul>
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Reorder an item</h4>
            <p>With the previously mentioned help text, keyboard users know that they can use the arrow keys to reorder a "grabbed" item.</p>
            <div className='q-wrap'>
              {'Don\'t forget to associate the help text with the list!'}
              <Highlight>{'<ul aria-describedby="help">...</ul>'}</Highlight>
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Reorder notification</h4>
            <p>Sighted users get the immediate visual feedback of the altered order so, using a custom live region readout, we can notify screen reader users that the list has been reordered.</p>
            <div className='q-wrap'>
              {'"The list has been reordered, Foo is now 4th in the list."'}
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Cancelling a reorder</h4>
            <p>Once again, relying on that trusty help text, we can let users know that pressing escape during reordering will cancel it.</p>
            <div className='q-wrap'>
              {'"Reordering cancelled"'}
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Relying too much on live regions / help text?</h4>
            <p>...yep</p>
            <ul>
              <li>No widely adopted conventions</li>
              <li>No spec or authoring practices</li>
              <li>No ARIA attributes to rely on</li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <h3 className='title medium'>Keyboard interaction</h3>
        </Slide>
        <Slide className='central'>
          <div>
            <div><kbd>enter</kbd></div>
            <div><kbd>space</kbd></div>
          </div>
          <p>Toggles the item between the "grabbed" and "dropped" states</p>
        </Slide>
        <Slide className='central'>
          <kbd>↓</kbd>
          <p>Moves a "grabbed" item down in the list</p>
        </Slide>
        <Slide className='central'>
          <kbd>↑</kbd>
          <p>Moves a "grabbed" item up in the list</p>
        </Slide>
        <Slide className='central'>
          <kbd>Esc</kbd>
          <p>Cancels reordering and restores previous order</p>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>Unleash the dragon</h3>
            <img className='centered' width='200' src={unleash} alt='Sisqo "Unleash the Dragon" album cover' />
            <div>
              <a
                className='block-link centered'
                target='_blank'
                rel='noopener noreferrer'
                href='https://schne324.github.io/dragon-drop/demo/'
              >
                Dragon Drop Demo
              </a>
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>Installation / Usage</h3>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Install on npm</h4>
            <Highlight>npm install --save drag-on-drop</Highlight>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>unpkg cdn</h4>
            <Highlight>
              {`
<script src="https://unpkg.com/drag-on-drop"></script>
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>GitHub</h4>
            <a
              className='block-link centered'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/schne324/dragon-drop'
            >
              Dragon Drop github repo
            </a>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Usage (module)</h4>
            <Highlight>
              {`
// if you're not down with ES6, you can require('drag-on-drop')
import DragonDrop from 'drag-on-drop';
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title medium'>Usage (window global)</h4>
            <Highlight>
              {`
<script source="https://unpkg.com/drag-on-drop"></script>
<script>
  var dragonDrop = new window.DragonDrop(listElement);
</script>
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title large'>Configuration</h3>
            <p>To support a wide range of use cases, Dragon Drop is very configurable.</p>
          </div>
        </Slide>
        <Slide className='central pop-code'>
          <div>
            <h4 className='title medium'>Default configuration</h4>
            <Highlight>
              {`
  {
    item: 'li',
    handle: 'button',
    activeClass: 'dragon-active',
    inactiveClass: 'dragon-inactive',
    announcement: {
      grabbed: el => \`Item \${el.innerText} grabbed\`,
      dropped: el => \`Item \${el.innerText} dropped\`,
      reorder: (el, items) => {
        const pos = items.indexOf(el) + 1;
        const text = el.innerText;
        return \`The list has been reordered, \${text} is now item \${pos} of \${items.length}\`;
      },
      cancel: 'Reordering cancelled'
    }
  }
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='central pop-code'>
          <div>
            <h4 className='title medium'>Announcements</h4>
            <Highlight languages={['js']}>
              {`
  {
    announcement: {
      grabbed: (targetItem, items) => \`\${targetItem.innerText} grabbed\`,
      dropped: (targetItem, items) => \`\${targetItem.innerText} grabbed\`,
      reorder: (targetItem, items) => {
        return \`\${targetItem.innerText} is now \${items.indexOf(targetItem) + 1} of \${items.length}\`
      },
      cancel: () => 'The initial order has been restored, reordering cancelled'
    }
  }
              `}
            </Highlight>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h4 className='title-medium'>Documentation</h4>
            <p>
              <span>For full documentation, read the </span>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/schne324/dragon-drop#dragon-drop'
              >
                {'README on Dragon Drop\'s GitHub'}
              </a>
            </p>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h3 className='title medium'>The future of the dragon</h3>
            <ul>
              <li>Mobile (touch screen) support</li>
              <li>Drag items from one sublist to another</li>
              <li className='thin-code'>
                <Highlight>{'<DragonDrop />'}</Highlight>
              </li>
              <li>Any ideas out there?</li>
            </ul>
            <a
              className='block-link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/schne324/dragon-drop/issues/new'
            >
              Request a feature or report a bug (GitHub Issues)
            </a>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>Links/Resources</h2>
            <ul>
              <li>
                <a href='https://www.w3.org/TR/wai-aria-practices-1.1' target='blank'>
                  WAI-ARIA Authoring Practices 1.1
                </a>
              </li>
              <li>
                <a
                  href='http://schne324.github.io/live-region-playground/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live Region Playground
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/schne324/live-region'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LiveRegion module (GitHub)
                </a>
              </li>
              <li>
                <a
                  href='https://schne324.github.io/dragon-drop/demo/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dragon Drop Demo
                </a>
              </li>
              <li>
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  href='https://github.com/schne324/dragon-drop'
                >
                  Dragon Drop on GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://www.smashingmagazine.com/2018/01/dragon-drop-accessible-list-reordering'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Smashing Magazine Dragon Drop Article
                </a>
              </li>
              <li>
                <a
                  href='https://codepen.io/schne324/pen/dZOGeG'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dragon Drop React Demo
                </a>
              </li>
            </ul>
          </div>
        </Slide>
        <Slide className='central'>
          <div>
            <h2 className='title large'>Thanks!</h2>
            <h3 className='title medium'>Harris Schneiderman</h3>
            <img width='250' src={bruce2} alt='' />
            <div>
              <a
                href='https://twitter.com/theHarrisius'
                target='_blank'
                rel='noopener noreferrer'
              >
                Follow me on the twitters (@theHarrisius)
              </a>
            </div>
          </div>
        </Slide>
        <Slide className='central'>
          <h2 className='title large'>Questions?</h2>
        </Slide>
      </DequeDeck>
    );
  }
}

export default App;
