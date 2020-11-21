# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    full_name: 'Demo User', 
    email: 'demouser@example.com',  
    password_digest: BCrypt::Password.create('demouser'),  
    session_token: SecureRandom.base64
    )


User.create(
    full_name: 'Jane', 
    email: 'jane@example.com',  
    password_digest: BCrypt::Password.create('chicago'),  
    session_token: SecureRandom.base64
    )


Board.create(
    title: "demo1",
    description: "for demo 1 test",
    author_id: 1
)

Board.create(
    title: "jane1",
    description: "for jane user 1 test",
    author_id: 2
)