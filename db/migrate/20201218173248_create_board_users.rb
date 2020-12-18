class CreateBoardUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :board_users do |t|
      t.integer :board_id, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :board_users, :board_id
    add_index :board_users, :user_id
  end
end
