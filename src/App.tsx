import Button from './components/Button/Button'

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Button variant="primary">Crear campaña</Button>
      <Button variant="secondary">Exportar</Button>
      <Button variant="ghost">Ver detalles</Button>
      <Button variant="destructive">Eliminar</Button>
      <Button variant="primary" size="sm">Pequeño</Button>
      <Button variant="primary" size="lg">Grande</Button>
      <Button variant="primary" disabled>Deshabilitado</Button>
    </div>
  )
}

export default App