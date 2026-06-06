import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Avatar from './components/Avatar/Avatar'

function App() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Avatar name="Juan" lastName="Saavedra" size="sm"></Avatar>
      <Avatar name="Carlos" lastName="López" size="md"/>
      <Avatar name="María" lastName="Saavedra" size="lg" imagen="https://i.pravatar.cc/150" />
      <Avatar name="Roberto" lastName="Pérez" size="xl" imagen="https://i.pravatar.cc/150"></Avatar>
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