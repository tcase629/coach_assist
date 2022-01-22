class Api::TeamsController < ApplicationController
  
  def index 
    render json: current_user.teams  
  end

  def show
    @team = current_user.teams.find(params[:id])
    render json: @team
  end

  def create 
    @team = current_user.teams.new(team_params)
    if @team.save 
      render json: @team
    else
      render json: { errors: @team.errors }, status: :unprocessable_entity
    end
  end 

  def update
    @team = current_user.teams.find(params[:id])
    if @team.update(list_params)
      render json: @team
    else
      render json: { errors: @team.errors }, status: :unprocessable_entity
    end
  end 

  def destroy
    @team = current_user.teams.find(params[:id])
    @team.destroy
    render json: { message: 'Team has been destoryed' }
  end

  private 
    def team_params
      params.require(:team).permit(:name)
    end
end
