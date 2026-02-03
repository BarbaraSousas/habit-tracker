import React from 'react'
import { useForm, Link, router } from '@inertiajs/react'

export default function Edit({ habit }) {
  const { data, setData, patch, processing, errors } = useForm({
    name: habit.name,
    description: habit.description || '',
    frequency: habit.frequency || 'daily',
    color: habit.color || '#3B82F6',
    active: habit.active,
  })

  function handleSubmit(e) {
    e.preventDefault()
    patch(`/habits/${habit.id}`)
  }

  function handleDelete() {
    if (confirm('Tem certeza que deseja excluir este hábito?')) {
      router.delete(`/habits/${habit.id}`)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Editar Hábito</h1>
        <Link href="/habits" className="btn">
          Voltar
        </Link>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="frequency">Frequência</label>
          <select
            id="frequency"
            value={data.frequency}
            onChange={(e) => setData('frequency', e.target.value)}
          >
            <option value="daily">Diário</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensal</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="color">Cor</label>
          <input
            id="color"
            type="color"
            value={data.color}
            onChange={(e) => setData('color', e.target.value)}
          />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={data.active}
              onChange={(e) => setData('active', e.target.checked)}
            />
            Hábito ativo
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={processing}>
            {processing ? 'Salvando...' : 'Salvar Alterações'}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Excluir
          </button>
        </div>
      </form>
    </div>
  )
}
