class Api::ListsController < ApplicationController
        before_action :ensure_logged_in

    def show
        @list = List.find_by(id: params[:id])
        render "api/lists/show"
    end
    
    def index
        @lists = Board.find_by(id: params[:board_id]).lists
        if @lists
            render "api/lists/index"
        else
            render json: @list.errors.full_messages, status: 400
        end 
    end

    def update
        @list = List.find_by(id: params[:id])
        if @list && @list.update(list_params)
            render "api/lists/show"
        else
            render json: @list.errors.full_messages, status: 400
        end
    end

    def create
        @list = List.new(list_params)
        #@list.board_id = params[:id]  
        if @list.save  
            render "api/lists/show"
        else
            render json: @list.errors.full_messages, status: 400
        end
    end
    
    def destroy 
        @list = List.find_by(id: params[:id])
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
