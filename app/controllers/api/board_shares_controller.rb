
class Api::BoardSharesController < ApplicationController
    def create
        @board_user = BoardUser.new
        @board_user.user_id = User.find_by(email: params[:email]).id
        @board_user.board_id = params[:board_id] #check front end and what is sending back
        if  @board_user.save
            @board = @board_user.board
            render "api/boards/show"
        else
            render json: @board_user.errors.full_messages, status: 422
        end
    end

    def destroy
        #check front end and what is sending back
        @board_user = BoardUser.find_by(user_id: params[:user_id], board_id: params[:board_id])
        @board = @board_user.board
        @board_user.destroy
        render "api/boards/show"
    end

    protected
    def board_user_params
        params.require(:board_user).permit(:user_id, :board_id, :email)
    end 

end


