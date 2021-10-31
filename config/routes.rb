Rails.application.routes.draw do
  root 'home#index'
  resources :files, only: [:index, :update, :show]
end
