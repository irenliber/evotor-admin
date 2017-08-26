Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    resources :stores
    resources :products
  end

  get '*path', to: 'homes#index'

end
