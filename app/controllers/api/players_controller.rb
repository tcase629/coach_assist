class Api::PlayersController < ApplicationController
  before_action :set_team

  def index
    render json: @team.players
  end

  def show
    render json: @player
  end

  def create
    @player = @team.players.new(player_params)
    if @player.save
      render json: @player
    else
      render json: { errors: @player.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @player.update(player_params)
      render json: @player
    else
      render json: { errors: @player.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @player.destroy
    render json: { message: 'player deleted' }
  end

  private
    def player_params
      params.require(:player).permit(:first_name, :last_name, :age, :number)
    end

    def set_team
      @team = Team.find(params[:team_id])
    end
end
