class CreateUserShows < ActiveRecord::Migration[5.0]
  def change
    create_table :user_shows do |t|

      t.timestamps
    end
  end
end
