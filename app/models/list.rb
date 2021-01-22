class List < ApplicationRecord
    validates :title, :board_id, :ord, presence: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    has_many :cards,
        foreign_key: :list_id,
        class_name: :Card,  
        dependent: :destroy

    has_many :comments, 
        through: :cards,
        source: :comments,
        dependent: :destroy

end
