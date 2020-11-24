#   create_table "boards", force: :cascade do |t|
#     t.string "title", null: false
#     t.text "description"
#     t.integer "author_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["author_id"], name: "index_boards_on_author_id"

class Board < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User 

    has_many :lists,
        foreign_key: :board_id,
        class_name: :List  
end
