import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Badge variant="success" dot>Activa</Badge>
      <Badge variant="warning" dot>Pausada</Badge>
      <Badge variant="danger" dot>Rechazada</Badge>
      <Badge variant="info" dot>En revisión</Badge>
      <Badge variant="neutral" dot>Borrador</Badge>
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