class Card < ApplicationRecord
    validates :title, :list_id, :ord, presence: true

    belongs_to :list,
        foreign_key: :list_id,
        class_name: :List
    
    has_one :board, 
        through: :list,
        source: :board

    has_many :comments,
        foreign_key: :card_id,
        class_name: :Comment,  
        dependent: :destroy
    

end
