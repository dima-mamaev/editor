
import PlateEditor from './components/palte-editor/PlateEditor'
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
  ]
  return (
    <section>
      <div>PlateJS Editor</div>
      <section style={{ margin: "50px" }}>
        {
          sections.map(section => {
            return (
              <PlateEditor key={section.id} initialValue={section.blocks} />
            )
          })

        }
      </section>
    </section>
  )
}

export default App
