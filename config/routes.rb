Rails.application.routes.draw do
  resources :pins
  resources :comments, only: [:new, :create], path: '/feedback', to: 'pages#feedback'
  devise_for :users
  root "pins#index"
  get "about" => "pages#about"

end
