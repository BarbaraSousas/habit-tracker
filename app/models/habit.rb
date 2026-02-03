  class Habit < ApplicationRecord
    # Validations
    validates :name, presence: true, length: { minimum: 3, maximum: 50 }
    validates :frequency, inclusion: { in: %w[daily weekly monthly], allow_nil: true }
    validates :color, format: { with: /\A#[0-9A-F]{6}\z/i, allow_blank: true }

    # Default values
    after_initialize :set_defaults, if: :new_record?

    # Scopes (queries reutilizáveis)
    scope :active, -> { where(active: true) }
    scope :inactive, -> { where(active: false) }
    scope :daily, -> { where(frequency: 'daily') }

    private

    def set_defaults
      self.active = true if self.active.nil?
      self.color ||= '#3B82F6'
    end
  end