Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :boards, only: [:index, :create, :show, :update, :destroy] 
    resources :lists, only: [:index, :create, :show, :update, :destroy]
    
    resources :cards, only: [:index, :create, :show, :update]
    resources :comments, only:[:index, :create, :update, :destroy]
  end
end
