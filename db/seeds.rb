# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create(
    full_name: 'Demo User', 
    email: 'demouser@example.com',  
    password_digest: BCrypt::Password.create('demouser'),  
    session_token: SecureRandom.base64
    )


user_2 = User.create(
    full_name: 'Jane', 
    email: 'jane@example.com',  
    password_digest: BCrypt::Password.create('chicago'),  
    session_token: SecureRandom.base64
    )


board_1 = Board.create(
    title: "testing",
    description: "testing",
    author_id: 1
)

board_2 = Board.create(
    title: "jane fullstack project",
    description: "jane's fullstack project",
    author_id: 2
)

List.create(
    title: "start",
    ord: 0,
    board_id: 1
)

List.create(
    title: "in progress",
    ord: 1,
    board_id: 1
)

BoardUser.create(user_id: user_1.id, board_id:  board_1.id)
BoardUser.create(user_id: user_1.id, board_id:  board_2.id)
BoardUser.create(user_id: user_2.id, board_id:  board_2.id)
