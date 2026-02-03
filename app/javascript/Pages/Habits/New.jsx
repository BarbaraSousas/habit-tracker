import React from 'react'
import { useForm, Link } from '@inertiajs/react'

export default function New() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    frequency: 'daily',
    color: '#3B82F6',
  })

  function handleSubmit(e) {
    e.preventDefault()
    post('/habits')
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Novo Hábito</h1>
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

        <button type="submit" className="btn btn-primary" disabled={processing}>
          {processing ? 'Salvando...' : 'Criar Hábito'}
        </button>
      </form>
    </div>
  )
}
