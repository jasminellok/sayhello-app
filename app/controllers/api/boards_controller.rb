# resources :boards, only: [:index, :create, :show, :update, :destroy]

class Api::BoardsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @board = Board.find_by(params[:id])
        render "api/boards/show"
    end
    
    def index
        @boards = Board.all.includes(:author).where(id: current_user.id)
        render "api/boards/index"
    end

    def update
        @board = Board.find_by(params[:id])
        if @board && @board.update(board_params)
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 400
        end
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 400
        end
    end
    
    def destroy
        @board = Board.find(params[:id])
        @board.destroy
        render "api/boards/show"
    end
  

    protected
    def board_params
        params.require(:board).permit(:title, :description, :author_id)
    end 
end