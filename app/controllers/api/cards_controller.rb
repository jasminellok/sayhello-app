class Api::CardsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @card = Card.find_by(id: params[:cardId])
        render "api/cards/show"
    end
    
    def index
        @cards = Card.all.includes(:list).where(list_id: params[:list_id])
        #debugger;
        if @cards
            render "api/cards/index"
        else
            render json: @cards.errors.full_messages, status: 400
        end 
    end

    def update
        # debugger;
        @card = Card.find_by(id: params[:id])
        if @card && @card.update(card_params)
            render "api/cards/show"
        else
            render json: @card.errors.full_messages, status: 400
        end
    end

    def create
        @card = Card.new(card_params)
        if @card.save  
            render "api/cards/show"
        else
            render json: @card.errors.full_messages, status: 400
        end
    end
    
    def destroy 
        @card = Card.find_by(id: params[:id])
        if @card
            @card.destroy
            render json: {cardId: params[:id]}
        else
            render json: ['card could not be found'], status: 400
        end
    end
  

    protected
    def card_params
        params.require(:card).permit(:title, :ord, :list_id, :description, :deadline)
    end 
end
