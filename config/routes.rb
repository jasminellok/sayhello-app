Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :boards, only: [:index, :create, :show, :update, :destroy] do 
      resources :lists, only: [:index, :create]
    end 

    resources :lists, only: [:show, :destroy, :update] do 
      resources :cards, only: [:index, :create]
    end 
    
    resources :cards, only: [:show, :update, :destroy] do 
      resources :comments, only:[:index, :create]
    end 

    resources :comments, only:[:show, :update, :destroy]
  end
end


            #        Prefix Verb   URI Pattern                                          Controller#Action
            #          root GET    /                                                    static_pages#root
            #     api_users POST   /api/users(.:format)                                 api/users#create {:format=>:json}
            #      api_user GET    /api/users/:id(.:format)                             api/users#show {:format=>:json}

            #   api_session DELETE /api/session(.:format)                               api/sessions#destroy {:format=>:json}
            #               POST   /api/session(.:format)                               api/sessions#create {:format=>:json}

            #    api_boards GET    /api/boards(.:format)                                api/boards#index {:format=>:json}
            #               POST   /api/boards(.:format)                                api/boards#create {:format=>:json}
            #     api_board GET    /api/boards/:id(.:format)                            api/boards#show {:format=>:json}
            #               PATCH  /api/boards/:id(.:format)                            api/boards#update {:format=>:json}
            #               PUT    /api/boards/:id(.:format)                            api/boards#update {:format=>:json}
            #               DELETE /api/boards/:id(.:format)                            api/boards#destroy {:format=>:json}

            #               POST   /api/boards/:board_id/lists(.:format)                api/lists#create {:format=>:json}
            # api_board_lists GET  /api/boards/:board_id/lists(.:format)                api/lists#index {:format=>:json}  
            #      api_list GET    /api/lists/:id(.:format)                             api/lists#show {:format=>:json}
            #               PATCH  /api/lists/:id(.:format)                             api/lists#update {:format=>:json}
            #               PUT    /api/lists/:id(.:format)                             api/lists#update {:format=>:json}
            #               DELETE /api/lists/:id(.:format)                             api/lists#destroy {:format=>:json}

#             api_list_cards GET /api/lists/:list_id/cards(.:format)                      api/cards#index {:format=>:json}
#                           POST   /api/lists/:list_id/cards(.:format)                    api/cards#create {:format=>:json}
#                  api_card GET    /api/cards/:id(.:format)                               api/cards#show {:format=>:json}
#                           PATCH  /api/cards/:id(.:format)                                 api/cards#update {:format=>:json}
#                           PUT    /api/cards/:id(.:format)                                api/cards#update {:format=>:json}
#                           DELETE /api/cards/:id(.:format)                                api/cards#destroy {:format=>:json}

#         api_card_comments GET    /api/cards/:card_id/comments(.:format)                 api/comments#index {:format=>:json}
#                           POST   /api/cards/:card_id/comments(.:format)                 api/comments#create {:format=>:json}
#               api_comment GET    /api/comments/:id(.:format)                             api/comments#show {:format=>:json}
#                           PATCH  /api/comments/:id(.:format)                             api/comments#update {:format=>:json}
#                           PUT    /api/comments/:id(.:format)                             api/comments#update {:format=>:json}
#                           DELETE /api/comments/:id(.:format)                          api/comments#destroy {:format=>:json}