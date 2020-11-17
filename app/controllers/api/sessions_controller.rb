class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only:[:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user.nil?
            render json: ["Invalid username or password"], status:422
        else 
            login!(@user)
            render "api/users/show"
        end 
    end 

    def destroy 
        if current_user
            logout!
            render json: {}
        else
            render json: ['No user logged in ... please log in first'], status: 404
        end
    end
end
