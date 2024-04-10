import { css } from '../styled-system/css'
import { center, circle, hstack, stack } from '../styled-system/patterns'

function App() {
  return (
    <div
      className={center({
        height: '100vh',
      })}
    >
      <div
        className={css({
          border: '3px solid black',
          boxShadow: '4px 4px 0px black',
          borderRadius: '13px',
          padding: 6,
          maxWidth: '300px',
        })}
      >
        <div className={stack({ gap: 4 })}>
          <div className={hstack({ gap: 4 })}>
            <div className={circle({ size: 12, overflow: 'hidden' })}>
              <img
                src="https://avatars.githubusercontent.com/u/104000239?s=48&v=4"
                alt="A cat"
                height="120px"
                width="120px"
              />
            </div>
            <div>
              <h2 className={css({ fontWeight: '600' })}>Nyatinte</h2>
              <p className={css({ color: '#7D7D7D' })}>@nyatinte</p>
            </div>
          </div>
          <blockquote className={css({ fontSize: '17px' })}>
            I'm Learning PandaCSS right now. It's looking good so far. like
            TailwindCSS but with a type safe.
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default App
