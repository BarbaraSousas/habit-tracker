import React from 'react'
import { Link, router } from '@inertiajs/react'

export default function Show({ habit }) {
  function handleDelete() {
    if (confirm('Tem certeza que deseja excluir este hábito?')) {
      router.delete(`/habits/${habit.id}`)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>{habit.name}</h1>
        <Link href="/habits" className="btn">
          Voltar
        </Link>
      </header>

      <div className="habit-detail">
        <div
          className="habit-color-large"
          style={{ backgroundColor: habit.color }}
        />

        <dl className="detail-list">
          {habit.description && (
            <>
              <dt>Descrição</dt>
              <dd>{habit.description}</dd>
            </>
          )}

          <dt>Frequência</dt>
          <dd>
            {habit.frequency === 'daily' && 'Diário'}
            {habit.frequency === 'weekly' && 'Semanal'}
            {habit.frequency === 'monthly' && 'Mensal'}
          </dd>

          <dt>Status</dt>
          <dd>{habit.active ? 'Ativo' : 'Inativo'}</dd>

          <dt>Criado em</dt>
          <dd>{new Date(habit.created_at).toLocaleDateString('pt-BR')}</dd>
        </dl>

        <div className="detail-actions">
          <Link href={`/habits/${habit.id}/edit`} className="btn btn-primary">
            Editar
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}
