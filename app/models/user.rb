    # t.string "email", null: false
    # t.string "full_name", null: false
    # t.string "password_digest", null: false
    # t.string "session_token", null: false
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.index ["email"], name: "index_users_on_email", unique: true
    # t.index ["full_name"], name: "index_users_on_full_name"
    # t.index ["session_token"], name: "index_users_on_session_token", unique: true
    #jane / jane@example.com / chicago 
    #john / john@example.com / seattle

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
