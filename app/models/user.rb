class User < ApplicationRecord
    attr_reader :password
    validates :email, uniqueness: true
    validates :email, :password_digest, :session_token, presence: true
    validates :full_name, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token 

    has_many :boards,
        foreign_key: :author_id,
        class_name: :Board

    has_many :lists, 
        through: :boards, 
        source: :lists
    
    has_many :board_users, 
        foreign_key: :user_id,
        class_name: :BoardUser
    
    has_many :shared_boards, 
        through: :board_users,
        source: :board

    has_many :comments, 
        foreign_key: :author_id,
        class_name: :Comment


    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        bc = BCrypt::Password.new(self.password_digest)
        bc.is_password?(password)
    end 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end


end
