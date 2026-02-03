import React from 'react'
import { Link } from '@inertiajs/react'

export default function Index({ habits }) {
  return (
    <div className="container">
      <header className="header">
        <h1>Meus Hábitos</h1>
        <Link href="/habits/new" className="btn btn-primary">
          Novo Hábito
        </Link>
      </header>

      {habits.length === 0 ? (
        <p className="empty-state">
          Você ainda não tem hábitos cadastrados.
        </p>
      ) : (
        <ul className="habits-list">
          {habits.map((habit) => (
            <li key={habit.id} className="habit-card">
              <div
                className="habit-color"
                style={{ backgroundColor: habit.color }}
              />
              <div className="habit-info">
                <h3>{habit.name}</h3>
                {habit.description && (
                  <p className="habit-description">{habit.description}</p>
                )}
                <span className="habit-frequency">{habit.frequency}</span>
              </div>
              <div className="habit-actions">
                <Link href={`/habits/${habit.id}`} className="btn btn-sm">
                  Ver
                </Link>
                <Link href={`/habits/${habit.id}/edit`} className="btn btn-sm">
                  Editar
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
