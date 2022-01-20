class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.date :date
      t.time :time
      t.integer :score
      t.belongs_to :team, null: false, foreign_key: true
      t.belongs_to :schedule, null: false, foreign_key: true

      t.timestamps
    end
  end
end
