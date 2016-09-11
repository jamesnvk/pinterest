class CommentsController < ActionController::Base

  def new
    @comment = Comment.new
    render 'pages/feedback'
  end

  def create
    binding.pry
    Comment.create(comment_params)
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end

end