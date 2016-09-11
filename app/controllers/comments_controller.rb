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
        redirect_to root_path
      else
        render plain: 'There was an error submitting feedback. Please try again'
      end
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end