import React from 'react'
import '../style.css'
import Toggle from './Toggle'
import ToggleRenderProps from './ToggleRenderProps'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
     <Toggle>
       <div>I AM THE CHILDREN OF TOGGLE</div>
     </Toggle>
     <ToggleRenderProps
      render={(show, setShow, style) => {
       return(
          <div style={style} >
         {show && <p>Show me Your Moves</p>}
          <button onClick={() => setShow(!show)} >
          Show/Hide your moves
          </button>
         
       </div>
       )
     }}
      />
    </section>
  )
}
export default RenderProps
