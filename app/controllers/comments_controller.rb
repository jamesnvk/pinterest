class CommentsController < ActionController::Base

  def new
    @comment = Comment.new
    render 'pages/feedback', layout: 'application'
  end

  def create
    if Comment.create(comment_params)
      respond_to do |format|
        format.html {render :show}
        format.json {render json: @pin}
      end
    else
      render plain: 'There was an error submitting feedback. Please refresh and try again'
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end