class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only:[:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user.nil?
            flash[:errors] = ["Invalid username or password"]
            render :new 
        else 
            login!(@user)
            redirect_to poems_url
        end 
    end 

    def destroy 
        logout!
        redirect_to new_session_url
    end
end
