require 'excon'

class Api::StoresController < ApplicationController

  def index
    #connection = Excon.new('https://api.evotor.ru/api/v1/inventories/stores/search',
                           #:headers => {'X-Authorization' => 'xxx'})

    get_response = connection.get
    @stores = get_response.body

    render json: @stores
  end
end
