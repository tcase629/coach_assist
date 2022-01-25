class Api::LeaguesController < ApplicationController
 
  def index
		render json: League.all
	end

	def show
		@league = League.find(params[:id])
		render json: @league
	end

	def create
		@league = League.new(league_params)
		if @league.save
			render json: @league
		else
			render json: { errors: @league.errors }, status: :unprocessable_entity
		end
	end

	def update
		@league = League.find(params[:id])
		if @league.update(league_params)
			render json: @league
		else
			render json: { errors: @league.errors }, status: :unprocessable_entity
		end
	end

	def destroy
		League.find(params[:id]).destroy
		render json: { message: 'League Deleted'}
	end
	
	private
		def league_params
			params.require(:league).permit(:title)
		end
end
