import { useState } from 'react'
import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Avatar from './components/Avatar/Avatar'
import Modal from './components/Modal/Modal'
import Toast, { type Variant } from './components/Toast/Toast'

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <h2 className="text-xs font-medium text-slate-400 uppercase tracking-widest whitespace-nowrap">{title}</h2>
      <div className="h-px bg-slate-100 flex-1" />
    </div>
    {children}
  </div>
)

function App() {
  const [toasts, setToasts] = useState<{ id: number, variant: Variant, title: string, message?: string }[]>([
    { id: 1, variant: 'success', title: 'Campaña publicada', message: 'Black Friday 2024 está activa y recibiendo impresiones.' },
    { id: 2, variant: 'error', title: 'Error al publicar', message: 'No se pudo publicar la campaña. Revisá el presupuesto mínimo.' },
    { id: 3, variant: 'warning', title: 'Presupuesto bajo', message: 'Tu campaña tiene menos de $500 disponibles.' },
    { id: 4, variant: 'info', title: 'Campaña en revisión', message: 'El proceso tarda hasta 24 horas.' },
    { id: 5, variant: 'neutral', title: 'Cambios guardados' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col gap-10 p-10 max-w-2xl">

      <div>
        <h1 className="text-xl font-medium text-slate-900">AdFlow UI</h1>
        <p className="text-sm text-slate-400 mt-1">Librería de componentes para interfaces de gestión de campañas</p>
      </div>

      <Section title="Button">
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">Crear campaña</Button>
          <Button variant="secondary">Exportar</Button>
          <Button variant="ghost">Ver detalles</Button>
          <Button variant="destructive">Eliminar</Button>
        </div>
        <div className="flex gap-3 items-end flex-wrap">
          <Button variant="primary" size="sm">Pequeño</Button>
          <Button variant="primary" size="md">Mediano</Button>
          <Button variant="primary" size="lg">Grande</Button>
          <Button variant="primary" disabled>Deshabilitado</Button>
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex gap-3 flex-wrap">
          <Badge variant="success" dot>Activa</Badge>
          <Badge variant="warning" dot>Pausada</Badge>
          <Badge variant="danger" dot>Rechazada</Badge>
          <Badge variant="info" dot>En revisión</Badge>
          <Badge variant="neutral" dot>Borrador</Badge>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Badge variant="success">Activa</Badge>
          <Badge variant="warning">Pausada</Badge>
          <Badge variant="danger">Rechazada</Badge>
        </div>
      </Section>

      <Section title="Avatar">
        <div className="flex gap-4 items-end">
          <Avatar name="Juan" lastName="Saavedra" size="sm" />
          <Avatar name="Carlos" lastName="López" size="md" />
          <Avatar name="María" lastName="Saavedra" size="lg" />
          <Avatar name="Roberto" lastName="Pérez" size="xl" />
        </div>
        <div className="flex gap-4 items-center">
          <Avatar name="María" lastName="Saavedra" size="lg" imagen="https://i.pravatar.cc/150" />
          <Avatar name="Carlos" lastName="López" size="lg" imagen="https://i.pravatar.cc/151" />
        </div>
      </Section>

      <Section title="Toast">
        <div className="flex flex-col gap-2">
          {toasts.map(toast => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              title={toast.title}
              message={toast.message}
              onClose={() => setToasts(toasts.filter(t => t.id !== toast.id))}
            />
          ))}
        </div>
      </Section>

      <Section title="Modal">
        <Button variant="destructive" onClick={() => setIsModalOpen(true)}>
          Eliminar campaña
        </Button>
        <div>
          <Modal
            variant="destructive"
            title="Eliminar campaña"
            description="Esta acción eliminará permanentemente 'Black Friday 2024'. No se puede deshacer"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={() => setIsModalOpen(false)}
            confirmLabel="Eliminar"
            cancelLabel="Cancelar"
          />
        </div>
      </Section>
    </div>
  )
}

export default App
