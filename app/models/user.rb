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
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
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
