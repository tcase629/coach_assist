class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.integer :number
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
