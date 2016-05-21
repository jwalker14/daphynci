Rails.application.routes.draw do
  root 'home#index'

  get '/profile', to: 'profile#index'
  get '/register', to: 'register#index'
  get '/dashboard', to: 'dashboard#index'
  get '/lock', to: 'lock_screens#index'
  get '/users/:id', to: 'dashboard#get'


  devise_for :users, :controllers => { :omniauth_callbacks => "callbacks" }


  #added for Facebook authentication
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
end
