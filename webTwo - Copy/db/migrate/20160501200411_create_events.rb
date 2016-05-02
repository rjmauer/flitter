class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.text :title
      t.date :date
      t.time :time
      t.text :location
      t.text :description

      t.timestamps null: false
    end
  end
end
