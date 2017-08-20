Rails.application.routes.draw do
  root 'homes#index'
  resources :stores

  get '*path', to: 'homes#index'

end
