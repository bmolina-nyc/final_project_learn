class CreateUserMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :user_movies do |t|

      t.timestamps
    end
  end
end
