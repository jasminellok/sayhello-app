    # t.integer "board_id", null: false
    # t.integer "user_id", null: false
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.index ["board_id"], name: "index_board_users_on_board_id"
    # t.index ["user_id"], name: "index_board_users_on_user_id"

class BoardUser < ApplicationRecord
    validates :board_id, :user_id, presence:true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
