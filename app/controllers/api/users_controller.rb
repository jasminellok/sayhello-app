
#resources :users, only: [:create, :show]
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

    def show
        @user = User.find(params[:id])
        render "api/users/show"
    end 

    protected 
    def user_params
        params.require(:user).permit(:full_name, :email, :password)
    end 
end
