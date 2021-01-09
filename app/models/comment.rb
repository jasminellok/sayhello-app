
class Comment < ApplicationRecord
    validates :body, :card_id, :author_id, presence: true

    belongs_to :card,
        foreign_key: :card_id,
        class_name: :Card

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    has_one :board, 
        through: :card,
        source: :board

    has_one :list, 
        through: :card,
        source: :list
end
