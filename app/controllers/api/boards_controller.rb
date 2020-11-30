# resources :boards, only: [:index, :create, :show, :update, :destroy]

class Api::BoardsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @board = Board.find_by(id: params[:id])
        render "api/boards/show"
    end
    
    def index
        @boards = Board.all.includes(:author).where(author_id: current_user.id)
        if @boards
            render "api/boards/index"
        else
            render json: @board.errors.full_messages, status: 400
        end 
    end

    def update
        # debugger;
        @board = Board.find_by(id: params[:id])
        if @board && @board.update(board_params)
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 400
        end
    end

    def create
        @board = Board.new(board_params)
        @board.author_id = current_user.id
        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 400
        end
    end
    
    def destroy 
        @board = Board.find_by(id: params[:id])
        if @board.author_id != current_user.id
            render json: ['You are not the author and cannot delete board'], status: 422
        end 
        if @board
            @board.destroy
            render json: {id: params[:id]}
        else
            render json: ['Board could not be found'], status: 400
        end
    end
  

    protected
    def board_params
        params.require(:board).permit(:title, :description, :author_id)
    end 
end