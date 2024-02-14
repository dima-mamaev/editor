import { PlateEditor } from "./editor"
import './styles/globals.css'

function App() {
  const sections = [
    {
      id: 'section-1',
      title: 'Section 1',
      blocks: [
        {
          id: '1123123-12312_czc',
          type: 'p',
          children: [{ text: 'Hello, World!' }],
        },
      ]
    },
    {
      id: 'section-2',
      title: 'Section 2',
      blocks: [
        {
          id: '1123123-12312_czc',
          type: 'p',
          children: [{ text: 'Hello, World!' }],
        },
      ]
    }
  ]
  return (
    <section>
      <div>PlateJS Editor</div>
      {
        sections.map(section => {
          return (
            <PlateEditor key={section.id} />
          )
        })

      }
    </section>
  )
}

export default App
