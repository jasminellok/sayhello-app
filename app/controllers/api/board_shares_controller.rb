
class Api::BoardSharesController < ApplicationController
    def create
        @board_user = BoardUser.new
        @board_user.user_id = current_user.id
        @board_user.board_id = params[:id] #check front end and what is sending back
        if  @board_user.save
            @board = @board_user.board
            render "api/boards/show"
        else
            render json: @board_user.errors.full_messages, status: 422
        end
    end

    def destroy
        #check front end and what is sending back
        @board_user = BoardUser.find_by(user_id: current_user.id, board_id: params[:id])
        @board = @board_user.board
        @board_user.destroy
        render "api/boards/show"
    end
end


