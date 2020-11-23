class Api::ListsController < ApplicationController
        before_action :ensure_logged_in

    def show
        @list = list.find_by(id: params[:id])
        render "api/lists/show"
    end
    
    def index
        @lists = list.all.includes(:board).where(board_id: current_user.id)
        if @lists
            render "api/lists/index"
        else
            render json: @list.errors.full_messages, status: 400
        end 
    end

    def update
        @list = list.find_by(id: params[:id])
        if @list && @list.update(list_params)
            render "api/lists/show"
        else
            render json: @list.errors.full_messages, status: 400
        end
    end

    def create
        @list = list.new(list_params)
        @list.board_id = params[:id]  
        if @list.save  
            render "api/lists/show"
        else
            render json: @list.errors.full_messages, status: 400
        end
    end
    
    def destroy 
        @list = list.find_by(id: params[:id]0
        if @list
            @list.destroy
            render json: {}
        else
            render json: ['list could not be found'], status: 400
        end
    end
  

    protected
    def list_params
        params.require(:list).permit(:title, :ord, :board_id)
    end 
end
