
@cards.each do |card|
  json.set! card.id do 
    json.partial! "api/lists/list", list: list
  end
end
