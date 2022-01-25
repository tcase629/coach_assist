class Api::GamesController < ApplicationController
  before_action :set_schedule

  def index
    @am = @schedule.games.where(type: 'morning')
    @noon = @schedule.games.where(type: 'afternoon')
    @pm = @schedule.games.where(type: 'night')
    render component: 'Games', props: { am: @am, noon: @noon, pm: @pm, schedule: @schedule, teams: Team.all }
  end

  def show
    @team = Team.find(@game.team_id)
    render component: 'Game', props: { game: @game, team: @team }
  end

  def new
    @teams = Team.all - @schedule.teams
    @game = @schedule.games.new
    render component: 'GameNew', props: { game: @game, teams: @teams, schedule: @schedule }
  end

  def create
    @game = @schedule.games.new(game_params)
    if @game.save
      redirect_to schedule_games_path(@schedule)
    else
      render component: 'GameNew', props: { game: @game, teams: @teams, schedule: @schedule }
    end
  end

  def edit 
    @teams = Team.all - @schedule.teams
    render component: 'GameEdit', props: { game: @game, teams: @teams, schedule: @schedule }
  end

  def update
    if @game.update(game_params)
      redirect_to schedule_games_path(@schedule)
    else
      render component: 'GameEdit', props: { game: @game, teams: @teams, schedule: @schedule }
    end
  end

  def destroy
    @game.destroy
    redirect_to schedule_games_path(@schedule)
  end

  private
    def set_schedule
      @schedule = Schedule.find(params[:schedule_id])
    end

    def game_params
      params.require(:game).permit(:type, :schedule_id, :time, :date, :score)
end
