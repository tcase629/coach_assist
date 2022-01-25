Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users, only: :update

    resources :leagues do 
      resources :teams 
      resources :schedule
    end

    resources :teams do
      resources :players
      resources :games
    end

  end
  
end
