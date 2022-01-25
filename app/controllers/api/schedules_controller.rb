class Api::SchedulesController < ApplicationController
  before_action :set_league

  def index
    render json: @league.schedules
  end

  def show
    render json: @schedule
  end

  def create
    @schedule = @league.schedules.new(schedule_params)
    if @schedule.save
      render json: @schedule
    else
      render json: { errors: @schedule.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @schedule.update(schedule_params)
      render json: @schedule
    else
      render json: { errors: @schedule.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @schedule.destroy
    render json: { message: 'schedule deleted' }
  end

  private
    def schedule_params
      params.require(:schedule).permit(:title, :year)
    end

    def set_league
      @league = League.find(params[:league_id])
    end  
end
