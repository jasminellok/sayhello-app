Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :boards, only: [:index, :create, :show, :update, :destroy] do 
      resources :lists, only: [:index, :create]
    end

    resources :lists, only: [:show, :update, :destroy] do
      resources :cards, only: [:index, :create]
    end

    resources :cards, only: [:show, :update] do 
      resources :comments, only:[:index]
    end

    resources :comments, only:[:create, :update, :destroy]
  end
end
