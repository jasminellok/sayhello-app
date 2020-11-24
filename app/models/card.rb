    # t.string "title", null: false
    # t.text "description"
    # t.datetime "deadline"
    # t.integer "ord", null: false
    # t.integer "list_id", null: false
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.index ["list_id"], name: "index_cards_on_list_id"

class Card < ApplicationRecord
    validates :title, :list_id, :ord, presence: true

    belongs_to :list,
        foreign_key: :list_id,
        class_name: :List
    
    has_one :board, 
        through: :list
        source: :board

end
