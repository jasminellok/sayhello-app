class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status:422
        end 
    end 

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render "api/users/show"
    end

    def user_params
        params.require(:user).permit(:full_name, :email, :password)
    end 
end
