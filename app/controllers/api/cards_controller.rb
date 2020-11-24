class Api::CardsController < ApplicationController
            before_action :ensure_logged_in

    def show
        @card = Card.find_by(id: params[:cardId])
        render "api/cards/show"
    end
    
    def index
        debugger;
        @cards = List.find_by(id: params[:list_id]).cards
        if @cards
            render "api/cards/index"
        else
            render json: @cards.errors.full_messages, status: 400
        end 
    end

    def update
        @card = Card.find_by(id: params[:cardId])
        if @card && @card.update(card_params)
            render "api/cards/show"
        else
            render json: @card.errors.full_messages, status: 400
        end
    end

    def create
        @card = Card.new(card_params)
        #@list.board_id = params[:id]  
        if @card.save  
            render "api/cards/show"
        else
            render json: @card.errors.full_messages, status: 400
        end
    end
    
    def destroy 
        @card = Card.find_by(id: params[:cardId])
        if @card
            @card.destroy
            render json: {}
        else
            render json: ['list could not be found'], status: 400
        end
    end
  

    protected
    def card_params
        params.require(:card).permit(:title, :ord, :list_id, :description, :deadline)
    end 
end
