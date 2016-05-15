class DashboardController < ApplicationController

	def index

	end

	def get
		return render json: User.find_by_id(params[:id])
	end
end