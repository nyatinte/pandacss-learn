import { cva } from '../styled-system/css'
import { styled } from '../styled-system/jsx'
import { stack } from '../styled-system/patterns'

const buttonRecipe = cva({
  base: { cursor: 'pointer' },
  variants: {
    visual: {
      solid: {
        bg: 'red.500',
        color: 'white',
      },
      outline: { borderWidth: '1px', borderColor: 'red.500' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' },
    },
  },
  compoundVariants: [
    {
      visual: 'solid',
      size: 'sm',
      css: { borderWidth: '4px', borderColor: 'red.700' },
    },
  ],
  defaultVariants: { visual: 'solid', size: 'lg' },
})

const Button = styled('button', buttonRecipe)

function App() {
  return (
    <div
      className={stack({
        bg: 'yellow.100',
        padding: '40',
        h: '100vh',
        gap: '10',
      })}
    >
      <Button type="button" visual="solid">
        Click Me
      </Button>
      <Button type="button" visual="outline">
        Get Started
      </Button>
    </div>
  )
}

export default App
