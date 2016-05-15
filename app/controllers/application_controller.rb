class ApplicationController < ActionController::Base


  # SOME DEVISE STUFF
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_filter :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    profile_path # <- Path you want to redirect the user to after signup
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:firstname,:lastname,:email, :password, :terms) }
    devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:firstname,:lastname,:email, :password) }
  end
end
