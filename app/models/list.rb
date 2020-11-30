class List < ApplicationRecord
    validates :title, :board_id, :ord, presence: true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    # has_one :author, 
    #     through: :board,
    #     source: :author

    has_many :cards,
        foreign_key: :list_id,
        class_name: :Card,  
        dependent: :destroy

end
