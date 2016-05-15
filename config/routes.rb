Rails.application.routes.draw do
  get '/profile', to: 'profile#index'

  root 'home#index'
  get '/register', to: 'register#index'
  get '/dashboard', to: 'dashboard#index'
  get '/lock', to: 'lock_screens#index'

  devise_for :users
  get '/users/:id', to: 'dashboard#get'
end
