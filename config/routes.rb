Rails.application.routes.draw do
  resources :pins
  devise_for :users
  root "pins#index"

  get "/feedback" => "comments#new"
  post "/feedback" => "comments#create"
  
  get "/users" => "users#index"
  get "/users/:id" => "users#show"
end
