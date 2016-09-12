class CommentsController < ActionController::Base

  def new
    @comments = Comment.all
    @comment = Comment.new
    render 'pages/feedback', layout: 'application'
  end

  def create
    @comment = Comment.new(comment_params)
      @comment.user_id = current_user.id
      if @comment.save
        respond_to do |format|
          format.html {redirect_to feedback_path}
          format.json {render json: @comment}
        end
      else
        render plain: 'There was an error submitting feedback. Please try again'
      end
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end