class CreateHabits < ActiveRecord::Migration[8.1]
  def change
    create_table :habits do |t|
      t.string :name
      t.text :description
      t.string :frequency
      t.string :color
      t.boolean :active

      t.timestamps
    end
  end
end
