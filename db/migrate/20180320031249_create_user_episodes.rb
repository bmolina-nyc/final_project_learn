class CreateUserEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :user_episodes do |t|

      t.timestamps
    end
  end
end
