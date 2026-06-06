import { useState } from 'react'

import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Avatar from './components/Avatar/Avatar'
import Toast from './components/Toast/Toast'

function App() {
  const [toasts, setToasts] = useState([
    { id: 1, variant: 'success', title: 'Campaña publicada', message: 'Black Friday 2024 está activa y recibiendo impresiones.' },
    { id: 2, variant: 'error', title: 'Error al publicar', message: 'No se pudo publicar la campaña. Revisá el presupuesto mínimo.' },
    { id: 3, variant: 'warning', title: 'Presupuesto bajo', message: 'Tu campaña tiene menos de $500 disponibles.' },
    { id: 4, variant: 'info', title: 'Campaña en revisión', message: 'El proceso tarda hasta 24 horas.' },
    { id: 5, variant: 'neutral', title: 'Cambios guardados' },
  ])

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            variant={toast.variant as any}
            title={toast.title}
            message={toast.message}
            onClose={() => setToasts(toasts.filter(t => t.id !== toast.id))}
          />
        ))}
      </div>
      <Avatar name="Juan" lastName="Saavedra" size="sm"></Avatar>
      <Avatar name="Carlos" lastName="López" size="md" />
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