class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  protected

  def ensure_frame_request
    redirect_to url_for(controller: controller_path, action: :index) unless turbo_frame_request?
  end
end
