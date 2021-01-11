require 'date'

class Api::CommentsController < ApplicationController
    before_action :ensure_logged_in

    def show
        @comment = Comment.find_by(id: params[:id])
        render "api/comments/show"
    end
    
    def index
        @comments = Comment.all.includes(:card).where(card_id: params[:card_id]) #need to pass back cardid
        
        if @comments
            render "api/comments/index"
        else 
            render json: @comments.errors.full_messages, status: 400
        end 
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment && @comment.update(comment_params)
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 400
        end
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save  
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 400
        end
    end
    
    def destroy 
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
            render json: {commentId: params[:id]}
        else
            render json: ['comment could not be found'], status: 400
        end
    end

    protected
    def comment_params
        params.require(:comment).permit(:body, :card_id, :author_id)
    end 
end
