import React from 'react'
import './App.scss'
import { Button } from 'blackburn-comp-library';
import 'blackburn-comp-library/dist/index.scss';

const App = () => {
  return (
  <>
    <header>
      <p>This is the header</p>
    </header>
    <main>
      <aside className="mainSidebar">
      </aside>
      <section className="mainBody">
        <Button text="Gli7ches Stream is THA BEST" />
      </section>
    </main>
  </>
  )
}

export default App
