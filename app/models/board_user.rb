
class BoardUser < ApplicationRecord
    validates :board_id, :user_id, presence:true

    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
