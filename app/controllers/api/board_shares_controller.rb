
class Api::BoardSharesController < ApplicationController
    def create
        @board_user = BoardUser.new
        if !User.find_by(email: params[:email])
            render json: ['Error, Invalid Email'], status: 404
            return
        end 
        @board_user.user_id = User.find_by(email: params[:email]).id
        @board_user.board_id = params[:board_id] 
        if  @board_user.save
            @board = @board_user.board
            @users = @board.users
            render "api/users/index"
        else
            render json: @board_user.errors.full_messages, status: 422
        end
    end

    def destroy
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


