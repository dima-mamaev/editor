
import PlateEditor from './components/palte-editor/PlateEditor'
import './styles/globals.css'

function App() {
  const sections = [
    {
      id: 'section-1_asdad3214-24234',
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
      id: 'section-2_oaosdoas0343434_adad',
      title: 'Section 2',
      blocks: [
        {
          id: '1123123-123asdas12_czc',
          type: 'p',
          children: [{ text: 'Hello, World! Section2' }],
        },
      ]
    },
  ]
  return (
    <section style={{ backgroundColor: 'antiquewhite', minHeight: "100vh" }}>
      <div>PlateJS Editor</div>
      <section style={{ margin: "90px" }}>
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
