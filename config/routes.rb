Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    resources :stores
  end

  get '*path', to: 'homes#index'

end
