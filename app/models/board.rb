class Board < ApplicationRecord
    validates :title, :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User 

    has_many :lists,
        foreign_key: :board_id,
        class_name: :List,  
        dependent: :destroy

    has_many :board_users, 
        foreign_key: :board_id,
        class_name: :BoardUser

    has_many :users, 
        through: :board_users,
        source: :user
    
end
